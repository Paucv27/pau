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
  {
    id: "proj-x",
    title: "Test Project",
    description: "something something description whatever",
    tags: ["test"],
    url: "https://github.com/Paucv27",
    repo: "https://github.com/Paucv27",
  },
  {
    id: "proj-x1",
    title: "Test Project",
    description: "something something description whatever",
    tags: ["test1"],
    url: "https://github.com/Paucv27",
    repo: "https://github.com/Paucv27",
  },
  {
    id: "proj-x2",
    title: "Test Project",
    description: "something something description whatever",
    tags: ["test2"],
    url: "https://github.com/Paucv27",
    repo: "https://github.com/Paucv27",
  },
  {
    id: "proj-x3",
    title: "Test Project",
    description: "something something description whatever",
    tags: ["test3"],
    url: "https://github.com/Paucv27",
    repo: "https://github.com/Paucv27",
  },
  {
    id: "proj-x4",
    title: "Test Project",
    description: "something something description whatever",
    tags: ["test4"],
    url: "https://github.com/Paucv27",
    repo: "https://github.com/Paucv27",
  },
  { 
    id: "proj-x5",
    title: "Test Project",
    description: "something something description whatever",
    tags: ["test5"],
    url: "https://github.com/Paucv27",
    repo: "https://github.com/Paucv27",
  },
  { 
    id: "proj-x6",
    title: "Test Project",
    description: "something something description whatever",
    tags: ["test6"],
    url: "https://github.com/Paucv27",
    repo: "https://github.com/Paucv27",
  },
];