import { FunctionComponent } from "react";

type AppMainProps = {};

const Imprint: FunctionComponent<AppMainProps> = ({}) => {
  return (
    <>
      <h1>Impressum</h1>
      <p>
        Robin Fabian Alexander Kindler
        <br />
        Kernerstra&szlig;e 13
        <br />
        71106 Magstadt
      </p>
      <h2>Kontakt</h2>
      <p>
        Telefon: 071594590821
        <br />
        E-Mail: robin.kindler@iu-akademie.de
      </p>
      <h2>Redaktionell verantwortlich</h2>
      <p>Robin Fabian Alexander Kindler</p>
      <p>
        Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
      </p>
    </>
  );
};

export default Imprint;
