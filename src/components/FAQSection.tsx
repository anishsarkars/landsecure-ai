
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "How can I search for properties on your website?",
    answer: "Simply use the search bar at the top of our homepage. You can filter by location, property type, risk level, and price range. Our advanced AI will help you find the most relevant properties that match your criteria."
  },
  {
    question: "What fees are associated with using your services?",
    answer: "Basic property searches and risk assessments are completely free. For detailed verification reports, legal document verification, and property history, we offer premium plans starting at ₹999 per month. One-time verification services are also available from ₹2,499 per property."
  },
  {
    question: "How can I verify the authenticity of property listings?",
    answer: "All properties on our platform go through a rigorous verification process. We check government records, legal documents, and owner information. Properties with a 'Verified' badge have been confirmed by our team and have clean legal status. You can also request additional verification services for any listing."
  },
  {
    question: "What is your process for international property transactions?",
    answer: "International property transactions involve additional verification steps. We coordinate with local partners and government agencies in both countries to ensure compliance with all regulations. Our international transaction team provides end-to-end support including document verification, legal compliance checks, and secure payment processing."
  },
  {
    question: "How can I schedule a property viewing?",
    answer: "You can schedule a property viewing directly through our platform. Simply navigate to the property listing page and click on the 'Schedule Viewing' button. You'll be able to select available dates and times, and our team will coordinate with the property owner or agent to confirm your appointment."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            <div className="md:w-1/3" data-animate>
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <p className="mt-4 text-gray-600">
                Got a question? We're here to help. Check out some of our most commonly asked questions.
              </p>
              <div className="hidden md:block mt-6">
                <img 
                  src="/lovable-uploads/ad172531-d71a-4262-91f6-49b118b7a7fa.png" 
                  alt="Property FAQ" 
                  className="w-48 h-auto opacity-80"
                />
              </div>
            </div>
            
            <div className="md:w-2/3" data-animate data-delay="0.2">
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left font-medium py-5 text-gray-800">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
