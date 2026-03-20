"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  X,
  ExternalLink,
} from "lucide-react";

type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  year: string;
  status: string;
  overview: string;
  highlights: string[];
  accent: string;
  liveUrl: string;
  image: string;
};

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#05070b]/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="text-sm uppercase tracking-[0.35em] text-white/80 transition hover:text-white"
        >
          Falaiye Oluwajuwon
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-xs text-white/80 transition hover:border-[#c6a66b]/50 hover:text-white"
        >
          Connect
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070b]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">
              Falaiye Oluwajuwon
            </p>
            <p className="mt-3 max-w-md text-sm text-white/60">
              Crafting premium digital experiences at the intersection of design
              and development.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-white/60">
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
            <a
              href="https://github.com/oTiya1"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Falaiye Oluwajuwon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

const projects: Project[] = [
  {
    title: "Grand Empire Restaurant Website",
    category: "Luxury Restaurant Website",
    description:
      "A refined restaurant website built to showcase fine dining, premium ambience, and a seamless reservation experience.",
    stack: ["Next.js", "React", "MySQL"],
    year: "2026",
    status: "Completed",
    overview:
      "Designed for a luxury dining brand, this project focuses on elegant presentation, rich visual hierarchy, and a smooth booking-focused user journey across desktop and mobile devices.",
    highlights: [
      "Luxury dark-theme interface",
      "Reservation-focused user flow",
      "Responsive premium layout",
      "Strong visual storytelling",
    ],
    accent: "from-[#c6a66b]/30 via-[#8b6b35]/20 to-transparent",
    liveUrl: "https://grandempireuk.com",
    image: "/images/projects/grand-empire.jpg",
  },
  {
    title: "Mighty Share WebApp",
    category: "Non-Profit Organization Platform",
    description:
      "A mission-driven web application created to support outreach, communicate impact, and strengthen engagement for a non-profit organization.",
    stack: ["Laravel", "Inertia.js", "Responsive Design"],
    year: "2026",
    status: "Completed",
    overview:
      "Built for a non-profit organization, this platform emphasizes trust, accessibility, and clarity while helping visitors understand the foundation’s work, values, and community impact.",
    highlights: [
      "Mission and impact presentation",
      "Accessible and responsive interface",
      "Clear content structure",
      "Community-focused experience",
    ],
    accent: "from-emerald-500/20 via-teal-500/15 to-transparent",
    liveUrl: "https://mightysharefoundation.com",
    image: "/images/projects/mightyshare.jpg",
  },
  {
    title: "Macxuniq",
    category: "Brand / Product Website",
    description:
      "A product-centered website designed to showcase offerings with strong branding, vibrant presentation, and a polished shopping-style experience.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    year: "2026",
    status: "Completed",
    overview:
      "This project was built to give a brand a modern digital presence through visually engaging layouts, confident product presentation, and a clean, professional interface.",
    highlights: [
      "Strong brand identity",
      "Product showcase layouts",
      "Interactive visual presentation",
      "Modern responsive design",
    ],
    accent: "from-fuchsia-500/20 via-purple-500/15 to-transparent",
    liveUrl: "https://macxuniq.com",
    image: "/images/projects/macxuniq.jpg",
  },
  {
    title: "Delta4",
    category: "Energy Solutions Website",
    description:
      "A professional corporate website built to communicate energy services, technical credibility, and a dependable business presence.",
    stack: ["HTML", "CSS", "JavaScript"],
    year: "2026",
    status: "Completed",
    overview:
      "Created for an energy solutions brand, this website focuses on clarity, trust, and professionalism while presenting services, expertise, and business value in a straightforward way.",
    highlights: [
      "Corporate service presentation",
      "Trust-driven visual structure",
      "Clear service communication",
      "Responsive business layout",
    ],
    accent: "from-amber-500/20 via-orange-500/15 to-transparent",
    liveUrl: "https://delta4.com.ng",
    image: "/images/projects/delta4.jpg",
  },
  {
    title: "Maryland Club",
    category: "Social Club Website",
    description:
      "A community-oriented website designed to represent a social club through clear communication, event visibility, and an inviting digital presence.",
    stack: ["HTML", "CSS", "JavaScript"],
    year: "2026",
    status: "Completed",
    overview:
      "Built for a social club, this project highlights connection, identity, and community participation through a clean layout that supports announcements, activities, and member engagement.",
    highlights: [
      "Community-focused design",
      "Event and activity visibility",
      "Friendly and structured interface",
      "Responsive browsing experience",
    ],
    accent: "from-sky-500/20 via-blue-500/15 to-transparent",
    liveUrl: "https://marylandclub-club.com",
    image: "/images/projects/maryland-club.jpg",
  },
  {
    title: "Achihi Media",
    category: "Media Company Website",
    description:
      "A modern media website built to present creative work, digital presence, and brand communication in a bold and engaging format.",
    stack: ["Next.js", "React", "Framer Motion"],
    year: "2026",
    status: "In Progress",
    overview:
      "This project is focused on building a compelling online presence for a media company, combining visual energy, content presentation, and a polished brand-forward interface.",
    highlights: [
      "Bold media-style presentation",
      "Creative brand expression",
      "Interactive modern layout",
      "Scalable content structure",
    ],
    accent: "from-rose-500/20 via-pink-500/15 to-transparent",
    liveUrl: "https://achihimedia.example.com",
    image: "/images/projects/achihi-media.jpg",
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-end justify-center bg-[#05070b]/70 p-4 backdrop-blur-md sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#071018] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#05070b]/70 px-5 py-4 backdrop-blur-xl sm:px-7">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#c6a66b]">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl text-white sm:text-2xl">
                  {project.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-white/75 transition hover:border-[#c6a66b]/40 hover:text-white"
                aria-label="Close project modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5 sm:p-7">
              <div
                className={`mb-7 overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${project.accent}`}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                    Overview
                  </p>
                  <p className="mt-4 text-base leading-8 text-white/70">
                    {project.overview}
                  </p>

                  <p className="mt-8 text-sm uppercase tracking-[0.3em] text-white/45">
                    Key Highlights
                  </p>
                  <div className="mt-4 grid gap-3">
                    {project.highlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/75"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                      Status
                    </p>
                    <p className="mt-3 text-lg text-white">{project.status}</p>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                      Stack
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-[#05070b]/30 px-3 py-1 text-xs text-white/75"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                      Live Project
                    </p>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#c6a66b] px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
                    >
                      View Live Site
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="rounded-[1.5rem] border border-[#c6a66b]/20 bg-[rgba(198,166,107,0.06)] p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#e7d2a2]">
                      Next Step
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/75">
                      This project can evolve into a full case study page with
                      design process notes, deeper technical breakdowns, and more
                      polished presentation assets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

const skills = [
  "UI/UX Design",
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "Motion Design",
  "Brand Presentation",
];

export default function Page() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <Navbar />
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      <main className="min-h-screen bg-[#071018] pt-16 text-white selection:bg-[#c6a66b] selection:text-black">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,166,107,0.16),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.08),_transparent_20%),linear-gradient(to_bottom,_rgba(255,255,255,0.02),_transparent)]" />
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:72px_72px]" />

          <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col justify-center px-5 pt-20 pb-16 sm:px-10 sm:py-36 lg:px-16 lg:py-40">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#c6a66b]/30 bg-[#c6a66b]/10 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[#e7d2a2] sm:mb-8 sm:px-4 sm:text-xs sm:tracking-[0.3em]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              UI Designer + Web & Mobile App Developer
            </motion.div>

            <div className="grid items-start gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.8 }}
                  className="mb-4 text-[11px] uppercase tracking-[0.28em] text-white/50 sm:mb-5 sm:text-sm sm:tracking-[0.45em]"
                >
                  Falaiye Oluwadamilare Oluwajuwon
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.8 }}
                  className="max-w-5xl font-serif text-[2.7rem] leading-[0.98] text-white sm:text-6xl lg:text-8xl"
                >
                  I craft{" "}
                  <span className="text-[#c6a66b]">
                    premium digital experiences
                  </span>{" "}
                  where design elegance meets functional code.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.8 }}
                  className="mt-6 max-w-2xl text-[15px] leading-7 text-white/70 sm:mt-8 sm:text-lg sm:leading-8"
                >
                  I am a design-conscious developer focused on building
                  beautiful, interactive, and modern web experiences. My work
                  blends visual taste, motion, and clean implementation to
                  create products that feel premium and alive.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.8 }}
                  className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
                >
                  <a
                    href="#projects"
                    className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#c6a66b] px-6 py-3.5 text-sm font-medium text-black transition hover:scale-[1.02] sm:px-7 sm:py-4"
                  >
                    View Projects
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:border-[#c6a66b]/50 hover:bg-white/10 sm:px-7 sm:py-4"
                  >
                    Get In Touch
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.9 }}
                className="relative mx-auto w-full max-w-[22rem] lg:mx-0 lg:max-w-none"
              >
                <div className="absolute -inset-2 rounded-[2.2rem] bg-[radial-gradient(circle_at_top,_rgba(198,166,107,0.22),_transparent_45%)] blur-2xl sm:-inset-3" />

                <div className="relative rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-3 backdrop-blur-md sm:rounded-[2rem] sm:p-4">
                  <div className="relative overflow-hidden rounded-[1.45rem] border border-[#c6a66b]/20 bg-[#05070b]/40 sm:rounded-[1.7rem]">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(198,166,107,0.12),transparent_35%,rgba(255,255,255,0.04))]" />

                    <div className="relative aspect-[4/4.6] w-full overflow-hidden sm:aspect-[4/5]">
                      <Image
                        src="/images/profile.jpg"
                        alt="Portrait of Falaiye Oluwadamilare Oluwajuwon"
                        fill
                        priority
                        className="object-contain transition duration-700 hover:scale-[1.04]"
                      />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#05070b] via-[#05070b]/80 to-transparent p-4 sm:p-6">
                      <div className="mb-3 inline-flex rounded-full border border-[#c6a66b]/30 bg-[#c6a66b]/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#e7d2a2] sm:text-[11px] sm:tracking-[0.28em]">
                        Designer + Developer
                      </div>

                      <p className="text-[10px] uppercase tracking-[0.24em] text-white/55 sm:text-xs sm:tracking-[0.35em]">
                        Falaiye Oluwadamilare Oluwajuwon
                      </p>

                      <p className="mt-3 max-w-sm text-[13px] leading-5 text-white/75 sm:text-sm sm:leading-6">
                        Building refined digital experiences with a focus on
                        elegance, interaction, and modern frontend craftsmanship.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c6a66b]">
                About
              </p>
              <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
                Designer’s eye. Developer’s mindset.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-white/70 sm:text-lg">
              <p>
                I care deeply about how digital products feel — not just how
                they function. My approach combines elegant layouts, thoughtful
                motion, and modern frontend development to create experiences
                that are both visually striking and technically solid.
              </p>
              <p>
                I am currently growing my portfolio through projects that
                reflect premium presentation, strong user experience, and a
                creative product mindset. Over time, this will expand into
                software products, applications, and immersive game concepts.
              </p>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="border-y border-white/10 bg-white/[0.02]"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
            <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c6a66b]">
                  Selected Work
                </p>
                <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
                  Projects with presence
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                A growing collection of visual, interactive, and product-focused
                work that reflects my identity as a hybrid creative developer.
              </p>
            </div>

            <div className="grid gap-7 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.button
                  key={project.title}
                  type="button"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  onClick={() => setActiveProject(project)}
                  className="group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[#05070b]/40 p-6 text-left transition duration-300 hover:-translate-y-1.5 hover:border-[#c6a66b]/40 hover:bg-white/[0.05]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(198,166,107,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_28%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div
                      className={`mb-6 overflow-hidden rounded-[1.4rem] border border-white/10 bg-gradient-to-br ${project.accent}`}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                          {project.category}
                        </p>
                        <h3 className="mt-3 text-2xl font-medium text-white transition group-hover:text-[#e7d2a2]">
                          {project.title}
                        </h3>
                      </div>

                      <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/45 transition group-hover:border-[#c6a66b]/30 group-hover:text-white/70">
                        {project.status}
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-white/65">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/75 transition group-hover:border-white/15 group-hover:bg-white/[0.06]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="text-sm text-white/45">
                        Tap to view details
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm text-[#c6a66b] transition group-hover:translate-x-1">
                        Explore project
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c6a66b]">
                Capabilities
              </p>
              <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
                Built with taste and intention
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white/80 transition hover:border-[#c6a66b]/40 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
            <div className="rounded-[2rem] border border-[#c6a66b]/20 bg-[radial-gradient(circle_at_top,_rgba(198,166,107,0.12),_transparent_35%),rgba(255,255,255,0.03)] p-8 sm:p-10 lg:p-14">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c6a66b]">
                Contact
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl text-white sm:text-5xl lg:text-6xl">
                Let’s build something refined, modern, and memorable.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                I’m building a portfolio of premium digital work and would love
                to connect with people, brands, and teams who value thoughtful
                design and strong execution.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:falaiye.oluwajuwon@email.com"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c6a66b] px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
                >
                  <Mail className="h-4 w-4" />
                  Email Me
                </a>

                <a
                  href="https://github.com/oTiya1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm text-white/85 transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/oluwajuwon-falaiye-8a1228137/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm text-white/85 transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}