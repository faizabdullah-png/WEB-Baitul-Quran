import React, { useState } from 'react';
import { INITIAL_FAQS } from '../data/initialData';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#FAF7FC] dark:bg-[#16071F] relative overflow-hidden transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#64157D] dark:text-[#FFB800] bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C218A8]" />
            <span>Tanya Jawab Seputar Lembaga & PPDB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#43104F] dark:text-white tracking-tight mb-4">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C218A8] via-[#FF8500] to-[#FFB800] mx-auto rounded-full mb-6"></div>
          <p className="text-base text-neutral-600 dark:text-neutral-300">
            Pertanyaan yang sering diajukan oleh calon wali santriwati mengenai program pendidikan dan pendaftaran.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {INITIAL_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white dark:bg-[#250D33] border-purple-200 dark:border-purple-800 shadow-md'
                    : 'bg-white/80 dark:bg-[#200A2C]/60 border-purple-100/80 dark:border-purple-900/30 hover:bg-white dark:hover:bg-[#250D33]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#43104F] dark:text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-pink-100 dark:bg-pink-950/60 text-[#C218A8]'
                        : 'bg-purple-50 dark:bg-purple-950/40 text-neutral-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-1 sm:px-6 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-purple-50 dark:border-purple-900/20">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
