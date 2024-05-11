import { Link } from "react-router-dom"
import Wrapper from "./Wrapper"
import { useDashboard } from "../context/DashboardContext"
import Button from "./buttons/Button";
import { DashboardCtxInterface } from "../@types";

export default function Header() {
    const {toggleSidebar} = useDashboard() as DashboardCtxInterface;

    return (
        <div id="header">
            <Wrapper classes="px-[1.5rem] py-4 h-full" override={true}>
                <div>
                    <Button onClick={toggleSidebar}>
                        <i className="bi bi-list"></i>
                    </Button>
                    <Link to='/dashboard'>
                        <span>Graphene</span>
                    </Link>
                </div>
                <div>

                </div>
                <div>

                </div>
            </Wrapper>
        </div>
    )
}