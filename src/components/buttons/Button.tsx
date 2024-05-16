import { forwardRef } from "react";
import { ButtonInterface, HTMLAttrInterface } from "../../@types";
import { Link } from "react-router-dom";

const Button = forwardRef<HTMLButtonElement, ButtonInterface>((props, ref) => {
    const attributes: HTMLAttrInterface = {};
    const icon: React.ReactNode = props.icon ? props.icon : '';
    const text: React.ReactNode = props.children ? props.children : props.text;

    attributes.className = 'transition-[all] button ' + (props.className ? props.className : '')

    if (props.type) {
        attributes.className += props.type;
    }

    return (
        !props.link ?
        <button 
            ref={ref}
            onClick={props.onClick}
            {...attributes}
        >{icon}{text}</button>
        :
        <Link to={props.link as string} {...attributes}>{icon}{text}</Link>
    )
})

export default Button;