import classes from "./page.module.css";
import { zapowiedz } from "@/data/data";
import TableParents from "@/components/tableparents";

export const metadata = {
  title: "Zapowiedź miotu",
  description: "Zapowiedź miotu w hodowli Kings of Dreams",
};

export default function Zapowiedz() {
  return (
    <div className={classes.inside}>
      <h1>Mioty</h1>
      <TableParents data={zapowiedz} />
    </div>
  );
}
