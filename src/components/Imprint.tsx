import { FunctionComponent } from "react";

type AppMainProps = {};

const Imprint: FunctionComponent<AppMainProps> = () => {
  return (
    <div className="container my-0 my-xl-5">
      <h1>
        Impressum
        <br />
        <br />
      </h1>
      <h3>Anschrift</h3>
      <p>
        Robin Fabian Alexander Kindler
        <br />
        Kernerstra&szlig;e 13
        <br />
        71106 Magstadt
      </p>
      <h3>Kontakt</h3>
      <p>
        Telefon: 071594590821
        <br />
        E-Mail: robin.kindler@iu-akademie.de
      </p>
      <h3>Redaktionell verantwortlich</h3>
      <p>Robin Fabian Alexander Kindler</p>
      <p>
        Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
      </p>
    </div>
  );
};

export default Imprint;
