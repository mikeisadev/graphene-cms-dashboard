import { useState, useEffect } from "react";
import { DashboardCtxInterface, PostsListProps } from "../../@types";
import PageHeader from "../../components/PageHeader";
import axios from "axios";
import Listing from "../../components/Listing";
import { useDashboard } from "../../context/DashboardContext";
import ListingProvider from "../../context/ListingContext";

export default function PostsList(props: PostsListProps) {
    const { title, description } = props;

    const { toggleLoading } = useDashboard() as DashboardCtxInterface;
    const [data, setData] = useState(null);

    /**
     * Here we manage CRUD OPERATIONS.
     */
    useEffect(() => {
        toggleLoading(true)

        axios.get('https://jsonplaceholder.typicode.com/posts').then(_data => {
            setData(_data.data)
            toggleLoading(false)
        })
    }, [])

    return (
        <ListingProvider>
            <PageHeader>
                <h1 className="page-title">{title}</h1>
                <p className="page-desc">{description}</p>
            </PageHeader>
            {data ? <Listing data={data}/> : ''}
        </ListingProvider>
    );
}