"use client";
import React, { useEffect, useRef, useState } from "react";
import { palanquin, roboto, robotoMono } from "@/app/ui/fonts";
import SweetScroll from "sweet-scroll";
import Nav from "@/components/nav";
import HeroPage from "@/components/hero-page";
import ProjectsPage from "@/components/projects-page";
import ContactPage from "@/components/contact-page";

export default function Home() {
  const scrollableItem = useRef<HTMLDivElement | null>(null);
  const ball = useRef<HTMLDivElement | null>(null);
  const popUp = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState<string>("bio");
  const [popup, setPopup] = useState(false);

  const showGratitudePopup = () => {
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
      // console.log("2000 passed and popup set to close");
      // console.log("setting another timer");
      setTimeout(() => {
        if (popUp.current)
          popUp.current &&
            popUp.current.classList.remove("animate-slide-up", "origin-bottom");
        popUp.current &&
          popUp.current.classList.add("animate-slide-down", "origin-top");
        setPopup(false);
        // console.log(
        //   "300 more passed (just after animation up) and popup set back to open",
        // );
      }, 300);
    }, 2000);
  };

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // In case I need it later
        // entry.target.classList.add("intersecting");
        setCurrentPage(entry.target.id);
        handleBall(entry.target.id); // Log the currently visible page
      } else {
        // entry.target.classList.remove("intersecting");
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

  const scrollDownPage = () => {
    scrollableItem.current?.scrollBy({
      behavior: "smooth",
      top: window.innerHeight,
    });
  };

  useEffect(() => {
    if (scrollableItem.current) {
      SweetScroll.create(
        {
          duration: 200,
          easing: "easeOutCubic",
          horizontal: true,
        },
        "#wrapper",
      );
      return () => {};
    }
  }, []);

  useEffect(() => {
    const bioElement = document.getElementById("bio");
    const workElement = document.getElementById("projects");
    const contactElement = document.getElementById("contact");

    const options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "10px",
      threshold: 0.5,
    };
    // Define observer here
    const observer = new IntersectionObserver(observerCallback, options);

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
      className="snap-mandatory snap-y overflow-y-scroll overflow-x-hidden"
    >
      {/* Nav */}
      <Nav active={currentPage} />
      {/* Ball */}
      <div
        ref={ball}
        className={`w-[500px] h-[500px] z-10 fixed left-0 top-0 duration-300 ease-out rounded-full pointer-events-none`}
      ></div>
      {/* Popup */}
      {popup && (
        <div
          ref={popUp}
          className={`absolute inset-0 bg-emerald-700 flex flex-col items-center justify-center z-50 animate-slide-up origin-bottom ${palanquin.className}`}
        >
          <h1 className={`text-[4em]`}>Thank you!</h1>
          <h1 className={`animate-bounce ${robotoMono.className} font-light`}>
            sending You back up
          </h1>
        </div>
      )}
      <HeroPage scrollDownPage={scrollDownPage} />
      <ProjectsPage />
      <ContactPage showGratitudePopup={showGratitudePopup} />
    </div>
  );
}
