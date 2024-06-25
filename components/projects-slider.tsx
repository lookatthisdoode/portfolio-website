import Image from "next/image";
import React from "react";
import { palanquin, roboto, robotoMono } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";
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
      name: "Vitalina Accessories Store",
      id: "vitalina",
      bio: "Mockup of online store built using Vite as a three-part application. The frontend is hosted on GitHub Pages, while a custom API with a basic CMS runs on Heroku, utilizing MongoDB Atlas for the database. Features include real-time content updates and a saveable shopping cart.",
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
      bio: "Various graphic design projects collected over the years featuring everything from logo and business card designs to comprehensive business identity rulebooks and website designs.",
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
      bio: "Writing main script for a little indie game we have been working on. Downhill style racing game with Godot engine. Currently working on AI for opponents. Eurobeat intensifies.",
      technologies: ["GDscript", "Godot", "Aseprite", "Python"],
      image_url: "/projects-images/noodle.gif",
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
            </div>

            {/* Name Links Bio Button */}
            <div
              className={`md:w-2/5 h-full py-1 flex flex-col items-start justify-between`}
            >
              {/* Name and mobile buttons */}
              <div className={`gap-2 flex-col flex`}>
                <div className={`flex justify-between`}>
                  <h1 className={`text-3xl ${palanquin.className} `}>
                    {item.name}
                  </h1>
                  <div className={`flex`}>
                    <Button
                      data-state={index == projects.length - 1 ? "last" : ""}
                      className={`md:hidden bg-opacity-0 `}
                      data-scroll={`#${index != 0 ? projects[index - 1].id : projects[projects.length - 1].id}`}
                    >
                      <IoArrowBackSharp size={30} />
                    </Button>
                    <Button
                      data-state={index == projects.length - 1 ? "last" : ""}
                      className={`md:hidden bg-opacity-0`}
                      data-scroll={`#${index != projects.length - 1 ? projects[index + 1].id : projects[0].id}`}
                    >
                      <IoArrowForwardSharp size={30} />
                    </Button>
                  </div>
                </div>

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
                      className={`flex gap-2 hover:text-yellow-300 `}
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
                      className={`flex gap-2 hover:text-yellow-300`}
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

              {/* PC buttons */}
              <div className={`flex items-baseline gap-3 pt-10`}>
                <Button
                  data-state={index == projects.length - 1 ? "last" : ""}
                  className={`hidden z-50 md:block rounded-full h-12 aspect-square bg-backgroundLight md:hover:bg-yellow-200`}
                  data-scroll={`#${index != 0 ? projects[index - 1].id : projects[projects.length - 1].id}`}
                >
                  <IoArrowBackSharp size={20} />
                </Button>
                <Button
                  data-state={index == projects.length - 1 ? "last" : ""}
                  className={`hidden z-50 md:block rounded-full h-30 aspect-square bg-backgroundLight md:hover:bg-yellow-200`}
                  data-scroll={`#${index != projects.length - 1 ? projects[index + 1].id : projects[0].id}`}
                >
                  <IoArrowForwardSharp size={70} />
                </Button>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
