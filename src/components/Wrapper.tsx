import { HTMLAttrInterface, WrapperProps } from "../@types";

export default function Wrapper(props: WrapperProps) {
    const attributes: HTMLAttrInterface = {};

    attributes.className = '';

    if (props.id) {
        attributes.id = props.id;
    }

    if (!props.override) {
        attributes.className = 'wrap';
    }

    if (props.classes) {
        attributes.className += ' ' + props.classes;
    }

    return (
        <div {...attributes}>
            {props.children}
        </div>
    );
}