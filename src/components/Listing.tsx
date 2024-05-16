import { useId, useState } from "react";
import { ListingCtxInterface, ListingProps } from "../@types";
import ListingItem from "./ListingItem";
import { useListing } from "../context/ListingContext";

export default function Listing(props: ListingProps) {
    const { data, columns } = props;

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
                            { 
                                Object.keys(columns).map(col => {
                                    return <th className="listing-col">{columns[col as keyof object]}</th>
                                }) 
                            }
                            <th className="w-[45px] actions"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(el => <ListingItem key={useId()} data={el} columns={columns} selected={selectAll} selectItem={selectItem}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}