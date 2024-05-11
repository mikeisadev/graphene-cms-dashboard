import { forwardRef } from "react"
import { ListingDropdownProps } from "../../@types";
import { createPortal } from "react-dom";

const ListingDropdown = forwardRef<HTMLDivElement, ListingDropdownProps>((props, ref) => {
    return createPortal(
        <div ref={ref} className="listing-dropdown hidden">
            {props.children}
        </div>, (document.querySelector('#portals') as Element)
    )
});

export default ListingDropdown;