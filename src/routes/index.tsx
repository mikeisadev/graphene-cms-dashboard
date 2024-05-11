import { Navigate, RouteObject } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import PostsList from "../pages/listing/PostsList";
import MenusList from "../pages/listing/MenusList";
import MediaList from "../pages/listing/MediaList";
import FormsList from "../pages/listing/FormsList";
import NewPost from "../pages/new/NewPost";

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
        element: <PostsList title="Posts" description="Manage all your blog posts." />,
        children: [
            {
                path: 'view/:postId',
                element: <p>Add post</p>
            }
        ]
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