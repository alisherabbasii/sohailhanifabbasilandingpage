'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blogData';
import { ArrowLeft, ArrowRight, Calendar, Tag } from 'lucide-react';

const categories = ['All', 'Military', 'Welfare', 'Professional', 'Personal'] as const;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-background-custom">
      {/* Header */}
      <div className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors font-medium mb-8"
          >
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            The <span className="text-accent italic">Blog</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Stories, insights, and reflections from 25 years of military service,
            community welfare, and professional life.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-white text-secondary/60 border border-gray-200 hover:border-primary/30 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-secondary/40 text-xl font-bold">
              No posts in this category yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                    {/* Category Color Bar */}
                    <div
                      className={`h-2 w-full ${
                        post.category === 'Military'
                          ? 'bg-primary'
                          : post.category === 'Welfare'
                            ? 'bg-accent'
                            : post.category === 'Professional'
                              ? 'bg-blue-500'
                              : 'bg-gray-400'
                      }`}
                    />

                    <div className="p-8 flex flex-col flex-1">
                      {/* Meta */}
                      <div className="flex items-center gap-4 mb-5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary/40 uppercase tracking-widest">
                          <Calendar size={13} />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-widest">
                          <Tag size={13} />
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-secondary/60 leading-relaxed mb-6 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Read More */}
                      <div className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                        Read More <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
