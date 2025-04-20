import React from 'react';
import Image from 'next/image';
import { BlogPost } from '@/components/BlogPost';
import { BlogPost as BlogPostType } from '@/types/blog';

// This would typically come from your CMS or database
const samplePosts: BlogPostType[] = [
  {
    id: '1',
    title: 'Getting Started with Personal Finance',
    slug: 'getting-started-with-personal-finance',
    content: 'Full content here...',
    excerpt: 'Learn the fundamentals of personal finance and how to start your financial journey.',
    date: '2024-04-02',
    author: 'Samson Abrams',
    readingTime: '5 min',
    tags: ['Personal Finance', 'Getting Started']
  },
  // Add more sample posts as needed
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <div className="relative h-[400px] mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80 z-10" />
        <Image
          src="/images/investment.jpg"
          alt="Financial Investment"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl text-center">
            Blog
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white/90 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-center">
            Thoughts and insights on personal finance, investing, and financial planning.
          </p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-12">
          {samplePosts.map((post) => (
            <BlogPost key={post.id} post={post} isPreview />
          ))}
        </div>
      </div>
    </div>
  );
} 