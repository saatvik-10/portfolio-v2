interface Project {
  image: string;
  title?: string;
  description: string;
  demo: string;
  source: string;
}

export const projects: Project[] = [
  {
    image: "/projects/rag.png",
    description:
      "A modular Retrieval-Augmented Generation (RAG) engine built from scratch using FastAPI, PostgreSQL (pgvector), Sentence Transformers, and OpenRouter.",
    demo: "NA",
    source: "https://github.com/saatvik-10/rag_engine",
  },
  {
    image: "/projects/omegle.png",
    description:
      "A real-time, Omegle-style video chat app featuring instant matchmaking, private rooms, live messaging, and resilient session/room state for smooth low-latency connections.",
    demo: "https://better-omegle.itsaatvik.dev",
    source: "https://github.com/saatvik-10/better-omegle",
  },
  {
    image: "/projects/ies.png",
    description:
      "Crafted a responsive, performance-focused e-commerce site for In Search Outdoors, integrating seamless product browsing and checkout flows with clean UI/UX",
    demo: "https://www.insearchoutdoors.com/",
    source: "NA",
  },
  {
    image: "/projects/dynero.png",
    description:
      "A Wallet-as-a-Service platform built on Solana blockchain, featuring decentralized-centralized exchange functionality with secure authentication and AES-GCM private key management",
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
