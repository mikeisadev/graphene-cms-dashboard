import { PageHeaderProps } from "../@types";

export default function PageHeader(props: PageHeaderProps) {

    return (
        <div className="page-header">
            {props.children}
        </div>
    )
}