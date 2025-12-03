import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uddit - AI Engineer | RAG Systems, MCP Servers & Patent AI Tools Expert",
  description: "Uddit is an AI Engineer & Full Stack Developer specializing in RAG (Retrieval Augmented Generation), MCP Servers, Patent AI Tools, Vector Databases, and Agentic AI. NIT Jaipur graduate with expertise in LangChain, embeddings, chunking, Docker, Kubernetes. Freelance AI developer for ZAMMERNOW, RICHIEAI.",
  keywords: [
    "AI Engineer",
    "RAG Systems",
    "Retrieval Augmented Generation",
    "MCP Servers",
    "Model Context Protocol",
    "Patent AI Tools",
    "AI Patent Drafting",
    "Vector Databases",
    "Embeddings",
    "Text Chunking",
    "Agentic AI",
    "LangChain",
    "LlamaIndex",
    "NIT Jaipur",
    "Full Stack Developer",
    "Freelance AI Developer",
    "ZAMMERNOW",
    "RICHIEAI",
    "Docker",
    "Kubernetes",
    "FastAPI",
    "Next.js Developer",
    "Uddit AI Engineer",
    "Patent Prosecution AI",
    "Prior Art Search",
    "Semantic Search",
    "GPT-4",
    "Claude AI",
    "Ollama",
    "ChromaDB",
    "Pinecone",
    "FAISS",
    "AI Consultant India"
  ],
  authors: [{ name: "Uddit", url: "https://uddit.site" }],
  creator: "Uddit",
  publisher: "Uddit",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uddit.site",
    title: "Uddit - AI Engineer | RAG Systems, MCP Servers & Patent AI Expert",
    description: "Expert AI Engineer specializing in RAG applications, MCP servers, Patent AI tools, Vector databases, and Agentic AI systems. NIT Jaipur graduate. Available for freelance projects.",
    siteName: "Uddit Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uddit - AI Engineer | RAG, MCP Servers & Patent AI Expert",
    description: "AI Engineer specializing in RAG Systems, MCP Servers, Patent AI Tools. Expert in Vector DBs, Embeddings, LangChain. Freelance developer.",
    creator: "@UdditRise",
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual code
  },
  alternates: {
    canonical: "https://uddit.site",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Uddit",
    "jobTitle": "AI Engineer & Full Stack Developer",
    "description": "AI Engineer specializing in RAG Systems, MCP Servers, Patent AI Tools, Vector Databases, and Agentic AI",
    "url": "https://uddit.site",
    "email": "udditalerts247@gmail.com",
    "telephone": ["+91-7456886877", "+91-8368824707"],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Malaviya National Institute of Technology Jaipur",
      "sameAs": "https://www.mnit.ac.in"
    },
    "knowsAbout": [
      "RAG Systems",
      "Retrieval Augmented Generation",
      "MCP Servers",
      "Model Context Protocol",
      "Patent AI Tools",
      "Vector Databases",
      "Embeddings",
      "Text Chunking",
      "Agentic AI",
      "LangChain",
      "LlamaIndex",
      "Docker",
      "Kubernetes",
      "FastAPI",
      "Next.js",
      "AI Patent Drafting"
    ],
    "sameAs": [
      "https://github.com/UDDITwork",
      "https://linkedin.com/in/lorduddit-",
      "https://twitter.com/UdditRise",
      "https://uddit.site"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "ZAMMER NOW",
        "url": "https://zammernow.com"
      },
      {
        "@type": "Organization",
        "name": "RICHIE AI",
        "url": "https://richieai.in"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
