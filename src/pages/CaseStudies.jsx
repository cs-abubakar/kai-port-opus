import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  TrendingUp,
  TrendingDown,
  X,
  Clock,
  User,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { RevealOnScroll } from '../components/animations';
import { caseStudies } from '../data/caseStudies';

export function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState(null);

  return (
    <>
      <HeroSection />
      <CaseStudiesGrid onSelect={setSelectedStudy} />
      <AnimatePresence>
        {selectedStudy && (
          <CaseStudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 lg:pt-40 pb-24 lg:pb-32 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-500 mb-4">
            Case Studies
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white">
            Real results for{' '}
            <span className="font-medium">real brands</span>
          </h1>
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
            Explore how I've helped brands across industries achieve measurable growth
            through strategic marketing and performance optimization.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CaseStudiesGrid({ onSelect }) {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <RevealOnScroll key={study.id} delay={index * 0.1}>
              <div
                onClick={() => onSelect(study)}
                className="group cursor-pointer bg-neutral-50 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

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
                    <h3 className="text-2xl font-semibold text-white">{study.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="p-3 bg-white rounded-xl">
                        <div className="flex items-center gap-1.5">
                          {result.value.startsWith('+') ? (
                            <TrendingUp size={16} className="text-green-500" />
                          ) : (
                            <TrendingDown size={16} className="text-amber-500" />
                          )}
                          <span className="text-xl font-semibold text-neutral-900">
                            {result.value}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 mt-1">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Channels & Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {study.channels.map((channel, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-neutral-200 text-neutral-600 text-xs rounded"
                        >
                          {channel}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm text-neutral-500">
                      <Clock size={14} />
                      {study.duration}
                    </span>
                  </div>

                  {/* View Details Link */}
                  <div className="mt-6 pt-6 border-t border-neutral-200">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 group-hover:text-amber-600 transition-colors">
                      View details
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
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

function CaseStudyModal({ study, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm" />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Image Header */}
          <div className="relative h-64 lg:h-80">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                  <MapPin size={12} />
                  {study.location}
                </span>
                <span className="px-3 py-1.5 bg-amber-500 text-white text-xs font-medium rounded-full">
                  {study.type}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white">
                {study.title}
              </h2>
            </div>
          </div>

          {/* Meta Bar */}
          <div className="flex flex-wrap items-center gap-6 px-6 lg:px-8 py-4 bg-neutral-50 border-b border-neutral-200">
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <User size={16} />
              <span>{study.role}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <Clock size={16} />
              <span>{study.duration}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {study.channels.map((channel, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-neutral-200 text-neutral-600 text-xs rounded"
                >
                  {channel}
                </span>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="px-6 lg:px-8 py-8 space-y-8">
            {/* Challenge */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                The Challenge
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {study.challenge}
              </p>
            </div>

            {/* Approach */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Our Approach
              </h3>
              <ul className="space-y-3">
                {study.approach.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Results
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {study.results.map((result, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-neutral-50 rounded-xl text-center"
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      {result.value.startsWith('+') ? (
                        <TrendingUp size={18} className="text-green-500" />
                      ) : (
                        <TrendingDown size={18} className="text-amber-500" />
                      )}
                      <span className="text-2xl font-semibold text-neutral-900">
                        {result.value}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-500">{result.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-neutral-200">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-colors"
              >
                Get similar results
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
