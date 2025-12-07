import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { RevealOnScroll } from '../components/animations';
import { blogPosts, blogCategories, getCategoryColor } from '../data/blogPosts';
import { format } from 'date-fns';

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === 'all' ||
        post.category.toLowerCase().replace(/\s+/g, '-').replace('&', '') === activeCategory;

      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch && post.published;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <HeroSection />
      <FilterBar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <PostsGrid posts={filteredPosts} />
      <NewsletterSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 lg:pt-40 pb-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-600 mb-4">
            Blog
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-neutral-900">
            Thoughts on <span className="font-medium">marketing</span> &{' '}
            <span className="font-medium">growth</span>
          </h1>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            Insights from the trenches of performance marketing, strategic thinking,
            and lessons learned from working with brands worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FilterBar({ activeCategory, onCategoryChange, searchQuery, onSearchChange }) {
  return (
    <div className="sticky top-20 z-30 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full lg:w-64 pl-10 pr-4 py-2 bg-neutral-100 border border-transparent rounded-full text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PostsGrid({ posts }) {
  if (posts.length === 0) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-neutral-500 text-lg">
            No posts found matching your criteria.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <RevealOnScroll key={post.id} delay={index * 0.05}>
              <Link
                to={`/blog/${post.slug}`}
                className="group block bg-neutral-50 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-neutral-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-neutral-500">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={14} />
                        {format(new Date(post.publishedAt), 'MMM d, yyyy')}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={14} />
                        {post.readingTime} min
                      </span>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-neutral-300 group-hover:text-amber-600 group-hover:translate-x-1 transition-all"
                    />
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

function NewsletterSection() {
  return (
    <section className="py-24 lg:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-white mb-4">
              Stay updated
            </h2>
            <p className="text-neutral-400 mb-8">
              Get notified when I publish new articles on marketing strategy,
              performance optimization, and industry insights.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white font-medium rounded-full hover:bg-amber-600 transition-colors"
            >
              Subscribe to updates
              <ArrowRight size={18} />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
