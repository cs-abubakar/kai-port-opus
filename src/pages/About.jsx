import { motion } from 'framer-motion';
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  Globe,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { RevealOnScroll, CountUp } from '../components/animations';

const timelineItems = [
  {
    year: '2019',
    title: 'Computer Science Foundation',
    description: 'Graduated with a B.S. in Computer Science, building a strong technical foundation that would later prove invaluable for marketing analytics and automation.',
    icon: GraduationCap,
    color: 'border-blue-500'
  },
  {
    year: '2020',
    title: 'First Steps in Marketing',
    description: 'Transitioned into digital marketing, combining technical skills with creative strategy. Started as a Marketing Analyst at a fast-growing startup.',
    icon: Briefcase,
    color: 'border-green-500'
  },
  {
    year: '2021',
    title: 'Performance Marketing Focus',
    description: 'Specialized in performance marketing, mastering Meta and Google Ads platforms. Achieved first major client success with 200%+ ROAS improvement.',
    icon: Award,
    color: 'border-amber-500'
  },
  {
    year: '2022',
    title: 'International Clients',
    description: 'Expanded to serve international clients across Germany, USA, and UK. Developed expertise in cross-cultural marketing strategies.',
    icon: Globe,
    color: 'border-purple-500'
  },
  {
    year: '2023',
    title: 'Research Publications',
    description: 'Published academic research on AI in advertising and leadership in marketing teams. Combined practical experience with theoretical frameworks.',
    icon: BookOpen,
    color: 'border-pink-500'
  },
  {
    year: '2024',
    title: 'MBA in China',
    description: 'Currently pursuing an MBA with a focus on Digital Marketing in China, gaining firsthand experience in one of the world\'s most dynamic markets.',
    icon: GraduationCap,
    color: 'border-red-500'
  }
];

const values = [
  {
    number: '01',
    title: 'Strategy First',
    description: 'Every campaign starts with clear objectives and a thoughtful strategy. Tactics without strategy is the noise before defeat.'
  },
  {
    number: '02',
    title: 'Data-Informed',
    description: 'Decisions backed by data, not just gut feelings. I believe in measuring what matters and acting on insights.'
  },
  {
    number: '03',
    title: 'Continuous Learning',
    description: 'The marketing landscape evolves daily. Staying current through research, experimentation, and academic study.'
  },
  {
    number: '04',
    title: 'Clear Communication',
    description: 'Complex strategies explained simply. Regular updates, transparent reporting, and honest conversations.'
  }
];

export function About() {
  return (
    <>
      <HeroSection />
      <TimelineSection />
      <ValuesSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 lg:pt-40 pb-24 lg:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-8"
            >
              <span className="text-sm font-medium text-amber-700">About Me</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-neutral-900"
            >
              From <span className="font-medium">code</span> to{' '}
              <span className="font-medium">campaigns</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 space-y-6"
            >
              <p className="text-lg text-neutral-600 leading-relaxed">
                I'm Abu Bakar, a Marketing Strategist and Performance Marketer with a unique
                background in computer science. This technical foundation shapes how I
                approach marketing—with precision, analytical rigor, and a deep appreciation
                for data.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Over the past 4+ years, I've helped 50+ brands across Germany, USA, UK, and
                beyond turn their advertising spend into measurable growth. My work spans
                B2B and B2C, from startups to established companies, always with the same
                goal: creating marketing systems that deliver predictable, scalable results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex items-center gap-2 text-neutral-600"
            >
              <MapPin size={18} className="text-amber-500" />
              <span>Currently based in China, working globally</span>
            </motion.div>
          </div>

          {/* Right Column - Image */}
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
            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-neutral-100"
            >
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-semibold text-neutral-900">
                    <CountUp end={4} suffix="+" />
                  </p>
                  <p className="text-sm text-neutral-500">Years</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-neutral-900">
                    <CountUp end={50} suffix="+" />
                  </p>
                  <p className="text-sm text-neutral-500">Projects</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-600 mb-4">
              My Journey
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-neutral-900">
              How I got here
            </h2>
          </div>
        </RevealOnScroll>

        <div className="relative">
          {/* Center Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200" />

          <div className="space-y-12 lg:space-y-0">
            {timelineItems.map((item, index) => (
              <RevealOnScroll
                key={item.year}
                delay={index * 0.1}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}>
                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:col-start-2'}`}>
                    <div className={`p-6 bg-white rounded-2xl border border-neutral-200 hover:shadow-xl hover:border-amber-200 transition-all duration-300 ${
                      index % 2 === 1 ? 'lg:text-left' : ''
                    }`}>
                      <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-sm font-medium rounded-full mb-4">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon - Center */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 items-center justify-center">
                    <div className={`w-12 h-12 bg-white rounded-full border-2 ${item.color} flex items-center justify-center shadow-lg`}>
                      <item.icon size={20} className="text-neutral-700" />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="py-24 lg:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-500 mb-4">
              My Values
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white">
              How I work
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <RevealOnScroll key={value.number} delay={index * 0.1}>
              <div className="group p-6 bg-neutral-900 rounded-2xl hover:bg-neutral-800 hover:-translate-y-2 transition-all duration-300">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-amber-500/10 text-amber-500 text-sm font-bold rounded-full mb-6">
                  {value.number}
                </span>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA */}
        <RevealOnScroll delay={0.4}>
          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 font-medium rounded-full hover:bg-amber-500 hover:text-white transition-colors"
            >
              Let's work together
              <ArrowRight size={18} />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
