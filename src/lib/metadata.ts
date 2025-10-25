import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Human Healthcare',
  description:
    'Professional healthcare services delivered to your home. Expert care, comfort, and convenience when you need it most.',
  url: 'https://human-healthcare.com',
  ogImage: 'https://human-healthcare.com/og-image.jpg',
  keywords: [
    'healthcare',
    'home healthcare',
    'medical services',
    'nursing care',
    'doctor visits',
    'physiotherapy',
    'health services',
    'medical care at home',
    'healthcare professionals',
    'health consultation',
  ],
  author: 'Human Healthcare Team',
  creator: 'Human Healthcare',
  publisher: 'Human Healthcare',
};

export function generatePageMetadata({
  title,
  description,
  path = '',
  keywords = [],
  image,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const pageKeywords = [...siteConfig.keywords, ...keywords];

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    keywords: pageKeywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title: `${title} | ${siteConfig.name}`,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image || siteConfig.ogImage],
      creator: '@humanhealthcare',
      site: '@humanhealthcare',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
