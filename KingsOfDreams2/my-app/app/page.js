import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.inside}>
      <h1>Strona Główna</h1>
      <br />
      <p>
        Witamy serdecznie na stronie hodowli psów rasowych chińsich grzywaczy
        Kings of Dreams.
      </p>
      <br />
      <p>
        Hodowla Kings of Dreams została założona przez Elżbietę Fiałkowską-Wenta
        w 2012 roku. Pierwszym psem zakupionych do hodowli jest MIGNON z
        Królestwa Motyli z Polski. Jego partnerką została FALVARA SISI
        Milfra-Moravia z Czech. Obecnie w hodowli jest trzech reprodutorów oraz
        pięć suk.
      </p>
      <br />
      <p>
        Nasza hodowla bardzo troszczy się szczeniakami oraz psami znajdującego
        się u nas. Mają opiekę weterynarza, na wysokim poziomie wyżywienie, dużo
        rozrywki oraz od małego przebywają w kontakcie z człowiekiem, ponieważ
        oprócz hodowli prowadzimy hotel dla zwierząt. Staramy się, żeby nasze
        szczeniaki opuszczając hodowlę były zresocjalizowane nie tylko pod kątem
        dużych i małych psów oraz mają towarzystwo innych zwierząt domowych. Od
        małego szczeniaki jeżdzą z nami do miasta, zwiedzają galerie handlowe,
        spacery nad morzem. Dzięki temu, że prowadzimy hotel nasze psy mają
        kontakt nie tylko z ludzmi dorosłymi, ale również z dziećmi w różnym
        wieku. Psy z naszej hodowli są szkolone pod kontem dogoterapii oraz
        pracują z dziećmi autystycznymi.
      </p>
      <br />
      <p>
        Psy będące częścią naszej hodowlii biorą udział w wystawach psów
        rasowych nie tylko w Polske, ale też i zagranicą osiągając przy tym
        różne sukscesy. My cieszymy się z każdych wyników, nie ważne czy są one
        pozytywne czy negatywne.
      </p>
      <br />
      <p>
        Zapraszamy do zapoznania się z nowum{" "}
        <Link href="./obecny_miot">miotem</Link> oraz z resztą informacji na
        stronie.
      </p>
    </div>
  );
}
