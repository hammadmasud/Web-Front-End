import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What is included in a pre-purchase inspection?",
      answer: "Our pre-purchase inspection includes a comprehensive 150+ point check covering mechanical components, electrical systems, body condition, interior features, and a test drive. We also provide a detailed report with photos and recommendations."
    },
    {
      question: "How long does an inspection typically take?",
      answer: "A standard inspection usually takes 1-2 hours to complete. However, this can vary depending on the vehicle's condition and the type of inspection service you've chosen. We'll provide you with a more accurate timeframe when you book your appointment."
    },
    {
      question: "Do I need to be present during the inspection?",
      answer: "While it's not mandatory, we recommend being present during the inspection. This allows our technicians to show you any issues directly and answer your questions in real-time. However, if you can't attend, we'll provide a detailed report with photos and videos."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and digital payment methods including PayPal. Payment is required at the time of service completion."
    },
    {
      question: "Can you inspect a car at my location?",
      answer: "Yes, we offer mobile inspection services within our service area. There may be an additional fee depending on the location. Please contact us for specific details about mobile inspections in your area."
    },
    {
      question: "What if issues are found during the inspection?",
      answer: "If we find any issues during the inspection, they will be documented in detail in our report, including severity levels and estimated repair costs. This information can be valuable for negotiating the purchase price or deciding whether to proceed with the purchase."
    },
    {
      question: "Do you provide inspection services for all vehicle types?",
      answer: "We inspect most passenger vehicles, SUVs, and light trucks. For specialty vehicles, classic cars, or heavy-duty vehicles, please contact us to confirm if we can accommodate your specific needs."
    },
    {
      question: "How far in advance should I schedule an inspection?",
      answer: "We recommend booking at least 2-3 days in advance to ensure availability. However, we understand that sometimes you need an inspection on short notice, so we do our best to accommodate urgent requests when possible."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our car inspection services. Can't find what you're looking for? Contact us directly.
          </p>
        </motion.div>
      </section>

      {/* FAQ List */}
      <section className="max-w-3xl mx-auto px-4">
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={false}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-600" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50 text-gray-700">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 mt-16">
        <div className="bg-blue-600 rounded-lg shadow-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-lg mb-6">
            Our team is here to help. Contact us for personalized assistance.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;