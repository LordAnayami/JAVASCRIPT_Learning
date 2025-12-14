import Image from "next/image";
import logoImg from "/public/assets/img/logo.png";
import classes from "./logo.module.css";

export default function Logo() {
  return (
    <>
      <Image
        src={logoImg}
        alt="Logo hodowli Kings of Dreams"
        className={classes.image}
        priority
      />
    </>
  );
}
