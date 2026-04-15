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
    id: "post-3",
    title: "Production!",
    date: "2026-04-15",     
    tags: ["tech", "project", "update"],
    content: "just finished v1 of this webpage and deployed it! \
    im really happy with how its looking, and looking forward to implementing new features and sharing more content here if i dont forget... \
    if you have any suggestions or feedback don't hesitate to reach out to me on any of my socials!"
  },
  {
    id: "post-2",
    title: "Webpage Started",
    date: "2026-04-14",     
    tags: ["tech", "project"],
    content: "today i started building this webpage using Next.js and Tailwind CSS. \
    it's still very early days but i'm excited to have a place to share my projects and thoughts with whoever might visit (like you!). \
    and yes, I am using AI to help me with the template and the boring parts of coding, but I promise to make it as personal and genuine as possible :p\
    on that note, no to AI art, stop war, and support all oppressed minorities everywhere",
  },
  {
    id: "post-1",
    title: "Hello World",
    date: "2026-04-14",
    tags: ["update"],
    content: "here I'll share updates about what I'm up to, what I'm learning, and anything else I feel like writing about (music, games, whatever really) :)",
  }
];