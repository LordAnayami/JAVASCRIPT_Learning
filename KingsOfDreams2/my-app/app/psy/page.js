import classes from "./page.module.css";
import { psy1, psy2 } from "@/data/data";
import TablePets from "@/components/tablepets";

export const metadata = {
  title: "Repreduktorzy",
  description: "Repreduktorzy hodowli Kings of Dreams",
};

export default function Page() {
  return (
    <div className={classes.inside}>
      <h1>Reprodutorzy W Hodowli</h1>

      <h3>Chińskie Grzywacze:</h3>

      <TablePets data={psy1} />

      <h3>Owczarki Australijskie typ amerykański:</h3>

      <TablePets data={psy2} />
    </div>
  );
}
