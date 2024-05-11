import { createContext, useContext, useState } from "react";
import { DashboardProviderProps, DashboardCtxInterface, DashboardProviderState } from "../@types";

// Dashboard ctx.
const DashboardCtx = createContext<DashboardCtxInterface | null>(null);

// Dashboard hooks
export function useDashboard() {
    return useContext(DashboardCtx);
}

// Dashboard context provider.
function DashboardProvider(props: DashboardProviderProps): React.ReactNode {
    // Initial state.
    const [dashboard, setDashboard] = useState<DashboardProviderState>({
        darkTheme: false,
        sidebarOpened: true,
        isLoading: false
    });

    // Change the set of dark theme.
    function toggleDarkTheme() {
        setDashboard({...dashboard, darkTheme: !dashboard.darkTheme})
    }

    // Change the set of opening of the sidebar.
    function toggleSidebar() {
        setDashboard({...dashboard, sidebarOpened: !dashboard.sidebarOpened})
    }

    // Toggle is loading state of the dashboard.
    function toggleLoading(bool: boolean) {
        setDashboard({...dashboard, isLoading: bool})
    }

    return (
        <DashboardCtx.Provider value={{...dashboard, toggleDarkTheme, toggleSidebar, toggleLoading}}>
            {props.children}
        </DashboardCtx.Provider>
    )
}

export default DashboardProvider;