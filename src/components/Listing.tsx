import { useId, useState } from "react";
import { ListingCtxInterface, ListingProps } from "../@types";
import ListingItem from "./ListingItem";
import { useListing } from "../context/ListingContext";

export default function Listing(props: ListingProps) {
    const { data } = props;

    const { items } = useListing() as ListingCtxInterface

    function selectAllItems() {
        console.log('selecting all')
        selectSingleItem()
    }

    function selectSingleItem() {

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
                        {data.map(el => <ListingItem key={useId()} selectItem={selectSingleItem} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}