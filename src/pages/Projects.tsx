import React from "react";
import BlurText from "../components/reactbits/blur-text";
import { FloatingDock } from "../components/ui/floating-dock";
import { IoIosHome } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

const Links = [
  {
    title: "Home",
    icon: <IoIosHome />,
    href: "/",
  },
  {
    title: "About",
    icon: <FaUserGraduate />,
    href: "/about",
  },
  {
    title: "Projects",
    icon: <GrProjects />,
    href: "/projects",
  },
];

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: ProjectProps[] = [
  {
    title: "Remusa App",
    description:
      "A loyalty app for mechanics and spare parts distribution centers that purchase from Remusa. Users accumulate points through invoice activation, redeem rewards, and participate in company-run monthly raffles.",
    image:
      "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/portfolio/Screenshot%202025-05-04%20at%2012.15.01%E2%80%AFAM.png",
    link: "https://play.google.com/store/apps/details?id=com.remusa.app",
  },
  {
    title: "Gracia Plus",
    description:
      "A high-engagement mobile app for a live radio station that reached over 5,000 downloads in under a month. Includes audio streaming, live interaction with hosts, daily stories, real-time announcements.",
    image:
      "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/portfolio/Screenshot%202025-05-04%20at%2012.16.16%E2%80%AFAM.png",
    link: "https://play.google.com/store/apps/details?id=com.lobster.graciaplus",
  },
  {
    title: "La Tica App",
    description:
      "A loyalty and tracking system for service stations in Costa Rica with over 10,000 downloads. Users can activate invoices, see fuel purchase history, view real-time fuel prices, and receive notifications on station promotions.",
    image:
      "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/portfolio/Screenshot%202025-05-04%20at%2012.21.01%E2%80%AFAM.png",
    link: "https://apps.apple.com/cr/app/servicentro-la-tica/id6471242942?l=en-GB",
  },
  {
    title: "remusacr.com",
    description:
      "A web companion to the Remusa App that allows mechanics to activate invoices by scanning QR codes. Enables participation in promotions and raffles.",
    image:
      "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/portfolio/Screenshot%202025-05-04%20at%2012.18.56%E2%80%AFAM.png",
    link: "https://www.remusacr.com",
  },
  {
    title: "laticacr.com",
    description:
      "A public-facing website that complements the La Tica app, serving over 35,000 users. It provides information on how the loyalty system works, active raffles, and fuel-related services for customers.",
    image:
      "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/portfolio/Screenshot%202025-05-04%20at%2012.17.09%E2%80%AFAM.png",
    link: "https://laticacr.com",
  },
  {
    title: "SpikeBall Tournaments",
    description:
      "A lightweight web app built for Costa Rican gyms to organize Spikeball tournaments. Supports tournament formats like single-elimination, double-elimination, and league-style brackets.",
    image:
      "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/portfolio/Screenshot%202025-05-04%20at%2012.17.51%E2%80%AFAM.png",
    link: "https://lobsterlabs.net/spikeball",
  },
  {
    title: "Repuestos Mundiales Portal",
    description:
      "An internal enterprise platform for Repuestos Mundiales, used by over 50 employees. Allows staff to search for car parts using international codes and match them against their local inventory.",
    image:
      "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/portfolio/Screenshot%202025-05-04%20at%2012.23.20%E2%80%AFAM.png",
    link: "https://remusacr.com/portal",
  },
];

function ProjectCard({ project }: { project: ProjectProps }) {
  const openLink = () => {
    if (project.link && project.link !== "#") {
      window.open(project.link, "_blank");
    }
    // Optionally add a visual cue if the link is '#'
  };

  return (
    <div
      className="p-2 w-[19rem] rounded-lg border-white shadow-white transition-transform duration-300 ease-in-out hover:scale-105 group"
      onClick={openLink}
    >
      <div className="flex flex-col gap-2 w-full h-full overflow-hidden rounded-lg bg-neutral-900 p-4 border border-transparent group-hover:border-emerald-600/50 shadow-md shadow-black/30 group-hover:shadow-lg group-hover:shadow-emerald-400/40 transition-all duration-300 ease-in-out cursor-pointer">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover rounded h-[120px] w-full"
        />
        <h3 className="font-bold text-lg text-white">{project.title}</h3>
        <p className="text-xs text-neutral-400">{project.description}</p>
      </div>
    </div>
  );
}

function Projects() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <BackgroundBeamsWithCollision>
      <div className="relative z-10 min-h-[100dvh] pt-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 flex flex-col items-center">
            <div className="max-w-2xl mx-auto  ">
              <BlurText
                text="My Recent Projects"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-2xl md:text-4xl font-bold mb-4 text-center justify-center"
              />
              <p className="text-white font-thin max-w-xl mx-auto animate-fade-up animate-duration-[1500ms] animate-delay-500 mt-4">
                Here are some of the projects I've worked on. Each represents
                unique challenges and solutions I've implemented for clients.
              </p>
            </div>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 pt-8 justify-items-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <div className="fixed z-50 left-4 bottom-4 md:bottom-5 md:left-1/2 md:-translate-x-1/2 animate-fade-up animate-duration-[1500ms] animate-delay-2000">
          <FloatingDock items={Links} />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default Projects;
