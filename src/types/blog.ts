export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  readingTime: string;
  tags: string[];
  coverImage?: string;
} 