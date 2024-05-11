import { ContentBoxProps } from "../@types";

export default function ContentBox(props: ContentBoxProps) {
    
    return (
        <div className="content-box">
            {props.children}
        </div>
    )
}