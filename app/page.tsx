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
  CheckCircle2,
  Briefcase,
  Laptop,
  Settings,
  type LucideIcon,
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

type Service = {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
  accent: string;
  iconColor: string;
  iconBg: string;
  iconBorder: string;
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
    year: "2025",
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
    year: "2025",
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
    year: "2024",
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
    year: "2025",
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

const services: Service[] = [
  {
    title: "Web & Mobile App Development",
    description:
      "Premium websites and application interfaces built to help brands look credible, perform smoothly, and convert visitors into clients.",
    points: [
      "Business Websites and Landing Pages",
      "Responsive Web & Mobile Applications",
      "Frontend and Backend Implementation",
    ],
    icon: Laptop,
    accent: "from-sky-500/20 via-cyan-400/10 to-transparent",
    iconColor: "#38BDF8",
    iconBg: "rgba(56, 189, 248, 0.18)",
    iconBorder: "rgba(56, 189, 248, 0.45)",
  },
  {
    title: "Tech Services",
    description:
      "Reliable technical support and digital assistance for businesses that need help maintaining, improving, and managing their online systems.",
    points: [
      "AI Automation",
      "Network Setup and Support",
      "Cybersecurity",
    ],
    icon: Settings,
   accent: "from-emerald-500/20 via-green-400/10 to-transparent",
    iconColor: "#22C55E",
    iconBg: "rgba(34, 197, 94, 0.18)",
    iconBorder: "rgba(34, 197, 94, 0.45)",
  },
  {
    title: "IT Consultancy",
    description:
      "Practical technology guidance for founders, teams, and businesses that want clearer decisions, better structure, and scalable digital solutions.",
    points: [
      "Technology Strategy and Planning",
      "Digital Transformation",
      "Recommendations For Scalable Solutions",
    ],
    icon: Briefcase,
   accent: "from-fuchsia-500/20 via-violet-400/10 to-transparent",
    iconColor: "#C084FC",
    iconBg: "rgba(192, 132, 252, 0.18)",
    iconBorder: "rgba(192, 132, 252, 0.45)",
  },
];

const processSteps = [
  {
    title: "Discovery",
    text: "I learn about your business, goals, audience, and the exact outcome you want to achieve.",
  },
  {
    title: "Strategy",
    text: "I define the right structure, features, and execution plan so the work is both beautiful and effective.",
  },
  {
    title: "Build",
    text: "I design and develop with a focus on clean implementation, responsiveness, and user experience.",
  },
  {
    title: "Launch & Support",
    text: "I help refine, deliver, and improve the final product so it can perform confidently in the real world.",
  },
];

const capabilities = [
  {
    label: "UI/UX Design",
    bg: "rgb(59, 131, 246)",
    border: "rgba(59,130,246,0.25)",
  },
  {
    label: "Full Stack Development",
    bg: "rgba(26, 30, 243, 0.99)",
    border: "rgba(99,102,241,0.25)",
  },
  {
    label: "Tech Services",
    bg: "rgba(114, 243, 8, 0.75)",
    border: "rgba(15, 194, 134, 0.25)",
  },
  {
    label: "IT Consultancy",
    bg: "rgba(193, 12, 209, 0.99)",
    border: "rgba(168,85,247,0.25)",
  },
  {
    label: "Motion Design",
    bg: "rgba(245, 229, 9, 0.86)",
    border: "rgb(218, 233, 14)",
  },
  {
    label: "Brand Presentation",
    bg: "rgba(228, 18, 11, 0.8)",
    border: "rgba(204, 32, 20, 0.67)",
  },
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
            href="#services"
            className="transition duration-300 hover:text-[color:var(--text-main)]"
          >
            Services
          </a>
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
              className="text-[11px] uppercase tracking-[0.32em]"
              style={{ color: "rgba(229, 231, 235, 0.55)" }}
            >
              +2348126282846
            </p>
          </div>

          <div
            className="flex flex-wrap gap-5 text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            <a
              href="#services"
              className="transition duration-300 hover:text-[color:var(--text-main)]"
            >
              Services
            </a>
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
              className="mb-6 flex w-full justify-center sm:mb-8 lg:justify-start"
            >
              <div
                className="inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-center text-[10px] uppercase tracking-[0.22em] shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] sm:px-4 sm:text-xs sm:tracking-[0.3em]"
                style={{
                  borderColor: "rgba(59, 130, 246, 0.25)",
                  backgroundColor: "rgba(59, 130, 246, 0.08)",
                  color: "var(--primary)",
                }}
              >
                <Sparkles className="h-3.5 w-3.5 shrink-0" />
                <span className="text-center">
                  Designer + Developer + Consultant
                </span>
                 <Sparkles className="h-3.5 w-3.5 shrink-0 -scale-x-100" />
              </div>
            </motion.div>

            <div className="grid items-start gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.75 }}
                  className="mb-4 text-center text-[11px] uppercase tracking-[0.24em] sm:text-sm sm:tracking-[0.42em] lg:text-left"
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
                        <p className="premium-body overlay-readable mt-3 max-w-sm text-[13px] leading-6 sm:text-sm">
                          Building refined digital experiences with a focus on
                          elegance, performance, and modern software
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
                  that help brands grow with confidence.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.24, duration: 0.8 }}
                  className="premium-body mt-6 max-w-2xl text-[15px] leading-7 sm:mt-8 sm:text-lg sm:leading-8"
                  style={{ color: "var(--text-muted)" }}
                >
                  I’m a design-driven Web & Mobile App developer and IT
                  consultant dedicated to crafting modern, interactive digital
                  experiences that feel premium and alive. I also provide tech
                  services and IT consultancy, helping individuals and
                  businesses build, scale, and optimize their digital systems
                  with clarity and precision.
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
                  className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-12 lg:justify-start"
                >
                  {[
                    "Refined UI",
                    "Intuitive Frontend",
                    "Premium Digital Solutions",
                    "IT Consultancy",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex min-h-[42px] items-center justify-center rounded-full border px-4 py-2 text-center text-xs uppercase tracking-[0.18em]"
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
                      <p className="premium-body overlay-readable mt-3 max-w-sm text-[13px] leading-6 sm:text-sm">
                        Building refined digital experiences with a focus on
                        elegance, performance, and modern software craftsmanship.
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
                Designer’s Eye. Developer’s Mindset.
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
                creative product mindset. Alongside development, I also offer
                tech services and IT consultancy, helping clients make better
                technology decisions, improve systems, and bring digital ideas
                to life with confidence.
              </p>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="border-y"
          style={{
            borderColor: "var(--stroke)",
            backgroundColor: "var(--surface)",
          }}
        >
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-16">
            <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p
                  className="text-sm uppercase tracking-[0.35em]"
                  style={{ color: "var(--primary)" }}
                >
                  Services
                </p>
                <h2
                  className="mt-4 font-serif text-4xl sm:text-5xl"
                  style={{ color: "var(--text-main)" }}
                >
                  Services Built For Clients Who Want Clarity & Results.
                </h2>
              </div>

              <p
                className="premium-body max-w-2xl text-sm leading-7 sm:text-base"
                style={{ color: "var(--text-muted)" }}
              >
                I help brands, founders, and growing businesses create premium
                digital products, strengthen their online presence, and make
                smarter technology decisions with confidence.
              </p>
            </div>

            <div className="grid gap-7 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className={`rounded-[1.9rem] border bg-gradient-to-br p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)] ${service.accent}`}
                    style={{
                      borderColor: "var(--stroke)",
                      backgroundColor: "var(--background)",
                    }}
                  >
                <div
  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border shadow-[0_0_24px_rgba(255,255,255,0.04)]"
  style={{
    borderColor: service.iconBorder,
    backgroundColor: service.iconBg,
    boxShadow: `0 0 22px ${service.iconBg}`,
  }}
>
  <Icon
    className="h-6 w-6"
    style={{ color: service.iconColor }}
    aria-hidden="true"
  />
</div>

                    <h3
                      className="text-2xl font-medium"
                      style={{ color: "var(--text-main)" }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className="premium-body mt-4 text-sm leading-7"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {service.description}
                    </p>

                    <div className="mt-6 grid gap-3">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3 rounded-2xl border px-4 py-3"
                          style={{
                            borderColor: "var(--stroke)",
                            backgroundColor: "rgba(10,15,31,0.45)",
                          }}
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0"
                            style={{ color: "var(--primary)" }}
                            aria-hidden="true"
                          />
                          <span
                            className="premium-body text-sm leading-7"
                            style={{ color: "rgba(229, 231, 235, 0.88)" }}
                          >
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
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
                Process
              </p>
              <h2
                className="mt-4 font-serif text-4xl sm:text-5xl"
                style={{ color: "var(--text-main)" }}
              >
                A smooth process from idea to launch.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[1.7rem] border p-6"
                  style={{
                    borderColor: "var(--stroke)",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold"
                    style={{
                      backgroundColor: "rgba(12, 27, 241, 0.84)",
                      color: "var(--primary)",
                    }}
                  >
                    {index + 1}
                  </div>

                  <h3
                    className="text-xl font-medium"
                    style={{ color: "var(--text-main)" }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="premium-body mt-3 text-sm leading-7"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {step.text}
                  </p>
                </div>
              ))}
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
                  Projects With Presence
                </h2>
              </div>

              <p
                className="premium-body max-w-xl text-sm leading-7 sm:text-base"
                style={{ color: "var(--text-muted)" }}
              >
                A growing collection of visual, interactive, and product-focused
                work that reflects my identity as a hybrid creative developer
                and consultant.
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
                        Explore Project
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
                Built With Taste & Intention
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {capabilities.map((skill) => (
                <div
                  key={skill.label}
                  className="flex items-center justify-center rounded-2xl border px-5 py-5 text-center text-sm font-medium transition duration-300 hover:scale-[1.03]"
                  style={{
                    borderColor: skill.border,
                    backgroundColor: skill.bg,
                    color: "var(--text-main)",
                  }}
                >
                  <span className="premium-body leading-tight">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-t border-b"
          style={{
            borderColor: "var(--stroke)",
            backgroundColor: "var(--surface)",
          }}
        >
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-16">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <p
                  className="text-sm uppercase tracking-[0.35em]"
                  style={{ color: "var(--primary)" }}
                >
                  Why Work With Me
                </p>
                <h2
                  className="mt-4 font-serif text-4xl sm:text-5xl"
                  style={{ color: "var(--text-main)" }}
                >
                  More than visuals. Work that supports business goals.
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  "Premium design thinking with practical execution",
                  "Clear communication and client-friendly process",
                  "Solutions built for usability, trust, and conversion",
                  "A blend of design, development, tech support, and strategy",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.7rem] border p-6"
                    style={{
                      borderColor: "var(--stroke)",
                      backgroundColor: "var(--background)",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-1 h-5 w-5 shrink-0"
                        style={{ color: "var(--primary)" }}
                      />
                      <p
                        className="premium-body text-sm leading-7"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
                  Let’s build something refined, strategic, and results-driven.
                </h2>

                <p
                  className="premium-body mt-6 max-w-2xl text-base leading-8 sm:text-lg"
                  style={{ color: "var(--text-muted)" }}
                >
                  Whether you need a premium website, tech support, or IT
                  consultancy, I’d love to help you bring the right digital
                  solution to life.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                  <a
                    href="mailto:falaiye.oluwajuwon@email.com"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.22)] transition duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: "#cfbc0f",
                      boxShadow: "0 10px 30px rgba(214, 211, 33, 0.22)",
                    }}
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    Email Me
                  </a>

                  <a
                    href="https://wa.me/2349059166546"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: "#25D366",
                      boxShadow: "0 10px 30px rgba(37, 211, 102, 0.22)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="h-4 w-4 shrink-0 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M19.11 17.21c-.29-.14-1.7-.84-1.96-.94-.26-.09-.45-.14-.64.14-.19.29-.74.94-.91 1.13-.17.19-.33.21-.62.07-.29-.14-1.2-.44-2.29-1.39-.85-.76-1.42-1.69-1.58-1.98-.17-.29-.02-.45.12-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43 0 1.43 1.04 2.82 1.19 3.01.14.19 2.04 3.11 4.93 4.36.69.29 1.22.47 1.64.6.69.22 1.32.19 1.82.12.56-.08 1.7-.69 1.94-1.35.24-.67.24-1.24.17-1.35-.07-.12-.26-.19-.55-.33Z" />
                      <path d="M16.01 3.2c-7.07 0-12.8 5.72-12.8 12.79 0 2.24.58 4.42 1.67 6.34L3.2 28.8l6.64-1.74a12.76 12.76 0 0 0 6.17 1.58h.01c7.06 0 12.79-5.73 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05A12.7 12.7 0 0 0 16.01 3.2Zm0 23.29h-.01a10.6 10.6 0 0 1-5.39-1.47l-.39-.23-3.94 1.03 1.05-3.84-.25-.4a10.58 10.58 0 0 1-1.63-5.61c0-5.85 4.76-10.61 10.61-10.61 2.83 0 5.49 1.1 7.49 3.11a10.53 10.53 0 0 1 3.11 7.5c0 5.85-4.76 10.62-10.6 10.62Z" />
                    </svg>
                    WhatsApp
                  </a>

                  <a
                    href="https://github.com/oTiya1"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: "#181717",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                    }}
                  >
                    <Github className="h-4 w-4 shrink-0" />
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/oluwajuwon-falaiye-8a1228137/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: "#0A66C2",
                      boxShadow: "0 10px 30px rgba(10,102,194,0.25)",
                    }}
                  >
                    <Linkedin className="h-4 w-4 shrink-0" />
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