import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '../../../lib/validations/contact';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = contactFormSchema.parse(body);

    console.log('Contact form submission:', validatedData);

    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        success: true,
        message:
          'Your message has been received. We will get back to you within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid form data. Please check your inputs and try again.',
          errors: error,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          'An error occurred while processing your request. Please try again later.',
      },
      { status: 500 }
    );
  }
}
