import Image from "next/image";
import React from "react";
import {palanquin, roboto} from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";
import { IoArrowForwardSharp } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

export default function ProjectsSlider() {
  const projects = [
    {
      name: "Vitalina",
      id: "vitalina",
      bio: "Work in process project of mine. It was build with Vite as 3 part application. Github pages for frontend, custom api featuring basic cms, running on heroku and Atlas Mongo DB.  real time content updates, saveable cart.",
      image_url:
        "/projects-images/vitalina.png",
      demo:'https://lookatthisdoode.github.io/accessories-store-vite/',
      repo: "https://github.com/lookatthisdoode/accessories-store-vite"
    },
    {
      name: "The Nomad Kitchen",
      id: "nomad",
      bio: "Web site for a restaurant. Next.js for front and backend. Coolest thing about it is that it has a whole content management system that creates, retrieves and updates items stored on database.    oh and that parallax on scroll in mobile version.",
      image_url:
        '/projects-images/nomad.png',
      demo: 'https://thenomadkitchen.vercel.app/',
      repo: 'https://github.com/lookatthisdoode/thenomadkitchen',
    },
    {
      name: "Project Noodle Run",
      id: "noodle",
      bio: "Little indie game we have been workin on. Downhill racing with godot engine. Currently stuck on AI for opponents.    eurobeat intensifies.",
      image_url:
        "/projects-images/noodle.png",
    },
    {
      name: "Clarence 2.0",
      id: "clarence",
      bio: "Revival of the clarence 1.0 discord audio player. Can connect to your discord channel and play music or podcasts. Has all basic player features like play/skip and also search from popular apis. Used Discord.js and discord-player libraries.    just been sitting there, half dead, eating through my heroku balance.z",
      image_url:
        "/projects-images/clarence.png",
      repo: 'https://github.com/lookatthisdoode/clarence-2-0'
    },
  ];

  const config = {
    snap: "center",
  };

  return (
    <div
      id="wrapper"
      className={`flex md:gap-10 overflow-hidden z-20 w-full`}
    >
      {projects.map((item, index) => {
        return (
          <section
            key={index + "project"}
            id={item.id}
            className={`flex flex-col md:flex-row md:gap-7 items-start min-w-full md:py-5`}

          >
            {/* Image Button*/}
            <div className={`w-full md:w-3/5 aspect-video relative`}>
              <Image
                className={"object-cover -z-10"}
                src={item.image_url}
                fill
                alt={item.name + " Project"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              />
              <Button data-state={index == projects.length -1 ? "last" : ""}
                      className={`top-[100px] md:hidden absolute right-5 rounded-full h-14 aspect-square bg-backgroundLight opacity-90 hover:bg-amber-300 [&[data-state=last]>svg]:rotate-180`}
                      data-scroll={`#${index != projects.length - 1 ? projects[index + 1].id : "vitalina"}`}
              >
                <IoArrowForwardSharp size={20} />
              </Button>
            </div>

            {/* Name Links Bio Button */}
            <div
              className={`md:w-2/5 h-full py-2 flex flex-col items-start justify-between`}
            >
              {/* Name */}
              <div className={`gap-2 flex-col flex`}>
                <h1 className={`text-3xl ${palanquin.className} `}>
                  {item.name}
                </h1>

                {/* Bio */}
                <div className={`text-sm ${roboto.className} text-slate-200`}>
                  {item.bio}
                </div>

                {/* Links */}
                <div className={`links text-sm ${roboto.className} italic text-yellow-200`}>
                  {item.demo &&
                      <Link href={item.demo} className={`flex gap-2 hover:text-yellow-400 `}>
                        Demo
                      <FiExternalLink size={17} className={`translate-y-[2px]`}/>
                    </Link>}
                  {item.repo &&
                      <Link href={item.repo} className={`flex gap-2 hover:text-yellow-400`}>
                        Github Repo
                        <FiExternalLink size={17} className={`translate-y-[2px]`}/>
                      </Link>}

                </div>
              </div>

              {/* PC button */}
              <Button data-state={index == projects.length - 1 ? "last" : ""}
                      className={`hidden md:block rounded-full h-30 aspect-square bg-backgroundLight hover:bg-amber-300 [&[data-state=last]>svg]:rotate-180`}
                data-scroll={`#${index != projects.length - 1 ? projects[index + 1].id : "vitalina"}`}
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
