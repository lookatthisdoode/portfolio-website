import React, { useState } from "react";
import Image from "next/image";

export default function DesignShowcase() {
  const images = [
    "https://i.imgur.com/cMien9m.jpeg",
    "https://i.imgur.com/32jMJuM.jpeg",
    "https://i.imgur.com/sc6jhWu.jpeg",
    "https://i.imgur.com/PzOg10v.jpeg",
    "https://i.imgur.com/iJ2mSCm.png",
    "https://i.imgur.com/dbclEjd.jpeg",
  ];
  const [enlargedIndex, setEnlargedIndex] = useState<number | null>(3);

  const handleMouseOver = (index: number) => {
    setEnlargedIndex(index);
  };

  return (
    <>
      <div
        id="imageShowcasePc"
        className={`bg-backgroundDark snap-center absolute inset-0 overflow-clip hidden md:flex`}
      >
        {images.map((url, index) => (
          <div
            key={index}
            onMouseOver={() => handleMouseOver(index)}
            className={`${
              enlargedIndex === index ? "grid-large" : "grid-small"
            } relative`}
          >
            <Image
              src={url}
              alt={`${index} design`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div
        id="imageShowcaseMobile"
        className={`snap-x snap-mandatory absolute inset-0 flex overflow-x-scroll md:hidden bg-backgroundDark`}
      >
        {images.map((url, index) => (
          <div
            key={index}
            onMouseOver={() => handleMouseOver(index)}
            className={`min-w-full relative snap-center`}
          >
            <Image
              src={url}
              alt={`${index} design`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
}
