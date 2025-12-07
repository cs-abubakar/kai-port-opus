import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RevealOnScroll } from '../components/animations';
import { services, processSteps } from '../data/services';

export function Services() {
  return (
    <>
      <HeroSection />
      <ServicesDetailSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 lg:pt-40 pb-24 lg:pb-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-600 mb-4">
            Services
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-neutral-900">
            Strategic marketing solutions for{' '}
            <span className="font-medium">growth-focused</span> brands
          </h1>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            From comprehensive marketing strategy to hands-on campaign management, I offer
            a complete suite of services designed to turn your marketing investment into
            measurable business growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesDetailSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((service, index) => (
            <RevealOnScroll key={service.id} delay={0.1}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}>
                {/* Content Side */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:text-amber-600 transition-colors"
                  >
                    Discuss your project
                    <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Features Side */}
                <div className={`p-8 lg:p-10 bg-neutral-50 rounded-3xl ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-6">
                    What's included
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 bg-white rounded-xl"
                      >
                        <CheckCircle size={20} className={service.textColor} />
                        <span className="text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-500 mb-4">
              Process
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white">
              How we'll work together
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <RevealOnScroll key={step.step} delay={index * 0.1}>
              <div className="group relative p-6 bg-neutral-900 rounded-2xl hover:bg-neutral-800 hover:-translate-y-2 transition-all duration-300">
                {/* Large Step Number Background */}
                <span className="absolute top-4 right-4 text-6xl font-bold text-neutral-800 group-hover:text-neutral-700 transition-colors">
                  {step.step}
                </span>

                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-3 mt-8">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow to next */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight size={20} className="text-neutral-600" />
                  </div>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-neutral-900 mb-6">
              Ready to grow your brand?
            </h2>
            <p className="text-lg text-neutral-600 mb-10">
              Let's discuss how I can help you achieve your marketing goals. Book a free
              strategy call to explore the possibilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-colors"
              >
                Book a strategy call
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 font-medium rounded-full border border-neutral-200 hover:border-neutral-300 transition-colors"
              >
                View case studies
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
