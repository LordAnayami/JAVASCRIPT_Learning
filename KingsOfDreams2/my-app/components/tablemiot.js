import classes from "./tablemiot.module.css";

export default function TableMiot({ data }) {
  return (
    <>
      {data && (
        <div className={classes.inside2}>
          <h3 className="text-xl font-bold">{data.name}</h3>

          <p>Data urodzenia: {data.date}</p>

          <h4 className="text-lg font-semibold mt-4">Rodzice:</h4>
          <div className={classes.newdiv}>
            <table className={classes.gridTable}>
              <tbody className={classes.borderTbody}>
                <tr className={classes.tr}>
                  <td className={classes.td}>{data.parents.male.name}</td>
                  <td className={classes.td}>{data.parents.female.name}</td>
                </tr>
                <tr className={classes.tr}>
                  <td className={classes.td}>
                    <img
                      className={classes.zdjecia2}
                      loading="lazy"
                      src={data.parents.male.img}
                      alt={data.parents.male.name}
                    />
                  </td>
                  <td className={classes.td}>
                    <img
                      className={classes.zdjecia2}
                      loading="lazy"
                      src={data.parents.female.img}
                      alt={data.parents.female.name}
                    />
                  </td>
                </tr>
                <tr className={classes.tr}>
                  <td className={classes.td}>
                    Urodzony: {data.parents.male.birth}
                  </td>
                  <td className={classes.td}>
                    Urodzona: {data.parents.female.birth}
                  </td>
                </tr>
                <tr className={classes.tr}>
                  <td className={classes.wideColumn}>
                    Tytuły: {data.parents.male.title}
                  </td>
                  <td className={classes.wideColumn}>
                    Tytuły: {data.parents.female.title}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-lg font-semibold mt-4">Szczeniaki:</h4>

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
                    <strong>Status</strong>
                  </td>
                </tr>
                {Object.values(data.puppies).map((puppy, index) => (
                  <tr key={index}>
                    <td className={classes.td}>{puppy.name}</td>
                    <td className={classes.td}>
                      <img
                        className={classes.zdjecia2}
                        loading="lazy"
                        src={puppy.img}
                        alt={puppy.name}
                        width={300}
                        height={200}
                      />
                    </td>
                    <td className={classes.td}> {puppy.sold}</td>
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
