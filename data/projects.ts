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
    url: "https://paucv27.vercel.app/",
    repo: "https://github.com/Paucv27/pau",
  },
  {
    id: "proj-3",
    title: "ASCII-fy",
    description: "A simple CLI tool to convert images into ASCII art. Just wanted a mini-project on a random day and I like ASCII art, that's it really.\
    More than anything I tried to write clean, reusable code >> \
    One day I got feeedback about my Polidex project that made me realise I need to focus more on code quality.\
    I think eventually I'll add more customisation, and possibly make it a web app or a decent importable module.",
    tags: ["python"],
    url: "",
    repo: "https://github.com/Paucv27/ASCII-fy",
  },
];