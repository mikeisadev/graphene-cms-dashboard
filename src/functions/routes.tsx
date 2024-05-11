import { useId } from "react";
import { Routes, Route, RouteObject } from "react-router-dom";

/** 
 * Use this function to build routes and its children routes.
 */
export function buildRoutesGroup(routes: RouteObject[]): React.ReactNode {
    return <Routes>{ buildRoutes(routes) }</Routes>
}

/**
 * Build nesting routes.
 * 
 * @param routes 
 * @returns 
 */
function buildRoutes(routes: RouteObject[]): React.ReactNode {
    return (
        routes.map(route => {
            const id = useId();

            const attributes = {
                loader: route.loader,
                action: route.action
            }

            return route.hasOwnProperty('children') ?
                <Route key={id} path={route.path} element={route.element} {...attributes}>
                    { route.children ? buildRoutes(route.children) : null }
                </Route>
                :
                <Route key={id} path={route.path} element={route.element} {...attributes}/>
        })
    )
}