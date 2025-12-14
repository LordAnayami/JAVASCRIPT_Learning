import Link from "next/link";
import classes from "./listNav.module.css";

export default function listNavs() {
  return (
    <>
      <div className={classes.nav}>
        <ul>
          <li>
            <Link href="/">Strona Główna</Link>
          </li>
          <li>
            <Link href="/rasy">Opis Ras</Link>
          </li>
          <li>
            <Link href="/psy">Psy</Link>
          </li>
          <li>
            <Link href="/suki">Suki</Link>
          </li>
          {/* <li>
            <Link href="/obecny_miot">Szczeniaki na sprzedarz</Link>
          </li> */}
          <li>
            <Link href="/nasze_psy">Mioty</Link>
          </li>
          {/* <li>
            <Link href="/zapowiedz">Zapowiedz miotów</Link>
          </li> */}
          <li>
            <Link href="/archiwum">Archiwum</Link>
          </li>
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
