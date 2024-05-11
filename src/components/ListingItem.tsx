import { useRef, useEffect, useId, useState } from "react";
import { ListingCtxInterface, ListingItemProps } from "../@types";
import Button from "./buttons/Button";
import ListingDropdown from "./dropdown/ListingDropdown";
import PopUp from "./popups/PopUp";
import { useListing } from "../context/ListingContext";

export default function ListingItem(props: ListingItemProps) {
    const { id, title, selected, selectItem } = props;

    const [ isDeleting, setIsDeleting ] = useState(false)
    const [ checked, setChecked ] = useState(false)

    /**
     * Listing context.
     */
    const { setListingItem, setDropdownMenu, openDropdown, items, menus } = useListing() as ListingCtxInterface

    /**
     * Generate unique id.
     */
    const listId = useId();

    /**
     * Reference to important elements.
     */
    const listingRef = useRef<HTMLTableRowElement>(null)
    const actionBtnRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    /**
     * Dropdown menu references.
     */
    const deleteItem = useRef<HTMLButtonElement>(null);

    /**
     * On component init, register the dropdown menu in the context.
     */
    useEffect(() => {
        setListingItem(listingRef.current as HTMLTableRowElement, listId)
        setDropdownMenu(dropdownRef.current as HTMLDivElement, listId)
    }, [])

    /**
     * Handle the opening of the dropdown menù
     */
    function handleOpenDropdown(e: React.MouseEvent) {
        openDropdown(listId, actionBtnRef.current as HTMLButtonElement)
    }

    /**
     * Handle item delete.
     */
    function handleItemDelete(e: React.MouseEvent) {
        setIsDeleting(true)
    }

    /**
     * Handle popup methods
     */
    function handlePopUpClose() {
        setIsDeleting(false)
    }

    function forceDeleteItem() {
        listingRef.current?.remove()
        setIsDeleting(false)

        console.log(menus, items)
    }

    return (
        <tr ref={listingRef} className="listing-item">
            <td className="w-min select-item">
                <input type="checkbox" onClick={selectItem} checked={selected} />
            </td>
            <td>
                <p>Item</p>
            </td>
            <td className="actions">
                <Button ref={actionBtnRef} onClick={handleOpenDropdown} icon={<i className="bi bi-three-dots-vertical"></i>}/>
                <ListingDropdown ref={dropdownRef} >
                    <Button icon={<i className="bi bi-box-arrow-up-right"></i>}>View</Button>
                    <Button icon={<i className="bi bi-pencil-square"></i>}>Edit</Button>
                    <div className="divider"></div>
                    <Button ref={deleteItem} icon={<i className="bi bi-trash3"></i>} className="warning" onClick={handleItemDelete}>Delete</Button>
                </ListingDropdown>
                { isDeleting ? <PopUp title="Do you want to delete this item?" close={handlePopUpClose} proceed={forceDeleteItem}/> : '' }
            </td>
        </tr>
    )
}