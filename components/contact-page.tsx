import { palanquin } from "@/app/ui/fonts";
import ContactForm from "@/components/contact-form";
import React from "react";
import Link from "next/link";
import { MdOutlineAlternateEmail as MAILLogo } from "react-icons/md";
import { VscGithub as GHLogo } from "react-icons/vsc";
import { IoDocumentTextOutline as CVLogo } from "react-icons/io5";

export default function ContactPagePopup({
  showGratitudePopup,
}: {
  showGratitudePopup: CallableFunction;
}) {
  return (
    <div
      id="contact"
      className={`relative flex flex-col h-[100vh] bg-backgroundDark text-white items-center justify-center snap-center`}
    >
      <div className={`px-4 md:px-0 w-full md:w-3/5 z-20`}>
        <h1 className={`${palanquin.className} text-[2em] md:text-[4em] pb-5`}>
          Contact me
        </h1>
        <ContactForm gratitude={showGratitudePopup} />
      </div>
      {/* Footer PC */}
      <div
        className={`text-sm absolute bottom-5 hidden md:w-3/5 md:flex flex-col items-start z-20`}
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
            href={"/radchenko_andrii_fullstack.pdf"}
            locale={false}
            download
          >
            {"Download"}
          </Link>
          {" my full CV"}
        </div>
      </div>
      {/* Footer Mobile */}
      <div className={`md:hidden absolute bottom-4 z-20 flex gap-5`}>
        <Link href={"mailto:radchenko.andreii@gmail.com"}>
          <MAILLogo size={25} />
        </Link>
        <Link href={"https://github.com/lookatthisdoode"}>
          <GHLogo size={25} />
        </Link>
        <Link download locale={false} href={"/radchenko_andrii_fullstack.pdf"}>
          <CVLogo size={25} />
        </Link>
      </div>
    </div>
  );
}
