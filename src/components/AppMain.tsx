import { FunctionComponent } from "react";
import { AppRoute } from "./routes";

type AppMainProps = {
    route: AppRoute;
};

const mainSectionStyle: React.CSSProperties = {
    backgroundColor: "lightskyblue",
    height: "100%"
} 

const AppMain: FunctionComponent<AppMainProps> = ({ route }) => {
    return (
        <main style={mainSectionStyle}>
            <h1>Current Route: {route}</h1>
        </main>
    )
};

export default AppMain;