import classes from "./tablemiot.module.css";

export default function TableMiot({ data }) {
  return (
    <>
      {data && (
        <div className={classes.inside2}>
          {Object.values(data).map((miot, index) => (
            <div className={classes.inside2} key={index}>
              {" "}
              {/* Dodanie klucza */}
              <h4 className="text-lg font-semibold mt-4">Miot: {miot.name}</h4>
              <h4 className="text-lg font-semibold mt-4">Rodzice: </h4>
              <div className={classes.newdiv}>
                <table className={classes.gridTable}>
                  <tbody className={classes.borderTbody}>
                    <tr className={classes.tr}>
                      <td className={classes.td}>{miot.parents.male.name}</td>
                      <td className={classes.td}>{miot.parents.female.name}</td>
                    </tr>
                    <tr className={classes.tr}>
                      <td className={classes.td}>
                        <img
                          className={classes.zdjecia2}
                          loading="lazy"
                          src={miot.parents.male.img}
                          alt={miot.parents.male.name}
                        />
                      </td>
                      <td className={classes.td}>
                        <img
                          className={classes.zdjecia2}
                          loading="lazy"
                          src={miot.parents.female.img}
                          alt={miot.parents.female.name}
                        />
                      </td>
                    </tr>
                    <tr className={classes.tr}>
                      <td className={classes.td}>
                        Umaszczenie: {miot.parents.male.hair}
                      </td>
                      <td className={classes.td}>
                        Umaszczenie: {miot.parents.female.hair}
                      </td>
                    </tr>
                    <tr className={classes.tr}>
                      <td className={classes.wideColumn}>
                        Tytuły: {miot.parents.male.title}
                      </td>
                      <td className={classes.wideColumn}>
                        Tytuły: {miot.parents.female.title}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
