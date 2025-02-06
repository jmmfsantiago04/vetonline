"use client"
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const faqs = [
  {
    question: "How do online vet consultations work?",
    answer: "Online vet consultations work through video calls or chat. You'll connect with a licensed veterinarian who will assess your pet's condition, provide advice, and recommend treatment options. While we can't perform physical examinations or prescribe certain medications online, we can help with many common concerns and determine if an in-person visit is necessary."
  },
  {
    question: "What types of pet health issues can be addressed online?",
    answer: "We can help with many common issues including: behavioral problems, dietary concerns, minor skin conditions, general wellness questions, post-surgery follow-ups, and preliminary assessment of symptoms. However, emergencies or conditions requiring physical examination should be treated in person."
  },
  {
    question: "How much does an online consultation cost?",
    answer: "Our consultation fees vary based on the type and duration of the service. Video consultations start at $30 for a 15-minute session, while chat support is available at $20 per consultation. We also offer subscription plans for pet owners who need regular advice."
  },
  {
    question: "Are the veterinarians licensed?",
    answer: "Yes, all our veterinarians are fully licensed and experienced professionals. They maintain active licenses in their practicing jurisdictions and undergo regular training to stay updated with the latest in veterinary medicine."
  },
  {
    question: "How quickly can I get an appointment?",
    answer: "We offer both scheduled appointments and on-demand consultations. For scheduled appointments, you can typically book within 24 hours. For urgent matters, our on-demand service connects you with an available vet within 30 minutes during operating hours."
  },
  {
    question: "What if my pet needs medication?",
    answer: "While we cannot prescribe certain medications without a physical examination, our vets can provide guidance on over-the-counter options and advise if an in-person visit is necessary for prescription medication. We can also help coordinate with your local vet for prescriptions."
  },
  {
    question: "Is my pet's information kept confidential?",
    answer: "Yes, we take your pet's privacy seriously. All consultation records and medical information are stored securely and handled in accordance with veterinary medical privacy standards. We never share your information without your explicit consent."
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer: "You can cancel or reschedule your appointment up to 2 hours before the scheduled time without any charge. Late cancellations or no-shows may incur a fee. Changes can be made easily through our website or by contacting our support team."
  },
  {
    question: "Do you offer emergency services?",
    answer: "While we provide 24/7 consultation services, we are not a replacement for emergency veterinary care. For life-threatening situations, we recommend immediately visiting your nearest emergency veterinary clinic. We can help assess if your situation requires emergency care."
  },
  {
    question: "Can I get a copy of my pet's consultation records?",
    answer: "Yes, you can access all your pet's consultation records, chat histories, and recommendations through your account dashboard. These can be downloaded or shared with your regular veterinarian as needed."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our online veterinary services
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`px-6 pb-4 ${
                    openIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help!
            </p>
            <a
              href="https://wa.me/5571991916499"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 