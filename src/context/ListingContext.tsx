import { useEffect, createContext, useContext, useState } from "react";
import { ListingCtxInterface, ListingProviderProps, ListingProviderState } from "../@types";

const ListingCtx = createContext<ListingCtxInterface | null>(null);

export function useListing() {
    return useContext(ListingCtx);
}

export default function ListingProvider(props: ListingProviderProps) {
    const [listing, setListing] = useState<ListingProviderState>({
        items: {},
        menus: {},
        selectAll: false,
    });  

    /**
     * Select all items in a list.
     */
    function setSelectAll() {
        setListing({...listing, selectAll: !listing.selectAll})
    }
    
    useEffect(() => {
        /**
         * On window scroll maintain the position of the dropdown element.
         */
        let scrollY = window.scrollY
        let scrollX = window.scrollX

        window.addEventListener('scroll', e => {
            e.stopPropagation()
            
            const menu = getOpenedDropdown()
            
            if (menu) {
                const rects = menu.getBoundingClientRect();
            
                menu.style.transform = `translate(${rects.x - (window.scrollX - scrollX)}px, ${rects.y - (window.scrollY - scrollY)}px)`;
            }
        
            scrollY = window.scrollY
            scrollX = window.scrollX
        });
    
        /**
         * On window resize close all opened dropdown menus.
         */
        window.addEventListener('resize', () => {
            const opened = getOpenedDropdown()
        
            if (opened) {
                const listItem = getActiveListItem()

                opened.classList.add('hidden')
                listItem?.querySelector('.actions button')?.classList.remove('active')
                listItem?.classList.remove('active-item')
            }
        })
    }, [])

    /**
     * Close all dropdowns menu instead of one.
     * 
     * @param menu 
     */
    function closeAllDropdownsButOne(menu: HTMLDivElement) {
        const menus = listing.menus

        Object.keys(menus).map(id => {
            const _menu: HTMLDivElement = menus[id];

            if (menu !== _menu) {
                _menu.classList.add('hidden')
            }
        })
    }

    /**
     * Open a dropdown menu.
     * 
     * @param menuId
     * @param triggerBtn 
     * @returns 
     */
    function openDropdown(menuId: string|number, triggerBtn: HTMLButtonElement) {
        const rects = triggerBtn.getBoundingClientRect()
        const menu: HTMLDivElement = getDropdown(menuId);
        const listItem = getListingItem(menuId)

        closeAllDropdownsButOne(menu)

        menu.classList.toggle('hidden')
        listItem.classList.toggle('active-item')
        triggerBtn.classList.toggle('active')

        const Xpos = rects!.x - (menu.clientWidth + 10)

        menu.style.transform = `translate(${Xpos}px, ${rects?.y}px)`
        const overflow = window.innerHeight - menu.getBoundingClientRect().bottom;

        if (overflow < 0) {
            menu.style.transform = `translate(${Xpos}px, ${rects!.y + (overflow - 10)}px)`
        }

        document.addEventListener('click', e => handleCloseDropdown(e, menu, triggerBtn, listItem))

        return document.removeEventListener('click', handleCloseDropdown)
    }

    /**
     * Handle the closing of dropdown menu.
     */
    function handleCloseDropdown(e?: MouseEvent, menu?: HTMLDivElement, triggerBtn?: HTMLButtonElement, listItem?: HTMLTableRowElement) {
        (e as MouseEvent).stopPropagation()

        menu = menu as HTMLDivElement
        triggerBtn = triggerBtn as HTMLButtonElement
            
        if (!menu.contains((e as MouseEvent).target as HTMLDivElement) && !triggerBtn.contains((e as MouseEvent).target as HTMLDivElement)) {
            menu.classList.add('hidden')
            listItem?.classList.remove('active-item')
            triggerBtn.classList.remove('active')
        }
    }

    /**
     * Get the opened dropdown.
     */
    function getOpenedDropdown(): HTMLDivElement|null {
        const menus = listing.menus;
        const ids = Object.keys(menus)

        let opened: null | HTMLDivElement = null

        ids.map((id) => {
            if (!menus[id].classList.contains('hidden')) {
                opened = menus[id]
            }
        })

        return opened;
    }

    /**
     * Get a dropdown menu by id.
     */
    function getDropdown(id: string|number): HTMLDivElement {
        return listing.menus[id];
    }

    /**
     * Set a dropdown menu in the context state.
     * @param menu 
     * @param id 
     */
    function setDropdownMenu(menu: HTMLDivElement, id: string) {
        const menus = listing.menus;
        menus[id] = menu;

        setListing({...listing, menus: menus})
    }

    /**
     * Set the listing item in the context.
     */
    function setListingItem(item: HTMLTableRowElement, id: string) {
        const items = listing.items;
        items[id] = item;

        setListing({...listing, items: items});
    }

    /**
     * Get listing item by id.
     */
    function getListingItem(id: string|number): HTMLTableRowElement {
        return listing.items[id] as HTMLTableRowElement
    }

    /**
     * Get the active list item
     */
    function getActiveListItem(): null|HTMLTableRowElement {
        const items = listing.items;
        const ids = Object.keys(items)

        let opened: null | HTMLTableRowElement = null

        ids.map((id) => {
            if (items[id].classList.contains('active-item')) {
                opened = items[id] as HTMLTableRowElement
            }
        })
        
        return opened;
    }

    return (
        <ListingCtx.Provider value={{...listing, setSelectAll, openDropdown, setDropdownMenu, getDropdown, getOpenedDropdown, closeAllDropdownsButOne, setListingItem, getListingItem}}>
            {props.children}
        </ListingCtx.Provider>
    )
}