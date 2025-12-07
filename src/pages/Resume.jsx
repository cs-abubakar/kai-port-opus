import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle,
  Calendar,
  Globe
} from 'lucide-react';
import { RevealOnScroll } from '../components/animations';

const experience = [
  {
    title: 'Performance Marketing Strategist',
    type: 'Freelance / Agency',
    period: '2022 - Present',
    location: 'Remote (Germany, USA, UK clients)',
    description: 'Leading performance marketing strategy for international clients across B2B and B2C sectors. Specializing in Meta Ads, Google Ads, and comprehensive analytics implementation.',
    achievements: [
      'Achieved 127% ROAS improvement for B2B neon signage brand',
      'Reduced CPL by 43% while scaling ad spend by 67%',
      'Managed multi-channel campaigns across Meta, Google, and Pinterest'
    ]
  },
  {
    title: 'Digital Marketing Specialist',
    type: 'Agency',
    period: '2021 - 2022',
    location: 'Pakistan / Remote',
    description: 'Managed digital marketing campaigns for diverse client portfolio. Developed expertise in performance marketing, marketing automation, and data analytics.',
    achievements: [
      'Delivered 50+ successful marketing campaigns',
      'Built marketing automation workflows increasing efficiency by 40%',
      'Trained junior team members on analytics and campaign optimization'
    ]
  },
  {
    title: 'Marketing Analyst',
    type: 'Startup',
    period: '2020 - 2021',
    location: 'Pakistan',
    description: 'First marketing role, leveraging technical background for analytics implementation and data-driven marketing strategy.',
    achievements: [
      'Implemented comprehensive tracking infrastructure',
      'Created executive dashboards for marketing performance',
      'Developed attribution models for multi-touch campaigns'
    ]
  }
];

const education = [
  {
    degree: 'MBA - Digital Marketing Focus',
    school: 'University in China',
    period: '2024 - Present',
    description: 'Pursuing advanced business education with specialization in digital marketing and international business.'
  },
  {
    degree: 'B.S. Computer Science',
    school: 'University in Pakistan',
    period: '2015 - 2019',
    description: 'Built strong technical foundation that continues to inform data-driven marketing approach.'
  }
];

const publications = [
  {
    title: 'Algorithmic Ad Personalization & Impulse Buying Behaviour',
    journal: 'Scientific Research Publishing',
    year: '2024'
  },
  {
    title: 'Transformational Leadership in Digital Marketing Teams',
    journal: 'Scientific Research Publishing',
    year: '2024'
  }
];

const skills = {
  platforms: ['Meta Ads', 'Google Ads', 'GA4', 'Tag Manager', 'Looker Studio', 'Shopify', 'WordPress'],
  strategy: ['Marketing Strategy', 'Funnel Design', 'A/B Testing', 'Attribution', 'Competitive Analysis', 'Budget Planning'],
  soft: ['Cross-cultural Communication', 'Client Management', 'Team Collaboration', 'Strategic Thinking', 'Data Storytelling', 'Problem Solving']
};

const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Urdu', level: 'Native' },
  { name: 'Chinese', level: 'Conversational' }
];

export function Resume() {
  return (
    <>
      <HeaderSection />
      <SummarySection />
      <MainContentSection />
    </>
  );
}

function HeaderSection() {
  return (
    <section className="pt-32 lg:pt-40 pb-12 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-semibold text-white">
              Abu Bakar<span className="text-amber-500">.</span>
            </h1>
            <p className="mt-2 text-lg text-neutral-400">
              Marketing Strategist · Performance Marketer
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-neutral-400">
              <span className="inline-flex items-center gap-2">
                <Globe size={16} />
                China
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail size={16} />
                hello@abubakar.com
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-amber-500 text-white font-medium rounded-full hover:bg-amber-600 transition-colors"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SummarySection() {
  return (
    <section className="py-12 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-neutral-600 leading-relaxed max-w-4xl"
        >
          Marketing strategist with 4+ years of experience helping international brands
          achieve measurable growth through data-driven performance marketing. Unique
          background combining computer science expertise with strategic marketing skills.
          Published researcher exploring AI's impact on consumer behavior. Currently
          pursuing MBA in China while serving global clients.
        </motion.p>
      </div>
    </section>
  );
}

function MainContentSection() {
  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Experience & Education */}
          <div className="lg:col-span-2 space-y-16">
            {/* Experience */}
            <div>
              <RevealOnScroll>
                <div className="flex items-center gap-3 mb-8">
                  <Briefcase size={24} className="text-amber-500" />
                  <h2 className="text-2xl font-semibold text-neutral-900">Experience</h2>
                </div>
              </RevealOnScroll>

              <div className="space-y-8">
                {experience.map((job, index) => (
                  <RevealOnScroll key={index} delay={index * 0.1}>
                    <div className="relative pl-6 border-l-2 border-neutral-200">
                      <div className="absolute -left-1.5 top-0 w-3 h-3 bg-amber-500 rounded-full" />

                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold text-neutral-900">
                          {job.title}
                        </h3>
                        <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded">
                          {job.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-4">
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={14} />
                          {job.period}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={14} />
                          {job.location}
                        </span>
                      </div>

                      <p className="text-neutral-600 mb-4">
                        {job.description}
                      </p>

                      <ul className="space-y-2">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                            <span className="text-neutral-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <RevealOnScroll>
                <div className="flex items-center gap-3 mb-8">
                  <GraduationCap size={24} className="text-amber-500" />
                  <h2 className="text-2xl font-semibold text-neutral-900">Education</h2>
                </div>
              </RevealOnScroll>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <RevealOnScroll key={index} delay={index * 0.1}>
                    <div className="p-6 bg-white rounded-xl border border-neutral-200">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-amber-600 text-sm font-medium mb-2">
                        {edu.school}
                      </p>
                      <p className="text-neutral-500 text-sm mb-3">
                        {edu.period}
                      </p>
                      <p className="text-neutral-600 text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            {/* Publications */}
            <div>
              <RevealOnScroll>
                <div className="flex items-center gap-3 mb-8">
                  <Award size={24} className="text-amber-500" />
                  <h2 className="text-2xl font-semibold text-neutral-900">Publications</h2>
                </div>
              </RevealOnScroll>

              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <RevealOnScroll key={index} delay={index * 0.1}>
                    <div className="p-6 bg-white rounded-xl border border-neutral-200">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        {pub.title}
                      </h3>
                      <p className="text-neutral-500 text-sm">
                        {pub.journal} · {pub.year}
                      </p>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            {/* Platforms & Tools */}
            <RevealOnScroll>
              <div className="p-6 bg-white rounded-xl border border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Platforms & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.platforms.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-neutral-100 text-neutral-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Strategy & Analysis */}
            <RevealOnScroll delay={0.1}>
              <div className="p-6 bg-white rounded-xl border border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Strategy & Analysis
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.strategy.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-amber-50 text-amber-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Soft Skills */}
            <RevealOnScroll delay={0.2}>
              <div className="p-6 bg-white rounded-xl border border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Languages */}
            <RevealOnScroll delay={0.3}>
              <div className="p-6 bg-white rounded-xl border border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Languages
                </h3>
                <div className="space-y-3">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-neutral-700">{lang.name}</span>
                      <span className="text-neutral-500 text-sm">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
