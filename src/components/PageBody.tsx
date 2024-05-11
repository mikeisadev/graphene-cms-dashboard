import { PageBodyProps } from "../@types";

export default function PageBody(props: PageBodyProps) {

    return (
        <div className="page-body">
            {props.children}
        </div>
    )
}