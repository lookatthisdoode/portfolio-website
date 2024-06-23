import Image from "next/image";
import React from "react";
import { palanquin } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";

export default function ProjectsSlider() {
  const projects = [
    {
      name: "Vitalina",
      id: "vitalina",
      bio: "Work in process project of mine. It was build with Vite as 3 part application. Github pages for frontend, custom api featuring basic cms, running on heroku and Atlas Mongo DB.  real time content updates, saveable cart.",
      image_url:
        "/projects-images/vitalina.png",
    },
    {
      name: "The Nomad Kitchen",
      id: "nomad",
      bio: "Web site for a restaurant. Next.js for front and backend. Coolest thing about it is that it has a whole content management system that creates, retrieves and updates items stored on database.    oh and that parallax on scroll in mobile version.",
      image_url:
        '/projects-images/nomad.png',
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
    },
  ];

  const config = {
    snap: "center",
  };

  return (
    <div
      id="wrapper"
      className={`flex md:gap-10 overflow-x-hidden z-20 w-full`}
    >
      {projects.map((item, index) => {
        return (
          <section
            key={index + "project"}
            id={item.id}
            className={`flex flex-col md:flex-row gap-7 items-start min-w-full relative py-5`}
          >
            <div className={`w-full md:w-3/5 aspect-video relative `}>
              <Image
                className={"object-cover"}
                src={item.image_url}
                fill
                alt={item.name + " Project"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              />
            </div>
            <div
              className={`md:w-2/5 min-h-[300px] flex flex-col gap-7 items-start justify-between py-2`}
            >
              <h1 className={`text-2xl ${palanquin.className}`}>{item.name}</h1>
              <p>{item.bio}</p>
              <Button
                variant={"outline"}
                className={`bg-backgroundDark w-full md:w-auto`}
                data-scroll={`#${index != projects.length - 1 ? projects[index + 1].id : "vitalina"}`}
              >
                Next
              </Button>
            </div>
          </section>
        );
      })}
    </div>
  );
}
