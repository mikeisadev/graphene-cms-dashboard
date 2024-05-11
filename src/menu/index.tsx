import { MenuLinksProps } from "../@types";

const menu: MenuLinksProps[] = [
    {
        links: [
            {
                icon: <i className="bi bi-speedometer2"></i>,
                to: '/dashboard',
                name: 'Dashboard'
            }
        ]
    },
    {
        title: 'Content',
        links: [
            {   
                icon: <i className="bi bi-pencil-square"></i>,
                to: '/posts',
                name: 'Posts',
                sublinks: [
                    {
                        name: 'All posts',
                        to: '/posts'
                    },
                    {
                        name: 'Add new',
                        to: '/post/add'
                    }
                ]
            },
            {
                icon: <i className="bi bi-file-earmark"></i>,
                to: '/pages',
                name: 'Pages',
                sublinks: [
                    {
                        name: 'All pages',
                        to: '/pages'
                    },
                    {
                        name: 'Add new',
                        to: '/page/add'
                    }
                ]
            },
            {
                icon: <i className="bi bi-film"></i>,
                to: '/media',
                name: 'Media',
                sublinks: [
                    {
                        name: 'All media',
                        to: '/media'
                    },
                    {
                        name: 'Upload new media',
                        to: '/upload-media'
                    }
                ]
            },
            {
                icon: <i className="bi bi-menu-button-wide"></i>,
                to: '/menus',
                name: 'Menus',
                sublinks: [
                    {
                        name: 'All menus',
                        to: '/menus'
                    },
                    {
                        name: 'Add new',
                        to: '/menus/add'
                    }
                ]
            },
            {
                icon: <i className="bi bi-input-cursor"></i>,
                to: '/forms',
                name: 'Forms',
                sublinks: [
                    {
                        name: 'All forms',
                        to: '/forms'
                    },
                    {
                        name: 'Add new',
                        to: '/forms/add'
                    }
                ]
            }
        ]
    }
]

export default menu;