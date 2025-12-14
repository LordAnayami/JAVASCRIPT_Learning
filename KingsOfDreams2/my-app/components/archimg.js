import classes from "./archimg.module.css";

export default function archImg({ src, className }) {
  let classImg = "";
  switch (className) {
    case "zdjecia2":
      classImg = classes.zdjecia2;
      break;
    case "zdjecia":
      classImg = classes.zdjecia;
      break;
    default:
      classImg = "Nieprawidłowa klasa zdjęcia";
  }

  return (
    <>
      <img className={classImg} src={src} loading="lazy" />
      <br />
    </>
  );
}
