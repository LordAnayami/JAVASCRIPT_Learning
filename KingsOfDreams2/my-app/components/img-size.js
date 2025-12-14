import fs from "fs";
import path from "path";
import sizeOf from "image-size";

export async function getStaticProps(imagePath) {
  // Odczytaj wymiary obrazka
  const dimensions = sizeOf(imagePath);

  return {
    props: {
      imageSrc: imagePath, // Ścieżka do obrazka
      imageWidth: dimensions.width, // Oryginalna szerokość
      imageHeight: dimensions.height, // Oryginalna wysokość
    },
  };
}
