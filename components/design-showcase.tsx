import React, { useState } from "react";
import Image from "next/image";

export default function DesignShowcase() {
  const images = [
    "/projects-images/graphic-design/GraphicDesign4.png",
    "/projects-images/graphic-design/GraphicDesign2.png",
    "/projects-images/graphic-design/GraphicDesign3.png",
    "/projects-images/graphic-design/GraphicDesign6.png",
    "/projects-images/graphic-design/GraphicDesign5.png",
    "/projects-images/graphic-design/GraphicDesign1.png",
    "/projects-images/graphic-design/GraphicDesign7.png",
  ];
  const [enlargedIndex, setEnlargedIndex] = useState<number | null>(3);

  const handleMouseOver = (index: number) => {
    setEnlargedIndex(index);
  };
  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setEnlargedIndex(index);
  };

  return (
    <>
      {/*<div*/}
      {/*  id="imageShowcasePc"*/}
      {/*  className={`bg-backgroundDark snap-center absolute inset-0 overflow-clip hidden md:flex`}*/}
      {/*>*/}
      {/*  {images.map((url, index) => (*/}
      {/*    <div*/}
      {/*      key={index}*/}
      {/*      onMouseOver={() => handleMouseOver(index)}*/}
      {/*      className={`${*/}
      {/*        enlargedIndex === index ? "grid-large" : "grid-small"*/}
      {/*      } relative`}*/}
      {/*    >*/}
      {/*      <Image*/}
      {/*        src={url}*/}
      {/*        priority={true}*/}
      {/*        alt={`${index} design`}*/}
      {/*        fill*/}
      {/*        className="object-cover"*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}

      <div
        id="imageShowcasePc"
        className={`bg-backgroundDark snap-center absolute inset-0 overflow-clip flex`}
      >
        {images.map((url, index) => (
          <div
            key={index}
            onClick={(e) => handleClick(e, index)}
            className={`${
              enlargedIndex === index ? "grid-large" : "grid-small"
            } relative`}
          >
            <Image
              src={url}
              priority={true}
              alt={`${index} design`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/*<div*/}
      {/*  id="imageShowcaseMobile"*/}
      {/*  className={`snap-x snap-mandatory absolute inset-0 flex overflow-x-scroll md:hidden bg-backgroundDark`}*/}
      {/*>*/}
      {/*  {images.map((url, index) => (*/}
      {/*    <div*/}
      {/*      key={index}*/}
      {/*      onMouseOver={() => handleMouseOver(index)}*/}
      {/*      className={`min-w-full relative snap-center`}*/}
      {/*    >*/}
      {/*      <Image*/}
      {/*        src={url}*/}
      {/*        priority={true}*/}
      {/*        alt={`${index} design`}*/}
      {/*        fill*/}
      {/*        className="object-contain"*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </>
  );
}
