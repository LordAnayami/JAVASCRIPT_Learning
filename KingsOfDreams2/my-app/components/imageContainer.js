"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import classes from "./imageContainer.module.css";

export default function ImageContainer({ imageSrc, css }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  console.log(css);
  useEffect(() => {
    const img = new window.Image(); // Użyj window.Image

    img.src = "." + imageSrc; // Poprawka do ścieżki

    img.onload = () => {
      const originalWidth = img.width;
      const originalHeight = img.height;
      let cssChosen;
      let maxWidth, maxHeight;
      switch (css) {
        case "1":
          maxWidth = 400;
          maxHeight = 300;
          cssChosen = classes.imageContainer;
          break;
        case "2":
          maxWidth = 500;
          maxHeight = 500;
          cssChosen = classes.imageContainer2;
          break;
        default:
          console.log("Nieznany styl css");
          maxWidth = originalWidth;
          maxHeight = originalHeight;
      }

      let scaledWidth = originalWidth;
      let scaledHeight = originalHeight;
      if (originalWidth > maxWidth) {
        scaledWidth = maxWidth;
        scaledHeight = (maxWidth / originalWidth) * originalHeight;
      }
      if (scaledHeight > maxHeight) {
        scaledHeight = maxHeight;
        scaledWidth = (maxHeight / originalHeight) * originalWidth;
      }

      setDimensions({ width: scaledWidth, height: scaledHeight });
    };
  }, [imageSrc, css]);

  let cssChosen;
  switch (css) {
    case "1":
      cssChosen = classes.imageContainer;
      break;
    case "2":
      cssChosen = classes.imageContainer2;
      break;
    default:
      console.log("Nieznany styl css");
  }
  console.log("/public" + imageSrc);
  return (
    <div className={cssChosen}>
      <Image
        src={"/public" + imageSrc} // Poprawka do ścieżki
        layout="responsive"
        width={dimensions.width}
        height={dimensions.height}
        className={classes.responsiveImage}
        alt="Zdjęcie"
      />
    </div>
  );
}
