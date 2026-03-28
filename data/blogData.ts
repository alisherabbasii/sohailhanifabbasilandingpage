export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  readTime: string;
  featured: boolean;
}

export const blogs: BlogPost[] = [
  {
    slug: "lessons-from-masnavi",
    title: "Lessons from Masnavi: The Path to Inner Peace",
    date: "2026-03-20",
    category: "Sufism",
    author: "Sohail Hanif Abbasi",
    readTime: "5 min read",
    featured: true,
    excerpt: "Exploring the profound wisdom of Maulana Jalaluddin Rumi and how his teachings apply to modern daily struggles.",
    content: "The Masnavi, written by the great Sufi poet Maulana Rumi, is a masterpiece of spiritual wisdom. In today's fast-paced world, finding inner peace seems more difficult than ever. Rumi teaches us that the journey to peace is an inward one. 'The wound is the place where the Light enters you.' This single profound statement changes how we view our struggles. Instead of seeing pain as a punishment, we learn to view it as an opportunity for spiritual growth and self-discovery. This approach helps create a calm and balanced perspective on life's inevitable challenges."
  },
  {
    slug: "discipline-in-spiritual-journey",
    title: "How Discipline Fuels the Spiritual Journey",
    date: "2026-03-25",
    category: "Spiritual Thoughts",
    author: "Sohail Hanif Abbasi",
    readTime: "4 min read",
    featured: true,
    excerpt: "Drawing parallels between 25 years of rigorous service and the discipline required in spiritual pursuit.",
    content: "Discipline is often viewed merely as following rules, but in the realm of spirituality, it is the anchor that holds our intentions steady. During my 25 years of service, I learned that true discipline is formed in the mind before it is enacted by the body. When we transition to spiritual practices—whether reading Islamic literature, engaging in reflection, or practicing patience—this same discipline is vital. It shifts our focus from fleeting worldly desires to lasting inner contentment, training the soul much like physical discipline trains the body."
  },
  {
    slug: "power-of-community-welfare",
    title: "The Power of Community Welfare",
    date: "2026-03-28",
    category: "Life Lessons",
    author: "Sohail Hanif Abbasi",
    readTime: "6 min read",
    featured: false,
    excerpt: "Why giving back to the community through organizations like Roshan Ayubia enriches our own lives.",
    content: "Involvement in community welfare is not just an act of giving; it is a profound journey of receiving. Through our work in Roshan Ayubia, I have witnessed firsthand how supporting others cultivates a deep sense of shared humanity and purpose. Islamic teachings emphasize charity and assisting neighbors, placing immense value on the well-being of the collective. When we dedicate our time, skills, or resources to uplift others, we are indirectly nurturing our own souls, fostering an environment where empathy and mutual respect thrive."
  }
];

export function getFeaturedBlogs() {
  return blogs.filter((blog) => blog.featured);
}

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}
