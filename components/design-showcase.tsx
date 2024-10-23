import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function DesignShowcase() {
  const images = [
    "/projects-images/graphic-design/GraphicDesign4.png",
    "/projects-images/graphic-design/GraphicDesign2.png",
    "/projects-images/graphic-design/GraphicDesign3.png",
    "/projects-images/graphic-design/GraphicDesign6.png",
    "/projects-images/graphic-design/GraphicDesign5.png",
    "/projects-images/graphic-design/GraphicDesign1.png",
    "/projects-images/graphic-design/GraphicDesign7.png",
    "/projects-images/graphic-design/GraphicDesign2.png",
    "/projects-images/graphic-design/GraphicDesign3.png",
  ];
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mobileImages, setMobileImages] = useState(images);
  const mobileShowcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setExpandedIndex(Math.floor(Math.random() * images.length));
    }, 1000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === mobileShowcaseRef.current) {
              setShowTooltip(true);
            } else if (entry.target === mobileShowcaseRef.current?.lastElementChild) {
              setMobileImages(prevImages => [...prevImages, ...images]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (mobileShowcaseRef.current) {
      observer.observe(mobileShowcaseRef.current);
      const lastImage = mobileShowcaseRef.current.lastElementChild;
      if (lastImage) {
        observer.observe(lastImage);
      }
    }

    return () => observer.disconnect();
  }, [mobileImages]);

  const handleImageClick = (url: string) => {
    if (window.innerWidth <= 768) return;
    setFullscreenImage(url);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      <div
        id="imageShowcasePc"
        className={`snap-center absolute inset-0 overflow-hidden hidden md:grid grid-cols-4 grid-rows-3 gap-2`}
      >
        {images.map((url, index) => {
          const isExpanded = expandedIndex === index;
          let gridClass = "col-span-1 row-span-1";

          // Determine grid class based on index and expanded state
          if (isExpanded) {
            if (index % 4 === 3) {
              // For the rightmost column, expand to the right and down
              gridClass = "col-span-2 row-span-2 col-start-3 row-start-1";
            } else if (index >= 8) {
              // For the bottom row, expand up and to the right
              gridClass = "col-span-2 row-span-2 col-start-1 row-start-2";
            } else {
              // For all other cases, expand normally
              gridClass = "col-span-2 row-span-2";
            }
          }

          return (
            <div
              key={index}
              onClick={() => handleImageClick(url)}
              className={`relative overflow-hidden transition-all duration-300 ease-in-out shadow-xl transform ${gridClass} ${
                isExpanded ? "z-10 scale-100" : "scale-95"
              }`}
            >
              <Image
                src={url}
                priority={true}
                alt={`${index} design`}
                fill
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
      


      <div
        id="imageShowcaseMobile"
        ref={mobileShowcaseRef}
        className={`md:hidden snap-center absolute inset-0 overflow-x-auto flex flex-nowrap`}
      >
        {showTooltip && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full pointer-events-none animate-pulse z-10">
            <p className="text-sm">Swipe -{">"}</p>
          </div>
        )}
        {mobileImages.map((url, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(url)}
            className="flex-shrink-0 w-4/5 h-full pr-4"
          >
            <div className="relative w-full h-full">
              <Image
                src={url}
                priority={index < images.length}
                alt={`${index % images.length} design`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center justify-center"
          onClick={closeFullscreen}
        >
          <div className="relative w-full h-full">
            <Image
              src={fullscreenImage}
              layout="fill"
              objectFit="contain"
              alt="Fullscreen image"
            />
          </div>
        </div>
      )} */}
      {fullscreenImage && createPortal(
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={closeFullscreen}
          style={{ zIndex: 9999 }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <div className="relative w-5/6 h-5/6">
              <Image
                src={fullscreenImage}
                layout="fill"
                objectFit="contain"
                alt="Fullscreen image"
              />
            </div>
            <button
              className="ml-4 bg-white bg-opacity-50 hover:bg-opacity-75 text-black px-4 py-2 rounded-full transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = images.indexOf(fullscreenImage);
                const nextIndex = (currentIndex + 1) % images.length;
                setFullscreenImage(images[nextIndex]);
              }}
            >
              Next
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
