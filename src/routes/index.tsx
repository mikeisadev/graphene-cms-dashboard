import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import PostsList from "../pages/listing/PostsList";
import MenusList from "../pages/listing/MenusList";
import MediaList from "../pages/listing/MediaList";
import FormsList from "../pages/listing/FormsList";
import NewPost from "../pages/new/NewPost";
import ViewPost from "../pages/view/EditPost";

// const Dashboard = lazy(() => import( "../pages/Dashboard"));
// const PostsList = lazy(() => import( "../pages/listing/PostsList"));
// const MenusList = lazy(() => import( "../pages/listing/MenusList"));
// const MediaList = lazy(() => import( "../pages/listing/MediaList"));
// const FormsList = lazy(() => import( "../pages/listing/FormsList"));
// const NewPost = lazy(() => import( "../pages/new/NewPost"));
// const ViewPost = lazy(() => import( "../pages/view/EditPost"));

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to="/dashboard" />
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
    {
        path: '/posts',
        element: <PostsList title="Posts" description="Manage all your blog posts." />
    },
    {
        path: '/posts/view/:id',
        element: <ViewPost />
    },
    {
        path: '/post/add',
        element: <NewPost />
    },
    {
        path: '/pages',
        element: <PostsList title="Pages" description="Manage and build the web pages of your site."/>
    },
    {
        path: '/media',
        element: <MediaList />
    },
    {
        path: '/upload-media',
        element: <p>Upload media</p>
    },
    {
        path: '/menus',
        element: <MenusList />
    },
    {
        path: '/forms',
        element: <FormsList />
    },
    {
        path: '*',
        element: <Navigate to="/dashboard" />
    }
];

export default routes;