import { useId, useState } from "react";
import { ListingCtxInterface, ListingProps } from "../@types";
import ListingItem from "./ListingItem";
import { useListing } from "../context/ListingContext";

export default function Listing(props: ListingProps) {
    const { data } = props;

    const { items, selectAll, setSelectAll } = useListing() as ListingCtxInterface

    function selectAllItems() {
        setSelectAll()
    }

    function selectItem(e: React.MouseEvent) {
        e.target.checked = !e.target.checked
    }

    return (
        <div className="listing-wrap">
            <div className="listing-head">
                <input type="text" className="listing-search" placeholder="Search..."/>
            </div>
            <div className="listing-body">
                <table className="listing-table">
                    <thead>
                        <tr className="listing-head">
                            <th className="w-[45px]">
                                <input type="checkbox" onClick={selectAllItems} />
                            </th>
                            <th>Title</th>
                            <th className="w-[45px] actions"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(el => <ListingItem key={useId()} selected={selectAll} selectItem={selectItem}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}