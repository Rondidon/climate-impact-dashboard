import { FunctionComponent } from "react";

export type MainRoute = "Home" | "Database" | "404";

type AppMainProps = {
    route: MainRoute;
};

const mainSectionStyle: React.CSSProperties = {
    backgroundColor: "lightskyblue",
    height: "100%"
} 

const AppMain: FunctionComponent<AppMainProps> = ({ route }) => {
    // Beispielhafte Nutzung des 'route'-Props
    return (
        <main style={mainSectionStyle}>
            <h1>Current Route: {route}</h1>
        </main>
    )
};

export default AppMain;