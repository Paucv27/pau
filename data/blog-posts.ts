export type BlogPost = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "post-7",
    title: "Polidex Update",
    date: "2026-08-10",
    tags: ["project", "update"],
    content: "So I recently updated Polidex to include a new feature that allows users to search for cards by name and get the most recent sales data for that card.\
     This was a fun little project to work on, and I learned a lot about web scraping and computer vision in the process."
  },
  {
    id: "post-6",
    title: "Tenerife!",
    date: "2026-07-26",     
    tags: ["travel", "update", "home", "friends"],
    content: "So recently I went back home to Tenerife for a few weeks, and it was really nice to finally be back for a decent amount of time :)\
     I got to see my family and friends, enjoy the weather, and disconnect from the busy tech world for a bit (kinda)\
     Some friends of mine from uni also came with me for a couple of days, and it was great being able to show them around and share my culture with them !\
     I wish we had more time, and a car ✇ definitely taking notes for next time, but it was still really really fun 𖤐\
     I told myself I would fully disconnect, but I ended up doing some AWS IAM and EC2 stuff, and make some changes to my learning plan for the next few months.\
     Anyway, overall i had a really great time, but its time to get back on the grind ♪"
  },
  {
    id: "post-5",
    title: "Exam Season",
    date: "2026-05-17",     
    tags: ["uni"],
    content: "Exam season starts tomorrow, and I don't really feel that stressed about it?\
     Its weird, considering how many things I have going on right now, but I think its because I know that I can only do so much, and stressing about it won't help.\
     Like I recently got rejected from a really cool internship, and I've had to choose a third year project, and I've had to sort out my accommodation for next year, etcetc ᶻ 𝗓 𐰁\
     I'm also quite lost about what I want to do after uni, and I feel like I should be doing more to figure that out, or somehow becoming a coding genious like some others at my uni.\
     But at the end of the day, all I can do is keep trying my best and know that I shouldn't compare myself to others because I have my own unique path ಄\
     Good luck to everyone else doing exams :p"
  },
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