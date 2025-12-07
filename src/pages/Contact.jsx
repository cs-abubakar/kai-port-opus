import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MessageCircle,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  ArrowRight,
  CheckCircle,
  Loader2,
  ChevronDown
} from 'lucide-react';
import { RevealOnScroll } from '../components/animations';

const budgetOptions = [
  { value: '', label: 'Select a budget range' },
  { value: 'under-2000', label: 'Under $2,000' },
  { value: '2000-5000', label: '$2,000 - $5,000' },
  { value: '5000-10000', label: '$5,000 - $10,000' },
  { value: '10000-plus', label: '$10,000+' },
  { value: 'not-sure', label: 'Not sure yet' }
];

const faqs = [
  {
    question: 'What types of businesses do you work with?',
    answer: 'I work with businesses of all sizes, from startups to established companies. My focus is on brands that are serious about growth and ready to invest in strategic marketing. Most of my clients are in e-commerce, B2B services, healthcare, and education sectors.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Absolutely! I have experience working with clients across Germany, USA, UK, and other countries. Being based in China while serving global clients has given me unique insights into cross-cultural marketing and international expansion strategies.'
  },
  {
    question: "What's your typical engagement model?",
    answer: "I offer flexible engagement models based on your needs. This can range from one-time strategy consultations to ongoing retainer arrangements for campaign management. Most clients start with a strategy call to determine the best approach for their specific situation."
  },
  {
    question: 'How quickly can you start?',
    answer: "After our initial strategy call, I can typically begin within 1-2 weeks, depending on my current workload. For urgent projects, I'm often able to accommodate faster timelines. Let's discuss your needs and I'll give you a realistic timeline."
  }
];

export function Contact() {
  return (
    <>
      <HeroSection />
      <ContactFormSection />
      <FAQSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 lg:pt-40 pb-16 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-500 mb-4">
            Contact
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white">
            Let's work <span className="font-medium">together</span>
          </h1>
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
            Ready to turn your marketing investment into measurable growth?
            Get in touch and let's discuss how I can help.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      website: '',
      budget: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <RevealOnScroll>
              <div className="space-y-6">
                {/* Contact Cards */}
                <div className="p-6 bg-neutral-50 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                      <Calendar size={24} className="text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Strategy Sessions</h3>
                      <p className="text-neutral-600 text-sm">
                        Book a free 30-minute call to discuss your marketing challenges and goals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-neutral-50 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Performance Marketing</h3>
                      <p className="text-neutral-600 text-sm">
                        Discuss your paid advertising needs and how I can help optimize your campaigns.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-neutral-50 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={24} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Consulting & Audits</h3>
                      <p className="text-neutral-600 text-sm">
                        Get expert insights on your current marketing strategy and recommendations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Contact Info */}
            <RevealOnScroll delay={0.2}>
              <div className="mt-12 pt-12 border-t border-neutral-200">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-neutral-600">
                    <Mail size={18} className="text-amber-500" />
                    <a href="mailto:hello@abubakar.com" className="hover:text-amber-600 transition-colors">
                      hello@abubakar.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-600">
                    <MapPin size={18} className="text-amber-500" />
                    <span>China · Working globally</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-6">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:-translate-y-1 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:-translate-y-1 transition-all"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column - Form */}
          <RevealOnScroll delay={0.1}>
            <div className="bg-neutral-50 rounded-3xl p-8 lg:p-10">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                      Message sent!
                    </h3>
                    <p className="text-neutral-600 mb-8">
                      Thanks for reaching out. I'll get back to you within 24-48 hours.
                    </p>
                    <button
                      onClick={resetForm}
                      className="text-amber-600 hover:text-amber-700 font-medium transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-900 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-900 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-900 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="website" className="block text-sm font-medium text-neutral-700 mb-2">
                          Website
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-900 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-2">
                        Budget Range
                      </label>
                      <div className="relative">
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-900 focus:outline-none focus:border-amber-500 transition-colors appearance-none cursor-pointer"
                        >
                          {budgetOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={18}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project and goals..."
                        className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-900 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send message
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-600 mb-4">
              FAQ
            </span>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-neutral-900">
              Common questions
            </h2>
          </div>
        </RevealOnScroll>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-neutral-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-neutral-400 shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-neutral-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
