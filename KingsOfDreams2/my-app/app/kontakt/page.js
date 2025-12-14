import React from "react";
import classes from "./page.module.css";

export const metadata = {
  title: "Kontakt",
  description: "Kontakt Kings of Dreams",
};

export default function Kontakt() {
  return (
    <>
      <div className={classes.inside}>
        <h1>Kontakt</h1>
        <br />
        <p>
          <strong>Adres:</strong> Rybacka 10, 76-200 Siemianice
        </p>
        <br />
        <p>
          <strong>Email:</strong> mignon92@interia.pl
        </p>
        <br />
        <p>
          <strong>Telefon:</strong> +48 882 186 997 / +48 735 962 608
        </p>
        <br />
        <p>
          <strong>Facebook:</strong>{" "}
          <a href="https://www.facebook.com/mignon.zkm">
            Profil Elżbieta Fiałkowska-Wenta
          </a>
        </p>
      </div>
    </>
  );
}
