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
    accent:
      "from-[color:var(--primary)]/20 via-[color:var(--primary)]/8 to-transparent",
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
    accent: "from-[color:var(--primary)]/18 via-cyan-400/8 to-transparent",
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
    accent: "from-[color:var(--primary)]/18 via-indigo-400/8 to-transparent",
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
    accent: "from-[color:var(--primary)]/18 via-sky-400/8 to-transparent",
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
    accent: "from-[color:var(--primary)]/18 via-blue-400/8 to-transparent",
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
    accent: "from-[color:var(--primary)]/18 via-violet-400/8 to-transparent",
    liveUrl: "https://achihimedia.example.com",
    image: "/images/projects/achihi-media.jpg",
  },
];

const skills = [
  "UI/UX Design",
  "Frontend Development",
  "Backend Development",
  "Software Development",
  "Motion Design",
  "Brand Presentation",
];

function Navbar() {
  return (
    <header
      className="fixed top-0 z-50 w-full border-b backdrop-blur-2xl"
      style={{
        borderColor: "var(--stroke)",
        backgroundColor: "rgba(10, 15, 31, 0.9)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-16">
        <Link
          href="/"
          className="text-[11px] font-medium uppercase tracking-[0.32em] transition duration-300 hover:opacity-100"
          style={{ color: "rgba(229, 231, 235, 0.85)" }}
        >
          Falaiye Oluwajuwon
        </Link>

        <nav
          className="hidden items-center gap-8 text-sm md:flex"
          style={{ color: "var(--text-muted)" }}
        >
          <a
            href="#projects"
            className="transition duration-300 hover:text-[color:var(--text-main)]"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="transition duration-300 hover:text-[color:var(--text-main)]"
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-xs font-medium transition duration-300"
          style={{
            borderColor: "var(--stroke)",
            backgroundColor: "var(--surface)",
            color: "rgba(229, 231, 235, 0.85)",
          }}
        >
          Connect
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--stroke)",
        backgroundColor: "var(--background)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.32em]"
              style={{ color: "rgba(229, 231, 235, 0.55)" }}
            >
              Falaiye Oluwajuwon
            </p>
            <p
              className="premium-body mt-3 max-w-md text-sm leading-7"
              style={{ color: "var(--text-muted)" }}
            >
              I’m a design-driven developer dedicated to crafting modern,
              interactive web experiences that feel premium and alive. I combine
              visual clarity, refined motion, and clean engineering to build
              digital products that are both beautiful and thoughtfully
              executed.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-5 text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            <a
              href="#projects"
              className="transition duration-300 hover:text-[color:var(--text-main)]"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="transition duration-300 hover:text-[color:var(--text-main)]"
            >
              Contact
            </a>
            <a
              href="https://github.com/oTiya1"
              target="_blank"
              rel="noreferrer"
              className="transition duration-300 hover:text-[color:var(--text-main)]"
            >
              GitHub
            </a>
          </div>
        </div>

        <div
          className="mt-10 border-t pt-6 text-xs"
          style={{
            borderColor: "var(--stroke)",
            color: "rgba(156, 163, 175, 0.7)",
          }}
        >
          © {new Date().getFullYear()} Falaiye Oluwajuwon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

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
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 p-3 backdrop-blur-md sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.985 }}
            transition={{ duration: 0.3 }}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            style={{
              borderColor: "var(--stroke)",
              backgroundColor: "var(--surface)",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="sticky top-0 z-20 flex items-center justify-between border-b px-5 py-4 backdrop-blur-xl sm:px-7"
              style={{
                borderColor: "var(--stroke)",
                backgroundColor: "rgba(10, 15, 31, 0.9)",
              }}
            >
              <div className="pr-4">
                <p
                  className="text-[10px] uppercase tracking-[0.3em] sm:text-[11px]"
                  style={{ color: "var(--primary)" }}
                >
                  {project.category}
                </p>
                <h3
                  className="mt-2 text-xl sm:text-2xl"
                  style={{ color: "var(--text-main)" }}
                >
                  {project.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border transition duration-300"
                style={{
                  borderColor: "var(--stroke)",
                  backgroundColor: "var(--background)",
                  color: "rgba(229, 231, 235, 0.75)",
                }}
                aria-label="Close project modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5 sm:p-7">
              <div
                className={`mb-7 overflow-hidden rounded-[1.6rem] border bg-gradient-to-br ${project.accent}`}
                style={{ borderColor: "var(--stroke)" }}
              >
                <div
                  className="aspect-[16/9] overflow-hidden"
                  style={{ backgroundColor: "var(--background)" }}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <p
                    className="text-[11px] uppercase tracking-[0.28em]"
                    style={{ color: "rgba(156, 163, 175, 0.7)" }}
                  >
                    Overview
                  </p>
                  <p
                    className="premium-body mt-4 text-[15px] leading-8 sm:text-base"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.overview}
                  </p>

                  <p
                    className="mt-8 text-[11px] uppercase tracking-[0.28em]"
                    style={{ color: "rgba(156, 163, 175, 0.7)" }}
                  >
                    Key Highlights
                  </p>

                  <div className="mt-4 grid gap-3">
                    {project.highlights.map((item) => (
                      <div
                        key={item}
                        className="premium-body rounded-2xl border px-4 py-4 text-sm leading-7"
                        style={{
                          borderColor: "var(--stroke)",
                          backgroundColor: "var(--background)",
                          color: "rgba(229, 231, 235, 0.85)",
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  <div
                    className="rounded-[1.5rem] border p-5"
                    style={{
                      borderColor: "var(--stroke)",
                      backgroundColor: "var(--background)",
                    }}
                  >
                    <p
                      className="text-[11px] uppercase tracking-[0.28em]"
                      style={{ color: "rgba(156, 163, 175, 0.7)" }}
                    >
                      Status
                    </p>
                    <p
                      className="mt-3 text-lg"
                      style={{ color: "var(--text-main)" }}
                    >
                      {project.status}
                    </p>
                  </div>

                  <div
                    className="rounded-[1.5rem] border p-5"
                    style={{
                      borderColor: "var(--stroke)",
                      backgroundColor: "var(--background)",
                    }}
                  >
                    <p
                      className="text-[11px] uppercase tracking-[0.28em]"
                      style={{ color: "rgba(156, 163, 175, 0.7)" }}
                    >
                      Year
                    </p>
                    <p
                      className="mt-3 text-lg"
                      style={{ color: "var(--text-main)" }}
                    >
                      {project.year}
                    </p>
                  </div>

                  <div
                    className="rounded-[1.5rem] border p-5"
                    style={{
                      borderColor: "var(--stroke)",
                      backgroundColor: "var(--background)",
                    }}
                  >
                    <p
                      className="text-[11px] uppercase tracking-[0.28em]"
                      style={{ color: "rgba(156, 163, 175, 0.7)" }}
                    >
                      Stack
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border px-3 py-1 text-xs"
                          style={{
                            borderColor: "var(--stroke)",
                            backgroundColor: "var(--surface)",
                            color: "rgba(229, 231, 235, 0.8)",
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className="rounded-[1.5rem] border p-5"
                    style={{
                      borderColor: "var(--stroke)",
                      backgroundColor: "var(--background)",
                    }}
                  >
                    <p
                      className="text-[11px] uppercase tracking-[0.28em]"
                      style={{ color: "rgba(156, 163, 175, 0.7)" }}
                    >
                      Live Project
                    </p>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white transition duration-300 hover:scale-[1.02]"
                      style={{ backgroundColor: "var(--primary)" }}
                    >
                      View Live Site
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <div
                    className="rounded-[1.5rem] border p-5"
                    style={{
                      borderColor: "rgba(59, 130, 246, 0.25)",
                      backgroundColor: "rgba(59, 130, 246, 0.08)",
                    }}
                  >
                    <p
                      className="text-[11px] uppercase tracking-[0.28em]"
                      style={{ color: "var(--primary)" }}
                    >
                      Next Step
                    </p>
                    <p
                      className="premium-body mt-3 text-sm leading-7"
                      style={{ color: "rgba(229, 231, 235, 0.88)" }}
                    >
                      This project can evolve into a full case study page with
                      process documentation, technical decisions, and stronger
                      presentation storytelling.
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

export default function Page() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <Navbar />
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      <main
        className="min-h-screen pt-16 selection:text-white"
        style={{
          backgroundColor: "var(--background)",
          color: "var(--text-main)",
        }}
      >
        <section
          className="relative overflow-hidden border-b"
          style={{ borderColor: "var(--stroke)" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_32%),radial-gradient(circle_at_82%_18%,_rgba(255,255,255,0.04),_transparent_20%),radial-gradient(circle_at_20%_80%,_rgba(30,64,175,0.16),_transparent_28%)]" />
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[color:var(--background)] to-transparent" />

          <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col justify-center px-5 pb-16 pt-20 sm:px-8 sm:py-28 lg:px-16 lg:py-36">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-2 text-[10px] uppercase tracking-[0.22em] shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] sm:mb-8 sm:px-4 sm:text-xs sm:tracking-[0.3em]"
              style={{
                borderColor: "rgba(59, 130, 246, 0.25)",
                backgroundColor: "rgba(59, 130, 246, 0.08)",
                color: "var(--primary)",
              }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Designer + Web & Mobile App Developer
            </motion.div>

            <div className="grid items-start gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.75 }}
                  className="mb-4 text-[11px] uppercase tracking-[0.28em] sm:text-sm sm:tracking-[0.42em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Falaiye Oluwadamilare Oluwajuwon
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.8 }}
                  className="relative mb-8 block lg:hidden"
                >
                  <div className="absolute -inset-3 rounded-[2.2rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_48%)] blur-2xl" />

                  <div
                    className="relative mx-auto w-full max-w-[22rem] rounded-[2rem] border p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-4"
                    style={{
                      borderColor: "var(--stroke)",
                      backgroundColor: "var(--surface)",
                    }}
                  >
                    <div
                      className="relative overflow-hidden rounded-[1.65rem] border"
                      style={{
                        borderColor: "var(--stroke)",
                        backgroundColor: "var(--surface)",
                      }}
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(59,130,246,0.14),transparent_40%,rgba(255,255,255,0.03))]" />
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                      <div
                        className="relative aspect-[4/4.8] w-full overflow-hidden"
                        style={{ backgroundColor: "var(--background)" }}
                      >
                        <Image
                          src="/images/profile.jpg"
                          alt="Portrait of Falaiye Oluwadamilare Oluwajuwon"
                          fill
                          priority
                          quality={100}
                          sizes="90vw"
                          className="object-contain transition duration-700 hover:scale-[1.04]"
                        />
                      </div>

                      <div
                        className="absolute inset-x-0 bottom-0 p-4 sm:p-6"
                        style={{
                          backgroundImage:
                            "linear-gradient(to top, rgba(10,15,31,0.98), rgba(10,15,31,0.9), rgba(10,15,31,0.2), transparent)",
                        }}
                      >
                        <div
                          className="mb-3 inline-flex rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.2em] sm:text-[11px] sm:tracking-[0.26em]"
                          style={{
                            borderColor: "rgba(59, 130, 246, 0.35)",
                            backgroundColor: "rgba(59, 130, 246, 0.16)",
                            color: "#dbeafe",
                          }}
                        >
                         Falaiye Oluwajuwon
                        </div>

                        <p className="overlay-readable text-[10px] uppercase tracking-[0.24em] sm:text-xs sm:tracking-[0.35em]">
                          Designer + Developer
                        </p>

                        <p className="premium-body overlay-readable mt-3 max-w-sm text-[13px] leading-6 sm:text-sm">
                          Building refined digital experiences with a focus on
                          elegance, interaction, and modern frontend
                          craftsmanship.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.14, duration: 0.8 }}
                  className="max-w-5xl font-serif text-[2.55rem] leading-[0.96] sm:text-6xl lg:text-[5.3rem]"
                  style={{ color: "var(--text-main)" }}
                >
                  I craft{" "}
                  <span className="bg-gradient-to-r from-[color:var(--text-main)] via-[color:var(--primary)] to-[color:var(--text-main)] bg-clip-text text-transparent">
                    premium digital experiences
                  </span>{" "}
                  where design elegance meets functional code.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.24, duration: 0.8 }}
                  className="premium-body mt-6 max-w-2xl text-[15px] leading-7 sm:mt-8 sm:text-lg sm:leading-8"
                  style={{ color: "var(--text-muted)" }}
                >
                  I’m a design-driven developer dedicated to crafting modern,
                  interactive web experiences that feel premium and alive. I
                  combine visual clarity, refined motion, and clean engineering
                  to build digital products that are both beautiful and
                  thoughtfully executed.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.34, duration: 0.8 }}
                  className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
                >
                  <a
                    href="#projects"
                    className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.22)] transition duration-300 hover:scale-[1.02] sm:px-7"
                    style={{ backgroundColor: "var(--primary)" }}
                  >
                    View Projects
                    <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex min-h-[54px] items-center justify-center rounded-full border px-6 py-3.5 text-sm font-medium transition duration-300 sm:px-7"
                    style={{
                      borderColor: "var(--stroke)",
                      backgroundColor: "var(--surface)",
                      color: "var(--text-main)",
                    }}
                  >
                    Get In Touch
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42, duration: 0.8 }}
                  className="mt-10 flex flex-wrap gap-3 sm:mt-12"
                >
                  {[
                    "Refined UI",
                    "Intuitive Frontend",
                    "Premium Digital Solutions",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em]"
                      style={{
                        borderColor: "var(--stroke)",
                        backgroundColor: "var(--surface)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36, duration: 0.9 }}
                className="relative mx-auto hidden w-full max-w-[22rem] lg:mx-0 lg:block lg:max-w-none"
              >
                <div className="absolute -inset-3 rounded-[2.2rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_48%)] blur-2xl" />

                <div
                  className="relative rounded-[2rem] border p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-4"
                  style={{
                    borderColor: "var(--stroke)",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <div
                    className="relative overflow-hidden rounded-[1.65rem] border"
                    style={{
                      borderColor: "var(--stroke)",
                      backgroundColor: "var(--surface)",
                    }}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(59,130,246,0.14),transparent_40%,rgba(255,255,255,0.03))]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <div
                      className="relative aspect-[4/4.8] w-full overflow-hidden"
                      style={{ backgroundColor: "var(--background)" }}
                    >
                      <Image
                        src="/images/profile.jpg"
                        alt="Portrait of Falaiye Oluwadamilare Oluwajuwon"
                        fill
                        priority
                        quality={100}
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 400px"
                        className="object-contain transition duration-700 hover:scale-[1.04]"
                      />
                    </div>

                    <div
                      className="absolute inset-x-0 bottom-0 p-4 sm:p-6"
                      style={{
                        backgroundImage:
                          "linear-gradient(to top, rgba(10,15,31,0.98), rgba(10,15,31,0.9), rgba(10,15,31,0.2), transparent)",
                      }}
                    >
                      <div
                        className="mb-3 inline-flex rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.2em] sm:text-[11px] sm:tracking-[0.26em]"
                        style={{
                          borderColor: "rgba(59, 130, 246, 0.35)",
                          backgroundColor: "rgba(59, 130, 246, 0.16)",
                          color: "#dbeafe",
                        }}
                      >
                        Falaiye Oluwajuwon
                      </div>

                      <p className="overlay-readable text-[10px] uppercase tracking-[0.24em] sm:text-xs sm:tracking-[0.35em]">
                        Designer + Developer
                      </p>

                      <p className="premium-body overlay-readable mt-3 max-w-sm text-[13px] leading-6 sm:text-sm">
                        Building refined digital experiences with a focus on
                        elegance, interaction, and modern frontend
                        craftsmanship.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p
                className="text-sm uppercase tracking-[0.35em]"
                style={{ color: "var(--primary)" }}
              >
                About
              </p>
              <h2
                className="mt-4 font-serif text-4xl sm:text-5xl"
                style={{ color: "var(--text-main)" }}
              >
                Designer’s eye. Developer’s mindset.
              </h2>
            </div>

            <div
              className="premium-body space-y-6 text-base leading-8 sm:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
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
          className="border-y"
          style={{
            borderColor: "var(--stroke)",
            backgroundColor: "var(--surface)",
          }}
        >
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-16">
            <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p
                  className="text-sm uppercase tracking-[0.35em]"
                  style={{ color: "var(--primary)" }}
                >
                  Selected Work
                </p>
                <h2
                  className="mt-4 font-serif text-4xl sm:text-5xl"
                  style={{ color: "var(--text-main)" }}
                >
                  Projects with presence
                </h2>
              </div>

              <p
                className="premium-body max-w-xl text-sm leading-7 sm:text-base"
                style={{ color: "var(--text-muted)" }}
              >
                A growing collection of visual, interactive, and product-focused
                work that reflects my identity as a hybrid creative developer.
              </p>
            </div>

            <div className="grid gap-7 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.button
                  key={project.title}
                  type="button"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  onClick={() => setActiveProject(project)}
                  className="group relative overflow-hidden rounded-[1.9rem] border p-5 text-left shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.26)] sm:p-6"
                  style={{
                    borderColor: "var(--stroke)",
                    backgroundColor: "var(--background)",
                  }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.03),_transparent_28%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-50" />

                  <div className="relative">
                    <div
                      className={`mb-6 overflow-hidden rounded-[1.4rem] border bg-gradient-to-br ${project.accent}`}
                      style={{ borderColor: "var(--stroke)" }}
                    >
                      <div
                        className="aspect-[4/3] overflow-hidden"
                        style={{ backgroundColor: "var(--background)" }}
                      >
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                        />
                      </div>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p
                          className="text-[11px] uppercase tracking-[0.26em]"
                          style={{ color: "rgba(156, 163, 175, 0.75)" }}
                        >
                          {project.category}
                        </p>
                        <h3
                          className="mt-3 text-2xl font-medium transition duration-300 group-hover:text-[color:var(--primary)]"
                          style={{ color: "var(--text-main)" }}
                        >
                          {project.title}
                        </h3>
                      </div>

                      <div
                        className="rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.24em] transition duration-300"
                        style={{
                          borderColor: "var(--stroke)",
                          backgroundColor: "var(--surface)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {project.status}
                      </div>
                    </div>

                    <p
                      className="premium-body mt-4 text-sm leading-7"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border px-3 py-1 text-xs"
                          style={{
                            borderColor: "var(--stroke)",
                            backgroundColor: "var(--surface)",
                            color: "rgba(229, 231, 235, 0.8)",
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div
                      className="mt-8 flex items-center justify-between border-t pt-5"
                      style={{ borderColor: "var(--stroke)" }}
                    >
                      <span
                        className="premium-body text-sm"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Tap to view details
                      </span>
                      <span
                        className="inline-flex items-center gap-2 text-sm transition duration-300 group-hover:translate-x-1"
                        style={{ color: "var(--primary)" }}
                      >
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

        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p
                className="text-sm uppercase tracking-[0.35em]"
                style={{ color: "var(--primary)" }}
              >
                Capabilities
              </p>
              <h2
                className="mt-4 font-serif text-4xl sm:text-5xl"
                style={{ color: "var(--text-main)" }}
              >
                Built with taste and intention
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="premium-body rounded-full border px-5 py-3 text-sm transition duration-300"
                  style={{
                    borderColor: "var(--stroke)",
                    backgroundColor: "var(--surface)",
                    color: "rgba(229, 231, 235, 0.85)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t"
          style={{ borderColor: "var(--stroke)" }}
        >
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-16">
            <div
              className="relative overflow-hidden rounded-[2rem] border p-8 shadow-[0_18px_50px_rgba(0,0,0,0.24)] sm:p-10 lg:p-14"
              style={{
                borderColor: "rgba(59, 130, 246, 0.15)",
                backgroundColor: "var(--surface)",
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="relative">
                <p
                  className="text-sm uppercase tracking-[0.35em]"
                  style={{ color: "var(--primary)" }}
                >
                  Contact
                </p>

                <h2
                  className="mt-4 max-w-3xl font-serif text-4xl sm:text-5xl lg:text-6xl"
                  style={{ color: "var(--text-main)" }}
                >
                  Let’s build something refined, modern, and memorable.
                </h2>

                <p
                  className="premium-body mt-6 max-w-2xl text-base leading-8 sm:text-lg"
                  style={{ color: "var(--text-muted)" }}
                >
                  I’m building a portfolio of premium digital work and would
                  love to connect with people, brands, and teams who value
                  thoughtful design and strong execution.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="mailto:falaiye.oluwajuwon@email.com"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.22)] transition duration-300 hover:scale-[1.02]"
                    style={{ backgroundColor: "var(--primary)" }}
                  >
                    <Mail className="h-4 w-4" />
                    Email Me
                  </a>

                  <a
                    href="https://github.com/oTiya1"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm transition duration-300"
                    style={{
                      borderColor: "var(--stroke)",
                      backgroundColor: "var(--background)",
                      color: "rgba(229, 231, 235, 0.85)",
                    }}
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/oluwajuwon-falaiye-8a1228137/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm transition duration-300"
                    style={{
                      borderColor: "var(--stroke)",
                      backgroundColor: "var(--background)",
                      color: "rgba(229, 231, 235, 0.85)",
                    }}
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}