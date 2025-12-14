import classes from "./tablepets.module.css";

export default function TablePets({ data }) {
  return (
    <>
      {data && (
        <div className={classes.inside2}>
          <div className={classes.newdiv}>
            <table className={classes.gridTable}>
              <tbody className={classes.borderTbody}>
                <tr className={classes.tr}>
                  <td className={classes.td}>
                    <strong>Imię i Przydomek</strong>
                  </td>
                  <td className={classes.td}>
                    <strong>Obraz</strong>
                  </td>
                  <td className={classes.td}>
                    <strong>Data Urodzenia</strong>
                  </td>
                  <td className={classes.td}>
                    <strong>Tytuły</strong>
                  </td>
                </tr>
                {Object.values(data).map((pet, index) => (
                  <tr key={index} className={classes.tr}>
                    <td className={classes.wideColumn}>{pet.name}</td>
                    <td className={classes.td}>
                      <img
                        className={classes.zdjecia2}
                        loading="lazy"
                        src={pet.img}
                        alt={pet.name}
                      />
                    </td>
                    <td className={classes.td}> {pet.birth}</td>
                    <td className={classes.td}> {pet.title || "Brak"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
