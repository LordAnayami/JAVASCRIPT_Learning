import classes from "./page.module.css";
import { obecnyMiot } from "@/data/data";
import TableMiot from "@/components/tablemiot";

export const metadata = {
  title: "Obecny Miot",
  description: "Obecny miot hodowli Kings of Dreams",
};

export default function Page() {
  return (
    <div className={classes.inside}>
      <h1>Mioty</h1>
      {obecnyMiot ? (
        Object.entries(obecnyMiot).map(([key, miotData]) => (
          <div key={key}>
            <TableMiot data={miotData} />
          </div>
        ))
      ) : (
        <p>Brak danych o miotach.</p>
      )}
    </div>
  );
}
