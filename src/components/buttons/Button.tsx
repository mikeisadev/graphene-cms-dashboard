import { forwardRef } from "react";
import { ButtonInterface, HTMLAttrInterface } from "../../@types";

const Button = forwardRef<HTMLButtonElement, ButtonInterface>((props, ref) => {
    const attributes: HTMLAttrInterface = {};
    const icon: React.ReactNode = props.icon ? props.icon : '';
    const text: React.ReactNode = props.children ? props.children : props.text;

    attributes.className = 'transition-[all] ' + (props.className ? props.className : '')

    if (props.type) {
        attributes.className += props.type;
    }

    if (props.link) {
        attributes.href = props.link;
    }

    return (
        !props.link ?
        <button 
            ref={ref}
            onClick={props.onClick}
            {...attributes}
        >{icon}{text}</button>
        :
        <a {...attributes}>{icon}{text}</a>
    )
})

export default Button;