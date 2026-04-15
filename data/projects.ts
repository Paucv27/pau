export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
};

export const projects: Project[] = [
  // TEMPLATE
  {
    id: "proj-1",
    title: "Polidex TCG",
    description: "Pokemon TCG Card Recognition app that fetches most recent sales of a specific card and calculates simple stats about them\
    I built this for fun to learn about computer vision and webscraping, and also because I wanted to see if I could make something like TCGPlayer's card recognition tool.",
    tags: ["computer vision", "webscraping", "python", "opencv"],
    url: "",
    repo: "https://github.com/Paucv27/polidex_tcg",
  },
  {
    id: "proj-2",
    title: "This website!",
    description: "Wanted to learn some web development, so I built this personal webpage using Next.js, React, and Tailwind CSS. It's a space to share my projects and blog posts, and to experiment with frontend design because I've been wanting to do something creative for a while",
    tags: ["webdev", "next.js", "react", "typescript"],
    url: "",
    repo: "https://github.com/Paucv27/pau",
  },
];