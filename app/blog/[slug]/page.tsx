import { getBlogBySlug, blogs } from '@/data/blogData';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

export function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background-custom flex flex-col">
      <Navbar />

      <article className="flex-grow pt-32 pb-24">
        {/* Header */}
        <header className="max-w-4xl mx-auto px-6 mb-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 text-secondary hover:text-primary hover:border-primary/30 rounded-full font-semibold transition-all mb-10 shadow-sm"
          >
            <ArrowLeft size={18} /> Back to Journals
          </Link>

          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-bold uppercase tracking-wider text-sm rounded-full mb-6 relative">
              <span className="absolute inset-0 bg-accent/20 animate-pulse rounded-full" />
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary leading-[1.15] mb-8">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base font-medium text-secondary/60">
              <span className="flex items-center gap-2">
                <User size={18} className="text-primary" />
                {blog.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={18} className="text-primary" />
                {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} className="text-primary" />
                {blog.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Content Wrapper */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
            {/* Lead paragraph */}
            <p className="text-xl md:text-2xl text-secondary/80 font-medium leading-relaxed mb-10 italic">
              {blog.excerpt}
            </p>
            
            <hr className="border-gray-100 mb-10" />

            <div className="prose prose-lg prose-emerald max-w-none text-secondary/80 leading-loose">
              <p className="text-lg md:text-xl">{blog.content}</p>
              {/* For phase 2/3 (Markdown/CMS) we would use remark/rehype or dangerouslySetInnerHTML here */}
            </div>
            
            <hr className="border-gray-100 mt-16 mb-10" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-primary font-bold text-xl uppercase border-2 border-white shadow-md">
                  SA
                </div>
                <div>
                  <p className="font-bold text-secondary">Written by {blog.author}</p>
                  <p className="text-sm text-secondary/60">Community Leader & Spiritual Student</p>
                </div>
              </div>
              
              <Link
                href="/blog"
                className="px-6 py-3 bg-primary/5 text-primary hover:bg-primary hover:text-white font-bold rounded-xl transition-all"
              >
                Read More Articles
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
