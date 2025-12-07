import { motion } from 'framer-motion';
import { ExternalLink, Brain, TrendingUp, Users, Award } from 'lucide-react';
import { RevealOnScroll } from '../components/animations';
import { papers, researchInterests } from '../data/research';

const iconMap = {
  Brain: Brain,
  TrendingUp: TrendingUp,
  Users: Users,
  Award: Award
};

export function Research() {
  return (
    <>
      <HeroSection />
      <PublishedPapersSection />
      <ResearchInterestsSection />
      <WhyResearchSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 lg:pt-40 pb-24 lg:pb-32 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-600 mb-4">
            Research
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-neutral-900">
            Bridging <span className="font-medium">theory</span> and{' '}
            <span className="font-medium">practice</span>
          </h1>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            I believe in combining academic rigor with practical application. My research
            explores how cutting-edge theories can be applied to real-world marketing
            challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PublishedPapersSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-600 mb-4">
              Published Work
            </span>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-neutral-900">
              Academic publications
            </h2>
          </div>
        </RevealOnScroll>

        <div className="space-y-8">
          {papers.map((paper, index) => (
            <RevealOnScroll key={paper.id} delay={index * 0.1}>
              <div className="group p-8 lg:p-10 bg-neutral-50 border border-neutral-200 rounded-3xl hover:border-amber-200 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-3xl shrink-0">
                    {paper.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
                      {paper.category}
                    </span>
                    <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                      {paper.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {paper.abstract}
                    </p>

                    {/* Key Findings */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                        Key Findings
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {paper.keyFindings.map((finding, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0" />
                            <span className="text-neutral-600 text-sm">{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Implications */}
                    <div className="p-4 bg-amber-50 rounded-xl mb-6">
                      <h4 className="text-sm font-semibold text-amber-800 mb-2">
                        Practical Implications
                      </h4>
                      <p className="text-amber-700 text-sm">
                        {paper.implications}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-neutral-200">
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          Published
                        </span>
                        <span className="text-sm text-neutral-500">
                          {paper.journal} · {paper.year}
                        </span>
                      </div>
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:text-amber-600 transition-colors"
                      >
                        Read full paper
                        <ExternalLink size={14} />
                      </a>
                    </div>
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

function ResearchInterestsSection() {
  return (
    <section className="py-24 lg:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-500 mb-4">
              Areas of Interest
            </span>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-white">
              Current research focus
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchInterests.map((interest, index) => {
            const IconComponent = iconMap[interest.icon];
            return (
              <RevealOnScroll key={interest.id} delay={index * 0.1}>
                <div className="group p-6 bg-neutral-900 rounded-2xl hover:bg-neutral-800 hover:-translate-y-2 transition-all duration-300">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                    {IconComponent && <IconComponent size={24} className="text-amber-500" />}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {interest.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyResearchSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-600 mb-4">
              Philosophy
            </span>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-neutral-900">
              Why I research
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-neutral-600 leading-relaxed">
              Marketing is often treated as a purely practical discipline—run campaigns,
              measure results, optimize. But I believe the best marketers are those who
              understand the deeper principles at play.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              My research bridges the gap between academic theory and practical application.
              By studying consumer psychology, AI's impact on behavior, and leadership
              dynamics in marketing teams, I develop insights that inform better strategies
              and more ethical practices.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              This research-informed approach is what sets my work apart. When I optimize
              a campaign, I'm not just following best practices—I'm applying tested
              principles of human behavior and decision-making.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
