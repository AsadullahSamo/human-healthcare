import Link from 'next/link';

export default function ServiceAgreementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-[44px] leading-[48.4px] font-poppins font-semibold text-black text-center mb-12">
              Service Agreement
            </h1>

            {/* Content */}
            <div className="space-y-6">
              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                Welcome to the{' '}
                <span className="text-[#a35966]">Human-Healthcare</span> family.
                Here, you will experience a new world of precision-based,
                preventive & personalized VIP healthcare and wellness.
              </p>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                We are glad to have you as an enrolled member of Human Health
                Care Services Pvt Ltd. As part of your VIP Human-Healthcare
                membership, we offer you a wide variety of preventive,
                personalized primary care, non-emergency, services that are
                specifically tailored to your (or your parent's) goals and
                values. This Agreement explains these services and how we will
                work together to accomplish the goals.
              </p>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                Before proceeding further, we (Human-Healthcare) explicitly want
                to mention that the Customer Data is NOT shared with any third
                party. This is a strict policy of Human-Healthcare. Human
                Healthcare will ONLY use it for improving the customer's
                healthcare management. Human-Healthcare also promotes rigorous
                auditing and organizational quality improvement with the focus
                to enhance the overall healthcare experience of the customer and
                to create efficient pathways for improving the healthcare
                outcomes.
              </p>

              {/* Section 1 */}
              <h2 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-8">
                1. Definitions
              </h2>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                "Agreement" means this Human-Healthcare Services Agreement.
                "Customer Data" means electronic data and information submitted
                by or for Customer to the Services. "Effective Date" means the
                date on which this Agreement is executed or otherwise accepted
                by both Human Health Care Services and Customer. "Intellectual
                Property Rights" means all trade secrets, intellectual
                information, patents and patent applications, trademarks
                (whether registered or unregistered and including any goodwill
                acquired in such trade marks), service marks, trade names,
                copyrights, moral rights, database rights, design rights, rights
                in know-how, rights in Confidential Information, rights in
                inventions (whether patentable or not) and all other
                intellectual property and proprietary rights (whether registered
                or unregistered, any application for the foregoing, and all
                rights to enforce the foregoing), and all other equivalent or
                similar rights which may subsist anywhere in the world.
                "Malicious Code" means code, files, scripts, agents or programs
                intended to do harm, including, for example, viruses, worms,
                time bombs and Trojan horses. "Human-Healthcare" &
                "Human-Healthcare.com" means Human Health Care Services,
                Pakistani registered company. "Human-Healthcare Technology"
                means the computer software applications, tools,
                application-programming interfaces (APIs), connectors, programs,
                networks and equipment that Human-Healthcare uses to make its
                services available to its customers. "Non-Human-Healthcare
                Service" means a service, database, process or functionality
                that is provided by a third party and interoperates with the
                Services including, for example, an application programming
                interface (API), or third-party imaging or consultation
                services. "PHI" means, "protected health information".
                "Services" means the Human-Healthcare services made available to
                the Customer by Human-Healthcare. Services exclude Customer
                Data. "User" means an individual who is authorized by Customer
                to use the Services and have access to data and to whom Customer
                (or, when applicable, Human-Healthcare at Customer's request)
                has supplied a user identification and password.
              </p>

              {/* Section 2 */}
              <h2 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-8">
                2. Services
              </h2>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                2.1. Services.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                Human-Healthcare values your time and ensures your convenience
                is a priority. Hence, virtual care via telephone, video or text
                are available. We consider Virtual Care a vital part of your
                membership and we respond to your needs within hours. This is in
                addition to receiving care at your home. During onboarding or in
                rare circumstances even the family MD (medical doctor) visits
                in-person to your home, subject to certain limitations.
              </p>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                <strong>Annual Exam:</strong> Your health and longevity are best
                served by periodic oversight. Therefore, we will perform a
                comprehensive annual examination to monitor existing health
                conditions and recommend preventative treatments.
              </p>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                <strong>Routine Follow-ups:</strong> A dedicated family medical
                doctor with a team of dedicated healthcare coordinators provides
                routine follow-ups, courtesy touchpoints, health checks
                throughout the year, based on the individual health needs.
              </p>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                <strong>Wellness Education:</strong> Your good health is about
                more than avoidance or management of illness; it is about
                developing optimal performance for your lifestyle. Our Wellness
                Education is included in this subscription-based membership and
                promotes great sleep, physical fitness, and balanced mental
                health.
              </p>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                <strong>Non-Emergency Ancillary Services:</strong> Your care may
                require ancillary services such as certain laboratory tests or
                two lead electrocardiography by our Human-Healthcare Team. Pick
                and drop of medications can also be coordinated, as needed,
                subject to certain limitations. Similarly, most laboratory
                testing, all imaging, all drugs' costs will not be covered in
                this subscription-based membership program. The subscriber will
                have to pay additional charges as required.
              </p>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                <strong>Comprehensive Care Coordination:</strong> If your care
                requires the services of medical specialists, we will try our
                best to source the appropriate referral for you. The consultant
                fees are not covered in this subscription package. We will also
                facilitate laboratory tests and other medical investigations, as
                required. However, third party services are not under our
                influence or coverage, and we apologize in advance for any
                inconvenience the coordination and facilitation around third
                party services may cause. Similarly, specialist visits with
                local consultants will be beyond our scope of services and any
                experience encountered during those visits will be outside our
                service domain. Legally and medically, we are not liable for any
                third-party arrangements or facilitations that we do on your
                request, or on your behalf. Once the specialist consultation is
                complete, we will continue to work with your specialists to
                coordinate care with our Human-Healthcare primary care team.
                While emergency services and hospital admissions are not a part
                of Human-Healthcare subscription membership, if you are admitted
                to the hospital, we can work diligently with your hospital
                providers to facilitate the best care available. After all, we
                want to break the silos that exist in healthcare and make your
                primary and preventive healthcare experience as seamless and
                high-value as possible.
              </p>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                2.2. Exclusions & Excluded Services.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                We do not provide emergency services. We do not take
                responsibility for any emergent care needs that may arise during
                the tenure of your subscription and membership with
                Human-Healthcare. You may need the care of emergency rooms,
                outside laboratory testing, pathology studies, prescribed
                medications, radiologic imaging, specialist consultations or
                treatment, surgery, urgent care centers, specialty vaccinations,
                or other healthcare services that are outside the scope of this
                Agreement and are not included in the subscription. We encourage
                you to have emergency medical services numbers available at all
                times, saved in your phone, in case need arises.
              </p>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                We are not an emergency service or triage company. We are a
                primary healthcare service. We highly recommend that you
                maintain health insurance, which may or may not cover the costs
                of these services. We will endeavor to place orders for Excluded
                Services in a manner that is cost effective for you. Payments to
                third parties can be directly paid by you (the customer/ service
                user). We remind you, as your primary care health team, we will
                facilitate but cannot take responsibility for the entire
                healthcare systems experience. Controlled Substances. It is not
                our policy to prescribe chronic controlled substances on your
                behalf, including commonly abused opioid medications,
                benzodiazepines, and other stimulants. If we do prescribe this
                class of pharmaceuticals for you, you will be asked to sign and
                honor our Controlled Substances Agreement.
              </p>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                2.3. Restrictions.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                Customer will not, and will not permit any of its Users to, (a)
                make any of the Services available to, or use any Services for
                the benefit of, anyone other than Customer, its Users with whom
                Customer and its Users interact using the Services for the
                purposes of providing healthcare services. For example, if the
                subscriber pays annual or monthly payments for their parent's
                primary care, expecting or later requesting another relative to
                get care from this same subscription would be unethical and
                unfortunately, will not be entertained.
              </p>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                2.4. Modifications to Services.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                The Services may be modified by Human-Healthcare from time to
                time as it deems necessary to address changes in technology,
                care services, and the needs of its customers, if any such
                modification will not degrade the functionality of the Services
                in any material manner, unless required by applicable law.
                Human-Healthcare will notify Customer in advance of any material
                changes. Cessation. In certain circumstances, we may need to
                transfer your care to another provider. If this happens, we will
                provide you with prior notice to switch care teams. We will
                provide 1 week notice in case of cessation of your membership.
                There are other circumstances for which we may choose to
                immediately terminate this Agreement. Such circumstances may
                include, but are not limited to:
              </p>

              <ul className="list-disc list-inside font-poppins text-[15px] leading-[25px] text-[#565656] ml-4">
                <li>Failure to pay Fees and charges when they are due.</li>
                <li>
                  Failure to sign our Controlled Substances Agreement, or other
                  required documentation, as applicable.
                </li>
                <li>Failure to adhere to the recommended treatment plan.</li>
                <li>
                  You are disruptive, abusive, or present an emotional or
                  physical danger to the wellbeing of the staff or other
                  patients of our practice. Human-Healthcare discontinues
                  operation.
                </li>
              </ul>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                2.5. Non-Human-Healthcare Services.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                If Customer uses or authorizes Human-Healthcare to use a
                Non-Human-Healthcare Service with the Services, Customer grants
                Human-Healthcare permission to allow the Non-Human-Healthcare
                Service and its provider to access Customer Data as required for
                the interoperation of such Non-Human-Healthcare Service with the
                Services. Human-Healthcare is not responsible for any
                disclosure, modification or deletion of Customer Data resulting
                from such access by such Non-Human-Healthcare Service or its
                provider. Except to the extent expressly provided otherwise in a
                Service Order, Customer's purchase or use of any
                Non-Human-Healthcare Service is solely between Customer and the
                provider of the Non-Human-Healthcare Service, subject to any
                terms and conditions specified with respect to the
                Non-Human-Healthcare Service, and Human-Healthcare neither makes
                any warranty nor provides any support with respect to any
                Non-Human-Healthcare Service. The Services may contain features
                designed to interoperate with Non-Human-Healthcare Services. Use
                of such features may require Customer to obtain access to such
                Non-Human-Healthcare Services from their providers, and to
                provide access to such Customer's account(s) on such
                Non-Human-Healthcare Services to Human-Healthcare.
                Human-Healthcare cannot guarantee the continued availability of
                such Service features, and may cease providing them without
                entitling Customer to any refund, credit, or other compensation,
                if, for example and without limitation, the provider of a
                Non-Human-Healthcare Service ceases to make the
                Non-Human-Healthcare Service available for interoperation with
                the corresponding Human-Healthcare Service features in a manner
                acceptable to Human-Healthcare.
              </p>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                2.6. Consent to Treat.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                By signing this agreement, you acknowledge, consent, and hereby
                authorize Human-Healthcare (Human Health Care Services Pvt Ltd)
                and its care providers to carry out your healthcare treatment.
                Treatment includes but is not limited to: the administration and
                performance of all treatments, the administration and use of
                prescribed medications, the performance of such procedures as
                may be deemed necessary or advisable for treatment, including
                but not limited to diagnostic procedures, the taking and
                utilization of cultures, and of other medically accepted
                laboratory tests, all of which in the judgment of your physician
                or their assigned designees may be considered medically
                necessary or advisable. You acknowledge and understand that this
                consent is given in advance of any specific diagnosis or
                treatment, that these services are voluntary, and that you have
                the right to refuse these services. You understand and intend
                this consent to be continuing in nature, even after a specific
                diagnosis has been made and treatment recommended. This consent
                will remain in full force unless revoked in writing and will
                not affect any actions that were taken prior to receiving your
                revocation.
              </p>

              {/* Section 3 */}
              <h2 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-8">
                3. Proprietary Rights and Licenses
              </h2>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                3.1 Limited License to Use Services.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                Subject to the terms and conditions of this Agreement,
                Human-Healthcare hereby grants to Customer a non-exclusive,
                non-transferable, limited, royalty-free license, without right
                to sub-license, terminable in accordance with the terms of this
                Agreement, to access and use, and to permit its Users to access
                and use, the Services, solely for Customer's operations in its
                ordinary course of business.
              </p>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                3.2. Limited License to Use Customer Data.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                Customer hereby grants to Human-Healthcare a non-exclusive,
                non-transferable, limited, royalty-free license, without right
                to sub-license (except to its sub-processors, as required for
                the provision of the Services), to use the Customer Data, solely
                as necessary to perform the Services and as otherwise may be
                agreed in writing by Customer.
              </p>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                3.3. Reservation of Rights.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                No rights or licenses are granted except as expressly set forth
                herein. Without limiting the foregoing, subject to the limited
                rights expressly granted in this Section 3, all right, title
                and interest (including all related Intellectual Property
                Rights) in and to (a) the Services and the Human-Healthcare
                Technology is retained by Human-Healthcare.
              </p>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                3.4 Feedback.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                Customer grants Human-Healthcare a worldwide, perpetual,
                irrevocable, royalty-free license to use and incorporate into
                the Services and the Human-Healthcare Technology any suggestion,
                enhancement request, correction or other feedback provided by
                Customer or its Users relating to the Services or the
                Human-Healthcare Technology. This Section 3.4 shall survive the
                termination of this Agreement.
              </p>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                3.5 Privacy & Communications Your Privacy Rights.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                You acknowledge and hereby authorize Human-Healthcare to use
                and/or disclose your health information that specifically
                identifies you, or that can reasonably be used to identify you,
                to carry out your treatment, and healthcare operations.
                Human-Healthcare will adhere to its obligations regarding your
                privacy rights as identified in this agreement in the
                confidentiality and privacy section. Your signature on this
                Agreement means that you attest that you have read, understand,
                and agree with privacy practices of Human-Healthcare. Methods of
                Communication. You acknowledge that Human-Healthcare
                communications may include e-mail, facsimile, video chat,
                instant messaging, and cell phone (collectively,
                "Communications"). In spite of our full efforts and investments
                to create and work on secure, PHI-safety compliant technology,
                Communications by their nature cannot be guaranteed to be secure
                or confidential. If you initiate a conversation in which you
                disclose PHI on any of these Communication platforms, then you
                authorize Human-Healthcare to communicate with you regarding all
                protected health information in the same format. Communications
                technology and platforms can at times be outside of our control.
                Therefore, Human-Healthcare and our physicians shall not be
                liable to you, or anyone, for any cost, damage, expense, injury,
                or other loss relating to Communications malfunction or a delay
                in response. We kindly ask that you limit after-hours, weekend,
                and holiday communication to situations that cannot wait until
                the next day. We try our best to respond within hours in most
                situations. We again, kindly remind you that we are not an
                emergency care provider and all emergencies should be directed
                to ambulances and hospital emergency rooms.
              </p>

              {/* Section 4 */}
              <h2 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-8">
                4. Fees, Subscription & Non-Insurance.
              </h2>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                4.1. Disclaimer of Non-Insurance.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                This Agreement is not a health insurance plan, prepaid health
                plan, or substitute for healthcare coverage. As such, this
                Agreement is not subject to health insurance protections
                provided for by provincial or country law. This Agreement is
                solely for the described Services and it does not cover
                hospital, specialist, laboratory, medications, or any services
                not directly provided by our practice.
              </p>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                4.2 Fees.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                Your membership is for one year and will automatically renew
                until you decide not to renew. You can cancel anytime without
                any cancellation fees. Your annual fee is identified on the
                payment form and may be made in monthly installments or
                quarterly installments, if you prefer. Installment payments are
                due no later than the last day of the month for which Services
                were provided. Late payments are not acceptable as they disrupt
                our coordination of care. Payments that are 30 days overdue
                will incur a $100.00 reactivation fee. In order to remain
                financially viable, Human-Healthcare reserves the right to
                change its fees at any time with 30 days' notice to you. There
                is a small percentage increase in membership fee every two years
                based on inflation and other economic metrics. You may end your
                membership anytime, and any remaining membership fee will be
                prorated and refunded to you. If you choose to discontinue your
                membership and you later wish to re-enroll, we reserve the right
                to decline re-enrollment or require you to pay a re-enrollment
                fee that is equivalent to the months of absent payments while
                you were not enrolled as a member, not to exceed twelve (12)
                months. You are required to keep a valid form of payment on file
                and if the form of payment provided expires or otherwise becomes
                invalid, you agree to promptly provide updated payment
                information. In the event there are costs associated with
                invalid payment information, such charges will be applied to
                your account.
              </p>

              {/* Section 5 */}
              <h2 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-8">
                5. Confidentiality
              </h2>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                5.1. Definition of Confidential Information.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                "Confidential Information" means all information disclosed by a
                party ("Disclosing Party") to the other party ("Receiving
                Party"), whether orally or in writing, that is designated as
                confidential or that reasonably should be understood to be
                confidential given the nature of the information and the
                circumstances of disclosure. Customer's Confidential Information
                includes its Customer Data. Human-Healthcare Confidential
                Information includes the Services. The Confidential Information
                of each party includes the terms and conditions of this
                Agreement as well as business and marketing plans, technology
                and technical information, product plans and designs, and
                business processes disclosed by such party. However,
                Confidential Information does not include any information that
                (a) is or becomes generally known to the public without breach
                of any obligation owed to the Disclosing Party, (b) was known
                to the Receiving Party prior to its disclosure by the Disclosing
                Party without breach of any obligation owed to the Disclosing
                Party, (c) is received from a third party without breach of any
                obligation owed to the Disclosing Party, or (d) was
                independently developed by the Receiving Party.
              </p>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                5.2. Obligations.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                The Receiving Party will use the same degree of care that it
                uses to protect the confidentiality of its own confidential
                information of like kind (but not less than reasonable care) (i)
                not to use any Confidential Information of the Disclosing Party
                for any purpose outside the scope of this Agreement and (ii)
                except as otherwise authorized by the Disclosing Party in
                writing, to limit access to Confidential Information of the
                Disclosing Party to those of its employees and contractors who
                need that access for purposes consistent with this Agreement and
                who have signed confidentiality agreements with the Receiving
                Party containing protections not less protective of the
                Confidential Information than those herein.
              </p>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                5.3. Exceptions.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                The Receiving Party may disclose Confidential Information of the
                Disclosing Party to the extent compelled by law to do so,
                provided the Receiving Party gives the Disclosing Party prior
                notice of the compelled disclosure (to the extent legally
                permitted) and reasonable assistance, at the Disclosing Party's
                cost, if the Disclosing Party wishes to contest the disclosure.
                Similarly, as permitted by the Disclosing Party, the Receiving
                party may share some healthcare information with specialists,
                hospitals or emergency services with the intention to enhance
                and facilitate care experience of the Disclosing Party.
              </p>

              {/* Section 6 */}
              <h2 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-8">
                6. Customer Data
              </h2>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                6.1. Data Protection.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                Human-Healthcare will maintain administrative, physical, and
                technical safeguards for protection of the security,
                confidentiality and integrity of the Customer Data. Those
                safeguards will include, but will not be limited to, measures
                for preventing access, use, modification or disclosure of
                Customer Data by Human-Healthcare personnel except (a) to
                provide the Services and prevent or address service or technical
                problems, (b) as compelled by applicable law, or (c) as Customer
                expressly permits in writing. Customer acknowledges and agrees
                that it is commercially reasonable for Human-Healthcare to rely
                upon the security processes and measures utilized by
                Human-Healthcare's cloud infrastructure providers.
              </p>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                6.2 Personal information and privacy policy.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                In these Terms and Conditions, "personal information" means any
                information about an identifiable individual, such as your name,
                email address, mailing address, gender, date of birth, any
                personal or protected health information, or, any data about you
                that you elect to provide electronically through the Websites
                and Platforms and any other information that identifies who you
                are. Personal Information will be used by Human-Healthcare
                solely in accordance with these Terms and Conditions, and
                Human-Healthcare's Web and Mobile Privacy Policy (or as
                otherwise agreed upon between you and Human-Healthcare in
                writing). You agree that Human-Healthcare has the right to
                monitor and review your use of the Websites and Platforms from
                time to time, and to use "cookies", "log files" and your
                "browsing data" in accordance with the Cookie Policy.
              </p>

              {/* Section 7 */}
              <h2 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-8">
                7. Representation and Warranties; Disclaimers
              </h2>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                7.1. Human-Healthcare.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                Human-Healthcare represents and warrants that; (a) it has the
                full power and authority to enter into this Agreement, to
                perform its obligations under this Agreement, and to grant the
                licenses and rights granted to Customer in this Agreement; (b)
                this Agreement is the legal, valid, and binding obligation of
                Human-Healthcare, enforceable against it in accordance with the
                terms hereof, except to the extent such enforceability may be
                limited by bankruptcy, reorganization, insolvency or similar
                laws of general applicability governing the enforcement of the
                rights of creditors or by the general principles of equity
                (regardless of whether considered in a proceeding at law or in
                equity); (c) it will comply with all applicable laws relating to
                its performance and/or obligations under this Agreement; (d)
                this Agreement does not conflict with any other contract or
                obligation to which it is a party or by which it is bound, and;
                (e) it will use its commercially reasonable efforts to perform
                the Services in a timely, professional and workmanlike manner.
              </p>

              {/* Section 8 */}
              <h2 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-8">
                8. Dispute Resolution.
              </h2>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                In the unlikely event that a dispute arises, we will work with
                you to resolve that dispute in good faith, which may require
                mediation. If we are unsuccessful, final disposition shall be
                resolved by binding arbitration and enforced by any court of
                competent jurisdiction. Human-Healthcare will choose the provider
                of arbitration services.
              </p>

              {/* Section 9 */}
              <h2 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-8">
                9. Limitation of Liability
              </h2>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                9.1. Exclusion of Certain Claims.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                In no event will Human-Healthcare have any liability for any
                indirect, incidental, special, consequential, cost of cover,
                punitive or exemplary damages, however caused and on any theory
                of liability, arising out of this agreement or the services,
                including loss of business, revenue or anticipated profits.
              </p>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                9.2. LIMITATION OF LIABILITY.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                IN NO EVENT WILL Human-Healthcare's AGGREGATE LIABILITY UNDER
                THIS AGREEMENT EXCEED THE SUM OF $500. Human-Healthcare is a
                Pakistan based firm and Pakistani regulations will apply.
              </p>

              <h3 className="text-[16px] leading-[22.4px] text-black font-poppins font-bold mt-6">
                9.3. Exceptions.
              </h3>

              <p className="font-poppins text-[15px] leading-[25px] text-[#565656] mb-12">
                The foregoing disclaimers in this Section 10 shall not apply to
                the extent prohibited by law. No amendment or variation of the
                terms of this Agreement shall be valid unless mutually agreed to
                in writing. It is possible that we will need to delegate certain
                duties under this Agreement and you consent to such delegation.
                This Agreement constitutes the entire agreement between us and
                supersedes any and all other oral or written agreements,
                representations, negotiations, and understandings. Your
                signature below means that you have read, understand, and agree
                to all of the terms contained in this Agreement. If you are
                enrolling other members, your signature means that you have the
                authority to act on their behalf and you are financially
                responsible for Services they receive under this Agreement.
              </p>

              {/* Signature Section */}
              <div className="border-t border-gray-300 pt-8 space-y-4">
                <div className="space-y-3">
                  <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                    Signature:_______________________________________________
                  </p>
                  <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                    Date: __________________________________________________
                  </p>
                  <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                    Subscriber Name:__________________________________________
                  </p>
                  <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                    Subscriber Email: __________________________________________
                  </p>
                  <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                    Address: ________________________________________________
                  </p>
                  <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                    Phone: _________________________________________________
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                    Emergency Contact: (Name, Address, Email, & Phone)
                  </p>
                  <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                    Enrolled Members Name With Date of Birth:
                  </p>
                  <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                    1)_____________________________________________________
                  </p>
                  <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                    2)_____________________________________________________
                  </p>
                  <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                    Address:________________________________________________
                  </p>
                  <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                    Phone:_________________ Alternate Phone: _____________________
                  </p>
                  <p className="font-poppins text-[15px] leading-[25px] text-[#565656]">
                    Parent's Signature with Dates:__________________________________
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}