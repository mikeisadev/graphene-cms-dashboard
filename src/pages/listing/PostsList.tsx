import { useState, useEffect } from "react";
import { DashboardCtxInterface, PostsListProps } from "../../@types";
import PageHeader from "../../components/PageHeader";
import axios from "axios";
import Listing from "../../components/Listing";
import { useDashboard } from "../../context/DashboardContext";
import ListingProvider from "../../context/ListingContext";
import Button from "../../components/buttons/Button";

export default function PostsList(props: PostsListProps) {
    const { title, description } = props;

    const { toggleLoading } = useDashboard() as DashboardCtxInterface;
    const [data, setData] = useState(null);

    /**
     * Columns
     */
    const columns = {
        title: 'Title',
        slug: 'Slug'
    }

    /**
     * On component load, get data.
     */
    useEffect(() => {
        toggleLoading(true)
        loadData()
    }, [])

    /**
     * Delete data.
     */
    function deleteData(id: string|number) {
        setData(null)

        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(data => {
                // Reload data after delete.
                loadData()
            })
    }

    /**
     * Load data.
     */
    function loadData() {
        axios.get('http://localhost:3000/posts')
            .then(data => {
                setData(data.data.posts)
                toggleLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <ListingProvider>
            <PageHeader>
                <div className="flex-between">
                    <div className="left-cont">
                        <h1 className="page-title">{title}</h1>
                        <p className="page-desc">{description}</p>
                    </div>
                    <div className="right-cont">
                        <Button link="/post/add" className='primary-btn' icon={<i className="bi bi-plus-square"></i>} text="Add new" />
                    </div>
                </div>
                
            </PageHeader>
            {data ? <Listing data={data} columns={columns}/> : ''}
        </ListingProvider>
    );
}