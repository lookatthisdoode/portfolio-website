"use client";

import React, { useEffect, useRef, useState } from "react";
import { palanquin, roboto } from "@/app/ui/fonts";
import SweetScroll from "sweet-scroll";
import Nav from "@/components/nav";
import ProjectsSlider from "@/components/projects-slider";
import ContactForm from "@/components/contact-form";
import {Button} from "@/components/ui/button";

export default function Home() {
  const scrollableItem = useRef<HTMLDivElement | null>(null);
  const ball = useRef<HTMLDivElement | null>(null);
  const popUp = useRef<HTMLDivElement | null>(null);
  const [scrolledDown, setScrolledDown] = useState(0);
  const [currentPage, setCurrentPage] = useState<string>("bio");
  const [popup, setPopup] = useState(false)

  const togglePopup = () => {
    setPopup(!popup);
  }

  const showGratitude = () => {
    //Show it (it will pop from bottom)
    setPopup(true);
    // Happens first after 300 ms. Just after
    setTimeout(()=> {
      if (scrollableItem.current) {
        scrollableItem.current.scrollTo({
          top: 0,
          // behavior: "smooth",
        });
      }
      popUp.current && popUp.current.classList.remove('animate-slide-up', 'origin-bottom')
      popUp.current && popUp.current.classList.add('animate-slide-down', 'origin-top')
      console.log('2000 passed and popup set to close')
      console.log('setting another timer')
      setTimeout(() => {
        if (popUp.current)
          popUp.current && popUp.current.classList.remove('animate-slide-up', 'origin-bottom')
        popUp.current && popUp.current.classList.add('animate-slide-down', 'origin-top')
        setPopup(false);
        console.log('300 more passed (just after animation up) and popup set back to open')
      }, 300);

    },2000)


    //After



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
        ball.current.style.transform = `translateX(300px) scale(1.3) translateY(200px)`;
        ball.current.style.backgroundColor = `hsl(var(--background-light)`;
      } else if (page === "projects") {
        ball.current.style.transform = `translateX(1100px) translateY(300px) scale(2.8)`;
        ball.current.style.backgroundColor = `hsl(var(--background-dark)`;
      } else if (page === "contact") {
        let size = ball.current.getBoundingClientRect()
        console.log(size.width / 2);
        ball.current.style.backgroundColor = `hsl(var(--background-light)`;
        ball.current.style.transform = `translateX(10vw) translateY(700px) scale(2)`;
      }
    }
  };

  const handleScroll = () => {
    // if (scrollableItem.current) {
    //   const scrollTop = scrollableItem.current.scrollTop;
    //   const scrollHeight =
    //     scrollableItem.current.scrollHeight -
    //     scrollableItem.current.clientHeight;
    //   const scrolled = (scrollTop / scrollHeight) * 100;
    //   setScrolledDown(scrollTop);
    // }
  };

  useEffect(() => {
    if (scrollableItem.current) {
      scrollableItem.current.addEventListener("scroll", handleScroll);
      SweetScroll.create(
        {
          duration: 1000,
          easing: (_, t, b, c, d, s = 1.70158) =>
              c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
          ,
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
      className=" snap-mandatory snap-y overflow-y-scroll overflow-x-hidden overflow-hidden"
    >
      <Nav active={currentPage} />

      {/* Ball */}
      <div
        ref={ball}
        className={`hidden md:block w-[500px] h-[500px] z-10 absolute left-0 top-0 duration-300 ease-out rounded-full pointer-events-none overflow-hidden`}
      ></div>

      {/* Bio page. */}
      <div
        id="bio"
        className={`flex min-h-[100vh] bg-backgroundDark items-center justify-center snap-center`}
      >
        {/*page content*/}
        <div className={`px-4 md:px-0 md:w-3/5 z-20`}>
          <h1 className={`text-[4em] ${palanquin.className}`}>
            Andrii Radchenko
          </h1>
          <h2 className={`${roboto.className} italic font-light text-[1.5em]`}>
            Javascript developer and freelance graphic designer. I create web
            stuff
          </h2>
        </div>
      </div>

      {/* Projects page. */}
      <div
        id="projects"
        className={`flex flex-col min-h-[100vh] rounded-3xl bg-backgroundLight items-center justify-center snap-center`}
      >
        {/* page content */}
        <div className={`w-full px-3 md:px-0 md:w-3/5 z-20 ${roboto.className}`}>
          <h1 className={`text-[4em] ${palanquin.className}`}>Projects</h1>
          <h2 className={`${roboto.className} italic font-light text-[1.5em]`}>
            I would like to display
          </h2>
        <ProjectsSlider />
        </div>
      </div>

        {popup && <div ref={popUp}
            className={`absolute inset-0 bg-emerald-700 flex flex-col items-center justify-center z-50 animate-slide-up origin-bottom ${palanquin.className}`}>
          <h1 className={`text-[4em]`}>Thank you</h1>
          <h1 className={`animate-bounce`}>Sending You back up</h1>
        </div>}
      {/* Contact */}
      <div
          id="contact"
          className={`flex flex-col min-h-[100vh] bg-backgroundDark text-white items-center justify-center snap-center`}
      >

        <div className={`px-4 md:px-0 w-full md:w-3/5 h-[90vh] z-20 flex flex-col items-start justify-center`}>
          <h1 className={`${palanquin.className} text-[4em] pb-5`}>Contact me</h1>
          <ContactForm gratitude={showGratitude}/>
        </div>

        <div className={`md:w-3/5 z-20 flex flex-col items-start justify-end`}>
          <span className={`z-20`}>Also You could just <span className={`md:text-backgroundDark underline`}>Email me</span></span>
          <span className={`z-20`}>Or <span
              className={`md:text-backgroundDark underline`}>Download</span> my full CV</span>
        </div>
      </div>
    </div>
  );
}
