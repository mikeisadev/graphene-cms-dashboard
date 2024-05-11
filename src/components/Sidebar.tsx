import menu from "../menu";
import { NavMenu } from "../functions/menu";

export default function Sidebar() {
    return (
        <div id="sidebar">
            <div className="py-5">
                <NavMenu menu={menu}/>
            </div>
        </div>
    );
}