import { FunctionComponent } from "react";

export type MainRoute = "Home" | "Database" | "404";

type AppMainProps = {
    route: MainRoute;
};

const AppMain: FunctionComponent<AppMainProps> = ({ route }) => {
    // Beispielhafte Nutzung des 'route'-Props
    return <h1>Current Route: {route}</h1>;
};

export default AppMain;