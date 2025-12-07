import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Linkedin, Twitter } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { blogPosts, getCategoryColor } from '../data/blogPosts';
import { RevealOnScroll } from '../components/animations';

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <HeaderSection post={post} />
      <FeaturedImage post={post} />
      <ContentSection post={post} />
      <ShareSection />
      <AuthorSection />
      <RelatedPosts currentSlug={slug} category={post.category} />
    </>
  );
}

function HeaderSection({ post }) {
  return (
    <section className="pt-32 lg:pt-40 pb-12 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>
        </motion.div>

        {/* Category */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-6 ${getCategoryColor(post.category)}`}>
            {post.category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-neutral-900 tracking-tight leading-tight mb-6"
        >
          {post.title}
        </motion.h1>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-6 text-neutral-500"
        >
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={16} />
            {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={16} />
            {post.readingTime} min read
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedImage({ post }) {
  return (
    <div className="relative -mt-4">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="aspect-[2/1] rounded-3xl overflow-hidden"
        >
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

function ContentSection({ post }) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <div className="prose">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function ShareSection() {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <span className="text-neutral-600">Share this article:</span>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:-translate-y-1 transition-all"
              aria-label="Share on Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:-translate-y-1 transition-all"
              aria-label="Share on LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthorSection() {
  return (
    <section className="bg-neutral-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
        <RevealOnScroll>
          <div className="flex items-center gap-6">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60"
              alt="Abu Bakar"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">Abu Bakar</h3>
              <p className="text-neutral-500 text-sm">
                Marketing Strategist & Performance Marketer
              </p>
              <p className="text-neutral-600 text-sm mt-2">
                Helping digital brands turn ad spend into predictable growth through
                strategy, data, and creative excellence.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function RelatedPosts({ currentSlug, category }) {
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== currentSlug && p.category === category && p.published)
    .slice(0, 2);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-8">
            Related articles
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {relatedPosts.map((post, index) => (
            <RevealOnScroll key={post.id} delay={index * 0.1}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex gap-6 p-4 bg-neutral-50 rounded-2xl hover:bg-neutral-100 transition-colors"
              >
                <div className="w-32 h-24 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 group-hover:text-amber-600 transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-500">
                    {post.readingTime} min read
                  </p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
