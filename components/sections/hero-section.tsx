import React from "react";
import Image from "next/image";
import { CaptainCrateSvg } from "../elements/svg";

interface HeroSectionProps {
  className?: string;
  title: string;
  image: string;
  mobileImage?: string;
  logoColor?: string;
}

export function HeroSection({
  className = "text-purple-dark",
  title,
  image,
  mobileImage = image,
  logoColor = "text-purple-dark",
}: React.PropsWithChildren<HeroSectionProps>): JSX.Element {
  const [imageHeight, setImageHeight] = React.useState(560);
  const [imageWidth, setImageWidth] = React.useState(1200);
  const mobileImageRef = React.useRef<HTMLDivElement>();
  const desktopImageRef = React.useRef<HTMLDivElement>();

  const handleImageLoad = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    setImageHeight(event.currentTarget.height);
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (mobileImageRef.current.clientHeight) {
        setImageHeight(mobileImageRef.current.clientHeight);
      } else if (desktopImageRef.current.clientHeight) {
        setImageHeight(desktopImageRef.current.clientHeight - 100);
        setImageWidth(desktopImageRef.current.clientWidth - 100);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{ height: imageHeight }}
      className={`${className} px-20 pt-0 relative mb-10 z-10 flex items-center`}
    >
      <div
        className="absolute left-0 md:left-10 right-0 md:right-10 top-4 md:top-10"
        style={{ height: imageHeight }}
      >
        <div className="sm:hidden" ref={mobileImageRef}>
          <Image
            src={mobileImage}
            layout="responsive"
            width={457}
            height={490}
            onLoad={(event) => handleImageLoad(event)}
            alt=""
          />
        </div>
        <div
          className="hidden sm:flex justify-center items-center -mt-3 relative mx-auto"
          ref={desktopImageRef}
          style={{ width: imageWidth }}
        >
          <CaptainCrateSvg
            width={24}
            variant="head-only"
            className={`${logoColor} ml-3 -mt-3 hidden sm:block absolute top-2 left-0`}
          />
          <h1
            className={`font-bold text-3xl absolute z-20 top-8 left-8 ${
              logoColor === "text-purple-dark"
                ? "text-white"
                : "text-purple-dark"
            }`}
            style={{ maxWidth: 1200 }}
          >
            {title}
          </h1>
          <Image
            src={image}
            layout="intrinsic"
            width={1200}
            height={521.6}
            onLoad={(event) => handleImageLoad(event)}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
