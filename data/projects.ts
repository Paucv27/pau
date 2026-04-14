export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
};

export const projects: Project[] = [
  // TEMPLATE — copy this block to add a new project:
  {
    id: "proj-1",
    title: "Polidex TCG",
    description: "Pokemon TCG Card Recognition app that fetches most recent sales of a specific card and calculates simple stats about them",
    tags: ["python", "webscraping", "computer vision"],
    url: "",
    repo: "https://github.com/Paucv27/polidex_tcg",
  },
];