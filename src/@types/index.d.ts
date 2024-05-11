/**
 * An interface for react components with childrens ones.
 */
interface WithChildrens {
    children?: React.ReactNode | React.ReactNode[];
}

/**
 * Dashboard context interface.
 */
export interface DashboardCtxInterface extends DashboardProviderState {
    toggleDarkTheme: () => void;
    toggleSidebar: () => void;
    toggleLoading: (bool: boolean) => void;
}

export interface DashboardProviderState {
    darkTheme: boolean;
    sidebarOpened: boolean;
    isLoading: boolean;
}

export interface DashboardProviderProps extends WithChildrens {}

/**
 * Listing context.
 */
export interface ListingCtxInterface extends ListingProviderState {
    openDropdown: (menuId: string|number, triggerBtn: HTMLButtonElement) => void;
    getDropdown: (menuId: string|number) => HTMLDivElement;
    getOpenedDropdown: () => null|HTMLDivElement;
    closeAllDropdownsButOne: (menu: HTMLDivElement) => void;
    setDropdownMenu: (menu: HTMLDivElement, id: string) => void;
    setListingItem: (item: HTMLTableRowElement, id: string) => void;
    getListingItem: (id: string|number) => void;
}

export interface ListingProviderState {
    items: HTMLObject;
    menus: HTMLObject;
}

type HTMLObject = {[key:string]: HTMLDivElement}

export interface ListingProviderProps extends WithChildrens {}

/**
 * Posts list props.
 */
export interface PostsListProps {
    postType?: string;
    title?: string; 
    description?: string;
}

/**
 * Layout component interface.
 */
export interface LayoutProps {
    header: React.ReactNode;
    sidebar: React.ReactNode;
    router: React.ReactNode;
}

/**
 * Wrapper component interface.
 */
export interface WrapperProps extends WithChildrens {
    classes?: string;
    id?: string;
    override?: boolean;
}

/**
 * Routes array interface
 */
export interface RoutesInterface {
    path: string;
    element: React.ReactNode;
    index?: boolean;
    children?: RoutesInterface[];
    loader?: () => void;
    action?: () => void;
}

/**
 * Menu interface and menu link type.
 */
export interface NavMenuProps {
    menu: MenuLinksProps[];
}

export interface MenuLinksProps {
    title?: string | false;
    isSubmenu?: boolean;
    links: MenuLinks[];
}

type MenuLinks = {
    to: string;
    name: string;
    icon?: React.ReactElement;
    isSubmenuLink?: boolean;
    sublinks?: MenuLinks[];
}

/**
 * Button props.
 */
export interface ButtonInterface extends React.HTMLAttributes<HTMLElement> {
    ref: HTMLButtonElement;
    text?: string;
    icon?: React.ReactNode;
    link?: string;
    type?: string;
    children?: React.ReactNode | React.ReactNode[];
}

export interface DropdownBtnProps extends React.HTMLAttributes<HTMLElement> {
    text?: string;
    icon?: React.ReactNode;
    dropdownIcon?: React.ReactNode;
    type?: string;
}

/**
 * Generic div element interface.
 */
export interface HTMLAttrInterface extends React.HTMLAttributes<HTMLElement> {
    href?: string;
}

/**
 * Page header props.
 */
export interface PageHeaderProps extends WithChildrens {}

/**
 * Page body props.
 */
export interface PageBodyProps extends WithChildrens {}

/**
 * Content box props.
 */
export interface ContentBoxProps extends WithChildrens {}

/**
 * Link box props.
 */
export interface LinkBoxProps {
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    to: string;
    classes?: string;
}

/**
 * Listing interface.
 */
export interface ListingProps {
    data: Array<Object>;
}

/**
 * Listing item.
 */
export interface ListingItemProps {
    id?: string|number;
    title?: string|number;
}

/** 
 * Listing dropdown
 */
export interface ListingDropdownProps extends WithChildrens {}

/**
 * Post state
 */
export interface PostState {
    title?: String;
    slug?: String;
    content?: String;
}

/**
 * Quill editor props.
 */
export interface QuillEditorProps {
    value?: string;
    setValue?: (value: string) => void;
}

/**
 * PopUp props.
 */
export interface PopUpProps {
    title?: string;
    description?: string;
    close?: () => void;
    proceed?: () => void;
}