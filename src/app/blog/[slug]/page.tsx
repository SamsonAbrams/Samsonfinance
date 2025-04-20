import React from 'react';
import { BlogPost } from '@/components/BlogPost';
import { BlogPost as BlogPostType } from '@/types/blog';

// This would typically come from your CMS or database
const getPost = (slug: string): BlogPostType | undefined => {
  // In a real application, this would fetch from your CMS or database
  const posts: BlogPostType[] = [
    {
      id: '1',
      title: 'Getting Started with Personal Finance',
      slug: 'getting-started-with-personal-finance',
      content: `
        <h2>Introduction</h2>
        <p>Personal finance is the foundation of financial success. In this post, we'll explore the key principles that will help you build a strong financial future.</p>
        
        <h2>Key Principles</h2>
        <ul>
          <li>Create a budget and stick to it</li>
          <li>Build an emergency fund</li>
          <li>Pay off high-interest debt</li>
          <li>Start investing early</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>By following these principles, you'll be well on your way to financial success.</p>
      `,
      excerpt: 'Learn the fundamentals of personal finance and how to start your financial journey.',
      date: '2024-04-02',
      author: 'Samson Abrams',
      readingTime: '5 min',
      tags: ['Personal Finance', 'Getting Started'],
      coverImage: '/images/blog/finance-basics.jpg',
    },
    // Add more posts as needed
  ];

  return posts.find(post => post.slug === slug);
};

// Generate static params for all blog posts
export function generateStaticParams() {
  const posts: BlogPostType[] = [
    {
      id: '1',
      title: 'Getting Started with Personal Finance',
      slug: 'getting-started-with-personal-finance',
      content: '',
      excerpt: '',
      date: '2024-04-02',
      author: 'Samson Abrams',
      readingTime: '5 min',
      tags: ['Personal Finance', 'Getting Started'],
    }
  ];
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Post Not Found</h1>
          <p className="mt-4 text-gray-600">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <BlogPost post={post} />
    </div>
  );
} 