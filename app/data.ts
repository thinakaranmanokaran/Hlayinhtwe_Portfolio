import Ecommerce from "@/assets/images/ecommerce.png"
import Portfolio from "@/assets/images/portfolio.png"
import Python from "@/assets/images/python.png"
import Nltk from "@/assets/images/nltk.jpg"
import Database from "@/assets/images/databse.png"
import Git from "@/assets/images/git.png"

import { StaticImageData } from "next/image"

type Project = {
  name: string
  description: string
  link: string
  video: string | StaticImageData
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: "Ecommerce Application",
    description:
      "A full-featured e-commerce web app built with TypeScript, showcasing product listings, shopping cart functionality, and seamless user interactions.",
    link: "https://github.com/Hla-Yin-Htwe/Ecommerce-Application",
    video: Ecommerce,
    id: "project1",
  },
  {
    name: "Personal Website",
    description:
      "A personal portfolio site showcasing projects, blogs, and experience.",
    link: "https://hlayinhtwe.github.io",
    video: Portfolio,
    id: "project2",
  },
  {
    name: "Python Programming Assignments",
    description:
      "Coursework and example assignments from a Python programming course, covering real-world problem solving.",
    link: "https://github.com/Hla-Yin-Htwe/PythonProgramming",
    video: Python,
    id: "project3",
  },
  {
    name: "NLP with Python and NLTK",
    description:
      "Jupyter notebooks containing solutions and exercises from the 'NLP with Python' tutorial using NLTK.",
    link: "https://github.com/Hla-Yin-Htwe/NLP-with-Python-and-NLTK-Solutions",
    video: Nltk,
    id: "project4",
  },
  {
    name: "Database Project",
    description:
      "Database-related coursework and implementations demonstrating SQL and data management concepts.",
    link: "https://github.com/Hla-Yin-Htwe", // replace with actual repo if available
    video: Database,
    id: "project5",
  },
  {
    name: "Git & Version Control",
    description:
      "Hands-on exploration of Git commands, workflows, and best practices for collaborative development.",
    link: "https://github.com/Hla-Yin-Htwe", // replace with actual repo if available
    video: Git,
    id: "project6",
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Hla-Yin-Htwe',
  },
  // {
  //   label: 'Twitter',
  //   link: 'https://twitter.com/ibelick',
  // },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/hla-yin-htwe-6a11b02b8/',
  },
  // {
  //   label: 'Mail',
  //   link: 'mailto:hlayinhtwe111@gmail.com',
  // },
]

export const EMAIL = 'hlayinhtwe111@gmail.com'
