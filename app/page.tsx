"use client";

import React, { useEffect, useRef, useState } from "react";
import { palanquin, roboto, robotoMono } from "@/app/ui/fonts";
import SweetScroll from "sweet-scroll";
import Nav from "@/components/nav";
import ProjectsSlider from "@/components/projects-slider";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { IoArrowForwardSharp } from "react-icons/io5";
import DesignShowcase from "@/components/design-showcase";
import Link from "next/link";
import { VscGithub as GHLogo } from "react-icons/vsc";
import { IoDocumentTextOutline as CVLogo } from "react-icons/io5";
import { MdOutlineAlternateEmail as MAILLogo } from "react-icons/md";

export default function Home() {
  const scrollableItem = useRef<HTMLDivElement | null>(null);
  const ball = useRef<HTMLDivElement | null>(null);
  const popUp = useRef<HTMLDivElement | null>(null);
  const [scrolledDown, setScrolledDown] = useState(0);
  const [currentPage, setCurrentPage] = useState<string>("bio");
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  const showGratitude = () => {
    //Show it (it will pop from bottom)
    setPopup(true);
    // Happens first after 300 ms. Just after
    setTimeout(() => {
      if (scrollableItem.current) {
        scrollableItem.current.scrollTo({
          top: 0,
        });
      }
      popUp.current &&
        popUp.current.classList.remove("animate-slide-up", "origin-bottom");
      popUp.current &&
        popUp.current.classList.add("animate-slide-down", "origin-top");
      console.log("2000 passed and popup set to close");
      console.log("setting another timer");
      setTimeout(() => {
        if (popUp.current)
          popUp.current &&
            popUp.current.classList.remove("animate-slide-up", "origin-bottom");
        popUp.current &&
          popUp.current.classList.add("animate-slide-down", "origin-top");
        setPopup(false);
        console.log(
          "300 more passed (just after animation up) and popup set back to open",
        );
      }, 300);
    }, 2000);
  };

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("intersecting");
        setCurrentPage(entry.target.id);
        handleBall(entry.target.id); // Log the currently visible page
      } else {
        entry.target.classList.remove("intersecting");
      }
    });
  };

  const handleBall = (page: string) => {
    if (ball.current) {
      if (page === "bio") {
        ball.current.style.transform = `translateX(20vw) scale(1.3) translateY(20vh)`;
        ball.current.style.backgroundColor = `hsl(var(--background-light)`;
      } else if (page === "projects") {
        ball.current.style.transform = `translateX(50vw) translateY(400px) scale(2.2)`;
        ball.current.style.backgroundColor = `hsl(var(--background-dark)`;
      } else if (page === "contact") {
        let size = ball.current.getBoundingClientRect();
        console.log(size.width / 2);
        ball.current.style.backgroundColor = `hsl(var(--background-light)`;
        ball.current.style.transform = `translateX(10vw) translateY(700px) scale(1.8)`;
      }
    }
  };

  const handleScroll = () => {
    if (scrollableItem.current) {
      const scrollTop = scrollableItem.current.scrollTop;
      const scrollHeight =
        scrollableItem.current.scrollHeight -
        scrollableItem.current.clientHeight;
      const scrolledPercetage = (scrollTop / scrollHeight) * 100;
      // setScrolledDown(scrollTop);
    }
  };

  useEffect(() => {
    if (scrollableItem.current) {
      scrollableItem.current.addEventListener("scroll", handleScroll);
      SweetScroll.create(
        {
          duration: 1000,
          easing: "easeOutCubic",
          horizontal: true,
        },
        "#wrapper",
      );
      return () => {
        if (scrollableItem.current) {
          scrollableItem.current.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, []);

  useEffect(() => {
    const bioElement = document.getElementById("bio");
    const workElement = document.getElementById("projects");
    const contactElement = document.getElementById("contact");
    // document.addEventListener("DOMContentLoaded", () => {
    // });

    const options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "10px",
      threshold: 0.5,
    };
    // Define observer here
    const observer = new IntersectionObserver(callback, options);

    if (bioElement) observer.observe(bioElement);
    if (workElement) observer.observe(workElement);
    if (contactElement) observer.observe(contactElement);

    return () => {
      if (bioElement) observer.unobserve(bioElement);
      if (workElement) observer.unobserve(workElement);
      if (contactElement) observer.unobserve(contactElement);
    };
  }, []);

  return (
    <div
      id="scrollArea"
      ref={scrollableItem}
      className="snap-mandatory snap-y overflow-y-scroll overflow-x-hidden overflow-hidden"
    >
      <Nav active={currentPage} />

      {/* Ball */}
      <div
        ref={ball}
        className={`transform-gpu w-[500px] h-[500px] z-10 absolute left-0 top-0 duration-300 ease-out rounded-full pointer-events-none overflow-hidden`}
      ></div>

      {/* Bio page. */}
      <div
        id="bio"
        className={`flex min-h-[100vh] bg-backgroundDark items-center justify-center snap-center relative`}
      >
        <Button
          onClick={(e) => {
            e.preventDefault();
            scrollableItem.current?.scrollBy({
              behavior: "smooth",
              top: window.innerHeight,
            });
          }}
          className={`absolute bottom-10 right-32 hidden md:block rounded-full h-30 aspect-square bg-backgroundLight hover:bg-amber-300 [&>svg]:rotate-90 animate-bounce`}
        >
          <IoArrowForwardSharp size={70} />
        </Button>

        <div className={`px-4 text-text md:px-0 md:w-3/5 z-20`}>
          <h1 className={`md:text-7xl text-3xl py-2 ${palanquin.className}`}>
            Andrii Radchenko
          </h1>
          <h2
            className={`${robotoMono.className} text-sm text-gray-300 :pl-3 md:text-2xl`}
          >
            javascript developer and freelance graphic designer based in Brno
          </h2>
        </div>
        {/*  End of page 1 */}
      </div>

      {/* Projects page. */}
      <div
        id="projects"
        className={`flex flex-col h-[100vh] bg-backgroundLight items-center justify-center snap-center overflow-clip`}
      >
        {/* page content */}
        <div
          className={`md:h-[60vh] w-full px-3 md:px-0 md:w-3/5 z-20 text-text`}
        >
          <h1
            className={`md:text-7xl text-backgroundDark  text-3xl py-2 ${palanquin.className}`}
          >
            Projects
          </h1>
          <h2
            className={`${robotoMono.className} text-sm text-gray-600 md:pl-3 md:text-2xl`}
          >
            I would like to display
          </h2>
          <ProjectsSlider />
        </div>
      </div>

      {popup && (
        <div
          ref={popUp}
          className={`absolute inset-0 bg-emerald-700 flex flex-col items-center justify-center z-50 animate-slide-up origin-bottom ${palanquin.className}`}
        >
          <h1 className={`text-[4em]`}>Thank you</h1>
          <h1 className={`animate-bounce ${robotoMono.className}`}>
            sending You back up
          </h1>
        </div>
      )}
      {/* Contact */}
      <div
        id="contact"
        className={`relative flex flex-col min-h-[100dvh] bg-backgroundDark text-white items-center justify-center snap-center`}
      >
        <div
          className={`h-[60vh] px-4 md:px-0 w-full md:w-3/5 z-20 flex flex-col items-start justify-center`}
        >
          <h1
            className={`${palanquin.className} text-[2em] md:text-[4em] pb-5`}
          >
            Contact me
          </h1>
          <ContactForm gratitude={showGratitude} />
        </div>

        {/* pc */}
        <div
          className={`text-sm hidden md:w-3/5 absolute bottom-5 z-20 md:flex flex-col items-start justify-end`}
        >
          <div>
            {"Also You could just "}
            <Link
              className={`text-backgroundDark underline`}
              href={"mailto:radchenko.andreii@gmail.com"}
            >
              {"Email Me"}
            </Link>
          </div>
          <div>
            {"Check my other projects on "}
            <Link
              className={`text-backgroundDark underline`}
              href={"https://github.com/lookatthisdoode"}
            >
              {"GitHub"}
            </Link>
          </div>
          <div>
            {"Or "}
            <Link
              className={`text-backgroundDark underline`}
              href={"/andrii_radchenko_cv.pdf"}
              locale={false}
              download
            >
              {"Download"}
            </Link>
            {" my full CV"}
          </div>
        </div>

        {/* mobile */}
        <div
          className={`md:hidden absolute bottom-5 z-20 flex w-full justify-center gap-5 py-2 `}
        >
          <Link href={"mailto:radchenko.andreii@gmail.com"}>
            <MAILLogo size={25} />
          </Link>
          <Link href={"https://github.com/lookatthisdoode"}>
            <GHLogo size={25} />
          </Link>
          <Link download locale={false} href={"/andrii_radchenko_cv.pdf"}>
            <CVLogo size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}
