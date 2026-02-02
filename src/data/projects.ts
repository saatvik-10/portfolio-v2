interface Project {
  image: string;
  title?: string;
  description: string;
  demo: string;
  source: string;
}

export const projects: Project[] = [
  {
    image: "",
    description:
      "A website uptime monitoring platform to monitor your websites, APIs, and endpoints with real-time status checks, email alerts, and dashboards.",
    demo: "",
    source: "https://github.com/saatvik-10/up-site-ts",
  },
  {
    image: "/projects/ies.png",
    description:
      "Crafted a responsive, performance-focused e-commerce site for In Search Outdoors, integrating seamless product browsing and checkout flows with clean UI/UX.",
    demo: "https://www.insearchoutdoors.com/",
    source: "NA",
  },
  {
    image: "/projects/paper-whisper.png",
    description:
      "A SaaS web application that allows users to upload PDF documents and interact with them through natural language, powered by LangChain and OpenAI's GPT models.",
    demo: "https://paper-whisper.itsaatvik.dev/",
    source: "https://github.com/saatvik-10/paper-whisper",
  },
  {
    image: "/projects/dynero.png",
    description:
      "A Wallet-as-a-Service platform built on Solana blockchain, featuring decentralized-centralized exchange functionality with secure authentication and AES-GCM private key management.",
    demo: "https://dynero.itsaatvik.dev/",
    source: "https://github.com/saatvik-10/dynero",
  },
  {
    image: "/projects/fight-club.png",
    description:
      "An animation fight club website built with GSAP, showcasing interactive animations and smooth transitions",
    demo: "https://fight-club.itsaatvik.dev/",
    source: "https://github.com/saatvik-10/fight-club",
  },
  {
    image: "/projects/admin-dashboard.png",
    description:
      "A modern admin dashboard built with Next.js featuring data visualization with Recharts, form validation using React Hook Form and Zod and a polished UI with Shadcn components and Tailwind CSS",
    demo: "https://admin-dashboard.itsaatvik.dev/",
    source: "https://github.com/saatvik-10/admin-dashboard",
  },
];
