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
    id: "proj-4",
    title: "RibbiTraffic",
    description: "Simple network traffic visualiser that uses Scapy to sniff packets and display info about them in graphs with Streamlit and Plotly <> \
    I wanted to learn more about networking and what packets are flowing through my local network, so I built a simple foundation and I'll been expanding the functionality during my free time [...] \
    I plan to add more features like packet filtering, and maybe even a simple intrusion detection system. I also want to make it more interactive and visually appealing, like a real dashboard with live updates and alerts !!",
    tags: ["python", "networking", "scapy"],
    url: "",
    repo: "https://github.com/Paucv27/ribbitraffic",
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
    id: "proj-6",
    title: "Doc Librarby",
    description: "Not a project, but a library for project documentation ♠ I thought it would be easier to display these non-code projects in a single place, so I made GitHub repo as a library of sorts.",
    tags: ["AWS", "cybersecurity", "cloud"],
    url: "",
    repo: "https://github.com/Paucv27/doc_librarby",
  },
  {
    id: "proj-5",
    title: "GreenInv",
    description: "Personal inventory with a focus on sustainability. I wanted to combine Vinted with a personal inventory list to help people be more conscious about their consumption and waste, and to make it easier for them to find ways to give their old stuff a second life ! \
    Right now its just a wardrobe, but even just that has some really cool features, go check it out :p \
    Cool concept I made using Lovable, but it would have to be developed in a more serious way to be useful, and I don't have the time or resources to do that right now. Maybe one day I'll come back to it, but for now it's just a fun little project @",
    tags: ["lovable", "sustainability", "typescript"],
    url: "https://greeninv.lovable.app",
    repo: "https://github.com/Paucv27/greeninv",
  },
  {
    id: "proj-1",
    title: "Polidex",
    description: "Pokemon TCG Card Recognition app that fetches most recent sales of a specific card and calculates simple stats about them\
    I built this for fun to learn about computer vision and webscraping, and also because I wanted to see if I could make something like TCGPlayer's card recognition tool,\
    but getting sales data from ebay without an API is a pain.",
    tags: ["computer vision", "webscraping", "python", "opencv"],
    url: "",
    repo: "https://github.com/Paucv27/polidex_tcg",
  },
  {
    id: "proj-3",
    title: "ASCII-fy",
    description: "A simple CLI tool to convert images into ASCII art. Just wanted a mini-project on a random day and I like ASCII art, that's it really.\
    More than anything I tried to write clean, reusable code, even if the actual thing is so simple a child could do it >> \
    One day I got feeedback about my Polidex project that made me realise I need to focus more on code quality.",
    tags: ["python"],
    url: "",
    repo: "https://github.com/Paucv27/ASCII-fy",
  },
];