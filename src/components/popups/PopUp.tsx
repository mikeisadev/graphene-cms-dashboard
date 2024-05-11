import { useRef } from "react";
import { PopUpProps } from "../../@types";
import { createPortal } from "react-dom";
import { forwardRef } from "react";
import Button from "../buttons/Button";

const PopUp = forwardRef<HTMLDivElement, PopUpProps>( (props, ref) => {
    const { title, description, close, proceed } = props;

    return createPortal(
        <div ref={ref} className="popup-wrap">
            <div className="popup-overlay" onClick={close}></div>
            <div className="popup">
                <div className="popup-header">
                    <h1>{title}</h1>
                </div>
                <div className="popup-body">
                    <div className="desc">
                        {description}
                    </div>
                    <div className="actions">
                        <Button className="secondary-btn" onClick={close}>Cancel</Button>
                        <Button className="primary-btn" onClick={proceed}>Confirm</Button>
                    </div>
                </div>
            </div>
        </div>, document.body.querySelector('#portals') as Element
    )
})

export default PopUp;