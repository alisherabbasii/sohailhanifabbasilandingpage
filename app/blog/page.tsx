import { blogs } from '@/data/blogData';
import BlogCard from '@/components/BlogCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Library } from 'lucide-react';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background-custom flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex flex-col pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 drop-shadow-sm">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-6 border border-primary/20">
              <Library size={18} />
              Spiritual & Insights
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-secondary leading-tight mb-6">
              Journals & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic">Reflections</span>
            </h1>
            <p className="text-xl text-secondary/70 leading-relaxed font-medium">
              A collection of writings blending 25 years of disciplined service with the profound wisdom of Sufism. Explore articles on Rumi, life lessons, and the journey of self-discovery.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.slug} blog={blog} index={index} />
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="mt-20 flex justify-center pb-12">
            <div className="flex items-center gap-2">
              <button disabled className="px-5 py-3 border border-gray-200 text-gray-400 font-bold rounded-xl cursor-not-allowed bg-gray-50">
                Previous
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-primary text-white font-bold rounded-xl shadow-lg border border-primary">
                1
              </button>
              <button disabled className="px-5 py-3 border border-gray-200 text-gray-400 font-bold rounded-xl cursor-not-allowed bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
