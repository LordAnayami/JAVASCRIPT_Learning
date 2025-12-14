"use client";

import { useState, useEffect } from "react";
import classes from "./page.module.css";
import { allMiots } from "@/data/data";
import TableMiot from "@/components/tablemiot";

export default function Page() {
  const [selectedMiot, setSelectedMiot] = useState("");
  const [miotData, setMiotData] = useState(null);

  useEffect(() => {
    if (selectedMiot) {
      setMiotData(allMiots[selectedMiot]);
    }
  }, [selectedMiot]);

  return (
    <div className={classes.inside}>
      <h1 className="text-3xl font-bold">Nasze Szczeniaki</h1>

      <p className={classes.p}>
        W naszej hodowli urodziło się wiele miotów. Pierwszym miotem był miot z
        2018 roku. Szczeniaki urodzone w naszej hodowli są otoczone troską oraz
        odpowiednią opieką weterynaryjną. Od pierwszych godzin życia stale
        obcują z ludźmi oraz innymi psami, dzięki czemu opuszczają hodowlę jako
        psy zrównoważone i wstępnie zsocjalizowane.
      </p>

      <p className={classes.p}>
        Poniżej znajduje się lista miotów w kolejności ich urodzenia. Proszę
        wybrać miot z opcji znajdujących się poniżej.
      </p>

      <select
        className="border p-2 mt-4"
        onChange={(e) => setSelectedMiot(e.target.value)}
        value={selectedMiot}
      >
        <option value="">(Wybierz miot)</option>
        {Object.entries(allMiots).map(([key, miot]) => (
          <option key={key} value={key}>
            {miot.name}
          </option>
        ))}
      </select>

      <TableMiot data={miotData} />
    </div>
  );
}
