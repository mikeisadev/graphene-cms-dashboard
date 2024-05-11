import { createPortal } from "react-dom";
import { LayoutProps } from "../@types";
import Wrapper from "./Wrapper";
import { useDashboard } from "../context/DashboardContext";
import { DashboardCtxInterface } from "../@types";
import Loader from "./loader/Loader";

export default function Layout(props: LayoutProps) {
    const { sidebarOpened, isLoading } = useDashboard() as DashboardCtxInterface;

    return (
        <>
            {props.header}
            <div id="main" className={sidebarOpened ? '' : 'sidebar-closed'}>
                {props.sidebar}
                <Wrapper id="workspace" override={true}>
                    <Wrapper classes="page-content" override={true}>
                        {props.router}
                    </Wrapper>
                </Wrapper>
            </div>
            {isLoading && createPortal(<Loader />, document.body)}
        </>
    );
}