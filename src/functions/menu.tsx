import { useState, useId } from "react";
import { NavMenuProps, MenuLinks, MenuLinksProps } from "../@types";
import { NavLink } from "react-router-dom";

/**
 * Build the navigation menu.
 * 
 * @param menu 
 * @returns 
 */
export function NavMenu(props: NavMenuProps): React.ReactElement {
    return (
        <nav className="nav-links">
            { 
                props.menu.map(menu => {
                    return (
                        <div key={useId()} className="nav-group">
                            {menu.title ? <h6>{menu.title}</h6> : ''}
                            <SingleMenu links={menu.links}/>
                        </div>
                    )
                }) 
            }
        </nav>
    )
}

/**
 * Build the single menu.
 * @param menu 
 * @returns 
 */
function SingleMenu (props: MenuLinksProps) {
    return (
        <ul className={props.isSubmenu ? 'sub-menu' : 'menu'} >
            { props.links.map(link => { return <MenuLink key={useId()} {...link} isSubmenuLink={props.isSubmenu ? true : false} /> }) }
        </ul>
    )
}


/**
 * Build the single menu link.
 * @param link 
 * @returns 
 */
function MenuLink(link: MenuLinks): React.ReactElement {
    const {to, name, icon, isSubmenuLink, sublinks} = link;

    const [opened, setOpened] = useState(false);
    const classes = `${isSubmenuLink ? 'sub-menu-link' : 'menu-link'} ${sublinks ? (opened ? '' : 'closed') : ''}`.trim()
    
    function handleClick(e: React.MouseEvent) {
        if (sublinks) {
            setOpened(!opened)
        }
    }

    return (
        <li className={classes}>
            <NavLink to={to} onClick={handleClick} className={({isActive}) => isActive ? 'active' : ''}>
                <div className="link-inner">
                    {icon ? icon : ''}{name}
                </div>
                {sublinks ? <i className="bi bi-chevron-down"></i> : ''}
            </NavLink>
            {sublinks ? <SingleMenu links={sublinks} isSubmenu={true} /> : ''}
        </li>
    )
}