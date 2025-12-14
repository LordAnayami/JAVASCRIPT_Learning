import classes from "./page.module.css";
import { suki1, suki2, suki3 } from "@/data/data";
import TablePets from "@/components/tablepets";

export const metadata = {
  title: "Suki",
  description: "Suki w hodowli Kings of Dreams",
};

export default function Page() {
  return (
    <div className={classes.inside}>
      <h1>Suki W Hodowli</h1>

      <h3>Chińskie Grzywacze:</h3>

      <TablePets data={suki1} />

      <h3>Owczarki Australijskie typ amerykański:</h3>

      <TablePets data={suki2} />

      <h3>Charty Afgańskie:</h3>

      <TablePets data={suki3} />
    </div>
  );
}
