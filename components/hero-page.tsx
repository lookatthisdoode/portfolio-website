import { Button } from "@/components/ui/button";
import { IoArrowForwardSharp } from "react-icons/io5";
import { palanquin, robotoMono } from "@/app/ui/fonts";
import React from "react";

export default function HeroPage({
  scrollDownPage,
}: {
  scrollDownPage: CallableFunction;
}) {
  return (
    <div
      id="bio"
      className={`flex min-h-[100vh] bg-backgroundDark items-center justify-center snap-center relative`}
    >
      <Button
        onClick={(e) => {
          e.preventDefault();
          scrollDownPage();
        }}
        className={`absolute bottom-10 right-32 hidden md:block rounded-full h-30 aspect-square bg-backgroundLight hover:bg-amber-300 [&>svg]:rotate-90 animate-bounce`}
      >
        <IoArrowForwardSharp size={70} />
      </Button>

      <div className={`px-4 text-text md:px-0 md:w-3/5 z-20`}>
        <h2
          className={`${robotoMono.className} text-sm text-gray-300 :pl-3 md:text-2xl`}
        >
          hello, I am
        </h2>
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
  );
}
