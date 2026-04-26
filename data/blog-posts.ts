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
    id: "post-4",
    title: "EL BAIFO",
    date: "2026-04-26",     
    tags: ["music"],
    content: "EL BAIFO just released on friday, its an album by Canarian artist Quevedo, and its the only thing i've been listening to since then 𝄞𝄞\
    honestly its so good, my favourite songs off it rn are 'EL BAIFO', 'HIJO DE VOLCAN', 'NI BORRACHO' and 'LA GRACIOSA'.\
    its great hearing music made by your people for your people, its kinda like DTMF by Bad Bunny.\
    it really makes you want to go back and be with your people, it makes you miss the things you thought you would always have,\
     but its not so bad to feel like that when i know i'll be back soon even if its just for a little bit.\
    point is, its great to reconnect, and dont fear the future, make it yourself :p\
    un shoutout a todos los canarios del mundo por ser de un lugar tan bonito, y a cualquier persona que eche de menos estar en casa ✰"
  },
  {
    id: "post-3",
    title: "Production!",
    date: "2026-04-15",     
    tags: ["tech", "project", "update"],
    content: "just finished v1 of this webpage and deployed it! \
    im really happy with how its looking, and looking forward to implementing new features and sharing more content here if i dont forget... \
    if you have any suggestions or feedback don't hesitate to reach out to me on any of my socials!\
    also i know there is no picture yet, i just cant find a good one and i dont want to use my linkedin one ✘"
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