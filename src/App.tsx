import { BrowserRouter } from "react-router-dom";

/**
 * Context wrap.
 */
import DashboardProvider from "./context/DashboardContext";

/**
 * Routes.
 */
import routes from "./routes";
import { buildRoutesGroup } from "./functions/routes";

/**
 * Components.
 */
import Layout from "./components/Layout";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

/**
 * Main App. 
 */
export default function App() {
    return (
        <DashboardProvider>
            <BrowserRouter basename="/gp-admin">
                <Layout 
                    header={<Header />}
                    sidebar={<Sidebar />}
                    router={buildRoutesGroup(routes)}
                />
            </BrowserRouter>
        </DashboardProvider>
    );
}