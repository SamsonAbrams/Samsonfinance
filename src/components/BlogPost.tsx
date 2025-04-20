import React from 'react';
import Link from 'next/link';
import { BlogPost as BlogPostType } from '@/types/blog';
import Image from 'next/image';

interface BlogPostProps {
  post: BlogPostType;
  isPreview?: boolean;
}

export const BlogPost: React.FC<BlogPostProps> = ({ post, isPreview = false }) => {
  const content = isPreview ? post.excerpt : post.content;

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {post.coverImage && (
        <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="space-y-4">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <time dateTime={post.date}>{post.date}</time>
          <span>•</span>
          <span>{post.readingTime} read</span>
        </div>

        <h2 className="text-3xl font-bold text-gray-900">
          {isPreview ? (
            <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
              {post.title}
            </Link>
          ) : (
            post.title
          )}
        </h2>

        <div className="prose prose-lg max-w-none">
          {content}
        </div>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}; 