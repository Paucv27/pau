export type BlogPost = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
};

export const blogPosts: BlogPost[] = [
  // TEMPLATE — copy this block to add a new post:
  {
    id: "post-1",
    title: "Hello World",
    date: "2026-04-14",
    tags: ["update"],
    content: "Here I'll share updates about what I'm up to, what I'm learning, and anything else I feel like writing about (music, games, whatever really) :)",
  },
  {
    id: "post-2",
    title: "Webpage Started",
    date: "2026-04-14",     
    tags: ["tech", "project"],
    content: "Today I started building this webpage using Next.js and Tailwind CSS. \
    It's still very early days but I'm excited to have a place to share my projects and thoughts with whoever might visit (you!). \
    And yes, I am using AI to help me with the template and some of the content and boring bits, but I'll try to make it as personal and genuine as possible :p",
  },
];