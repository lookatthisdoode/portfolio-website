import Image from "next/image";
import React from "react";
import { palanquin, roboto, robotoMono } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";
import { IoArrowForwardSharp } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import DesignShowcase from "@/components/design-showcase";
import TechnologiesScroll from "@/components/technologies-scroll";

export default function ProjectsSlider() {
  const projects = [
    {
      name: "The Nomad Kitchen",
      id: "nomad",
      bio: "A restaurant website built with Next.js for both the front and backend. The standout feature is a comprehensive content management system that allows for creating, retrieving, and updating items in the database. Additionally, the mobile version includes a parallax scrolling effect for an enhanced user experience.",
      image_url: "/projects-images/nomad.png",
      demo: "https://thenomadkitchen.vercel.app/",
      repo: "https://github.com/lookatthisdoode/thenomadkitchen",
      technologies: [
        "Next.js",
        "Express.js",
        "Mongo DB",
        "REST",
        "React",
        "TailwindCSS",
      ],
    },
    {
      name: "Vitalina",
      id: "vitalina",
      bio: "This is a work-in-progress project built using Vite as a three-part application. Mockup of online store. The frontend is hosted on GitHub Pages, while a custom API with a basic CMS runs on Heroku, utilizing MongoDB Atlas for the database. Features include real-time content updates and a saveable shopping cart.",
      image_url: "/projects-images/vitalina.png",
      demo: "https://lookatthisdoode.github.io/accessories-store-vite/",
      repo: "https://github.com/lookatthisdoode/accessories-store-vite",
      technologies: [
        "vite",
        "express",
        "mongo DB",
        "REST",
        "React",
        "TailwindCSS",
      ],
    },
    {
      name: "Graphic Design",
      id: "design",
      bio: "Collection of graphic design projects featuring everything from logo and business card designs to comprehensive business identity rulebooks and website designs.",
      repo: "https://github.com/lookatthisdoode/clarence-2-0",
      technologies: [
        "Adobe Illustrator",
        "Canva",
        "Paint.Net",
        "Aseprite",
        "Photoshop",
      ],
    },

    {
      name: "Project Noodle Run",
      id: "noodle",
      bio: "Little indie game we have been workin on. Downhill racing with godot engine. Currently stuck on AI for opponents. Eurobeat intensifies.",
      technologies: ["GDscript", "Godot", "Aseprite", "Python"],
      image_url: "/projects-images/noodle.png",
    },
    {
      name: "Clarence 2.0",
      id: "clarence",
      bio: "Reviving the Clarence 1.0 Discord audio player, which connects seamlessly to your Discord channel to play music or podcasts. Equipped with essential player functionalities such as play, skip, and search from popular APIs, it utilizes Discord.js and the discord-player libraries to deliver a robust listening experience.",
      technologies: ["Vanilla Javascript", "Discord.js", "Python"],
      image_url: "/projects-images/clarence.png",
      repo: "https://github.com/lookatthisdoode/clarence-2-0",
    },
  ];

  return (
    <div id="wrapper" className={`flex md:gap-10 overflow-hidden z-20 w-full`}>
      {projects.map((item, index) => {
        return (
          <section
            key={index + "project"}
            id={item.id}
            className={`flex flex-col md:flex-row md:gap-7 items-start min-w-full py-3 md:py-5`}
          >
            {/* Image Button*/}
            <div className={`w-full md:w-3/5 aspect-video relative`}>
              {item.image_url ? (
                <Image
                  className={"object-cover -z-10"}
                  src={item.image_url}
                  fill
                  alt={item.name + " Project"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                />
              ) : (
                <DesignShowcase />
              )}
              <Button
                data-state={index == projects.length - 1 ? "last" : ""}
                className={`top-[100px] md:hidden absolute right-5 rounded-full h-14 aspect-square bg-backgroundLight opacity-90 hover:bg-amber-300 [&[data-state=last]>svg]:rotate-180`}
                data-scroll={`#${index != projects.length - 1 ? projects[index + 1].id : projects[0].id}`}
              >
                <IoArrowForwardSharp size={20} />
              </Button>
            </div>

            {/* Name Links Bio Button */}
            <div
              className={`md:w-2/5 h-full py-1 flex flex-col items-start justify-between`}
            >
              {/* Name */}
              <div className={`gap-2 flex-col flex`}>
                <h1 className={`text-3xl ${palanquin.className} `}>
                  {item.name}
                </h1>

                {/* Technologies slider*/}
                {item.technologies && (
                  <TechnologiesScroll technologies={item.technologies} />
                )}

                {/* Bio */}
                <div className={`text-sm ${roboto.className} text-slate-200`}>
                  {item.bio}
                </div>

                {/* Links */}
                <div
                  className={`links text-sm ${robotoMono.className} italic text-yellow-200`}
                >
                  {item.demo && (
                    <Link
                      href={item.demo}
                      className={`flex gap-2 hover:text-yellow-400 `}
                    >
                      Demo
                      <FiExternalLink
                        size={17}
                        className={`translate-y-[2px]`}
                      />
                    </Link>
                  )}
                  {item.repo && (
                    <Link
                      href={item.repo}
                      className={`flex gap-2 hover:text-yellow-400`}
                    >
                      Github Repo
                      <FiExternalLink
                        size={17}
                        className={`translate-y-[2px]`}
                      />
                    </Link>
                  )}
                </div>
              </div>

              {/* PC button */}
              <Button
                data-state={index == projects.length - 1 ? "last" : ""}
                className={`hidden z-50 md:block rounded-full h-30 aspect-square bg-backgroundLight hover:bg-amber-300 [&[data-state=last]>svg]:rotate-180`}
                data-scroll={`#${index != projects.length - 1 ? projects[index + 1].id : projects[0].id}`}
              >
                <IoArrowForwardSharp size={70} />
              </Button>
            </div>
          </section>
        );
      })}
    </div>
  );
}
