import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowDownRight,
  TrendingUp,
  TrendingDown,
  MapPin,
  Calendar,
  MessageCircle,
  Quote,
  ExternalLink
} from 'lucide-react';
import { RevealOnScroll, CountUp } from '../components/animations';
import { SectionHeader } from '../components/ui';
import { services } from '../data/services';
import { caseStudies } from '../data/caseStudies';
import { papers } from '../data/research';
import { testimonials } from '../data/testimonials';

export function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <CaseStudiesPreview />
      <ResearchPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-neutral-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-amber-100/50 via-orange-50/30 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-neutral-200/50 to-transparent blur-3xl" />
      <div className="absolute inset-0 bg-grid-pattern-light opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-neutral-200 shadow-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-neutral-600">Available for new projects</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.1]"
            >
              <span className="font-light text-neutral-900">Marketing</span>
              <br />
              <span className="font-medium text-neutral-900">Strategist</span>
              <br />
              <span className="text-amber-500 font-light">&</span>{' '}
              <span className="font-medium text-neutral-900">Performance</span>
              <br />
              <span className="font-light text-neutral-900">Marketer</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-lg lg:text-xl text-neutral-600 max-w-lg leading-relaxed"
            >
              I help digital brands turn ad spend into predictable growth using
              strategy, performance marketing, and clean analytics.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-colors"
              >
                Work with me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-neutral-900 font-medium rounded-full border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all"
              >
                View case studies
                <ArrowDownRight size={18} className="group-hover:rotate-45 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 pt-8 border-t border-neutral-200"
            >
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl font-semibold text-neutral-900">
                    <CountUp end={4} suffix="+" />
                  </p>
                  <p className="text-sm text-neutral-500 mt-1">Years Experience</p>
                </div>
                <div className="border-l border-neutral-200 pl-8">
                  <p className="text-3xl font-semibold text-neutral-900">
                    <CountUp end={50} suffix="+" />
                  </p>
                  <p className="text-sm text-neutral-500 mt-1">Projects Delivered</p>
                </div>
                <div className="border-l border-neutral-200 pl-8">
                  <p className="text-3xl font-semibold text-neutral-900">Global</p>
                  <p className="text-sm text-neutral-500 mt-1">Client Base</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60"
                alt="Abu Bakar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -left-4 top-1/4 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-neutral-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <TrendingUp size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500">ROAS</p>
                  <p className="text-lg font-semibold text-neutral-900">+127%</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -right-4 bottom-1/4 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-neutral-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <TrendingDown size={20} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500">CPL</p>
                  <p className="text-lg font-semibold text-neutral-900">-43%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-neutral-400">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-neutral-300 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-neutral-400"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const previewServices = services.slice(0, 4);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Services"
          title="How I can help your brand grow"
          link="/services"
          linkText="View all services"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewServices.map((service, index) => (
            <RevealOnScroll key={service.id} delay={index * 0.1}>
              <Link
                to="/services"
                className="group relative block p-6 bg-neutral-50 hover:bg-white rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ArrowRight
                  size={20}
                  className="absolute bottom-6 right-6 text-neutral-300 opacity-0 group-hover:opacity-100 group-hover:text-neutral-900 transition-all"
                />
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesPreview() {
  const previewCases = caseStudies.slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Case Studies"
          title="Results that speak for themselves"
          link="/case-studies"
          linkText="View all case studies"
          dark
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewCases.map((study, index) => (
            <RevealOnScroll key={study.id} delay={index * 0.1}>
              <Link
                to="/case-studies"
                className="group block bg-neutral-900 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />

                  {/* Location Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      <MapPin size={12} />
                      {study.location}
                    </span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs text-amber-400 font-medium mb-1">{study.type}</p>
                    <h3 className="text-xl font-semibold text-white">{study.title}</h3>
                  </div>
                </div>

                {/* Metrics */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {study.results.slice(0, 2).map((result, idx) => (
                      <div key={idx}>
                        <div className="flex items-center gap-1.5">
                          {result.value.startsWith('+') ? (
                            <TrendingUp size={14} className="text-green-500" />
                          ) : (
                            <TrendingDown size={14} className="text-amber-500" />
                          )}
                          <span className="text-lg font-semibold text-white">{result.value}</span>
                        </div>
                        <p className="text-xs text-neutral-500">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Channels */}
                  <div className="flex flex-wrap gap-2">
                    {study.channels.map((channel, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-neutral-800 text-neutral-400 text-xs rounded"
                      >
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchPreview() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Research"
          title="Published academic work"
          link="/research"
          linkText="Explore my research"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {papers.map((paper, index) => (
            <RevealOnScroll key={paper.id} delay={index * 0.1}>
              <div className="group p-8 bg-white border border-neutral-200 rounded-2xl hover:border-amber-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                    {paper.icon}
                  </div>
                  <div>
                    <span className="text-xs font-medium text-amber-600 uppercase tracking-wider">
                      {paper.category}
                    </span>
                    <h3 className="text-xl font-semibold text-neutral-900 mt-1">
                      {paper.title}
                    </h3>
                  </div>
                </div>

                <p className="text-neutral-600 mb-6 line-clamp-3">
                  {paper.abstract}
                </p>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    Published
                  </span>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:text-amber-600 transition-colors"
                  >
                    Read paper
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title="What clients say"
          centered
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll key={testimonial.id} delay={index * 0.1}>
              <div className="p-8 bg-neutral-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
                <Quote size={32} className="text-amber-300 mb-6" />
                <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                    <p className="text-sm text-neutral-500">{testimonial.company}</p>
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

function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <RevealOnScroll>
            <h2 className="text-4xl lg:text-5xl tracking-tight">
              <span className="font-light text-neutral-900">Let's turn your ad spend</span>
              <br />
              <span className="font-light text-neutral-900">into </span>
              <span className="font-medium text-amber-500">predictable growth</span>
            </h2>
            <p className="mt-6 text-lg text-neutral-600 max-w-lg">
              Whether you're looking to optimize existing campaigns or build a complete
              marketing strategy from scratch, I'm here to help.
            </p>
          </RevealOnScroll>

          {/* Right Column - Cards */}
          <div className="space-y-4">
            <RevealOnScroll delay={0.1}>
              <Link
                to="/contact"
                className="group flex items-center justify-between p-6 bg-white border border-neutral-200 rounded-2xl hover:border-amber-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Calendar size={24} className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Book a Strategy Call</h3>
                    <p className="text-sm text-neutral-500">30-minute free consultation</p>
                  </div>
                </div>
                <ArrowRight
                  size={20}
                  className="text-neutral-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all"
                />
              </Link>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <Link
                to="/contact"
                className="group flex items-center justify-between p-6 bg-neutral-900 rounded-2xl hover:bg-neutral-800 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Send a Message</h3>
                    <p className="text-sm text-neutral-400">Get in touch directly</p>
                  </div>
                </div>
                <ArrowRight
                  size={20}
                  className="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all"
                />
              </Link>
            </RevealOnScroll>

            {/* Social Proof */}
            <RevealOnScroll delay={0.3}>
              <div className="flex items-center gap-3 pt-4">
                <div className="flex -space-x-3">
                  {testimonials.slice(0, 3).map((t, i) => (
                    <img
                      key={i}
                      src={t.avatar}
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <p className="text-sm text-neutral-600">
                  Trusted by <span className="font-medium text-neutral-900">50+ clients</span> worldwide
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
