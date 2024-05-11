import { Link } from "react-router-dom";
import { LinkBoxProps } from "../@types";

export default function LinkBox(props: LinkBoxProps) {
    const { title, description, to, classes, icon } = props;

    return (
        <Link to={to} className={`link-box ${classes ? classes : ''}`}>
            {icon ? <div>{icon}</div> : ''}
            <div className="">
                <h4 className="text-[18px] mb-[5px]">{title}</h4>
                <p className="text-[14px] text-slate-600">{description}</p>
            </div>
        </Link>
    )
}