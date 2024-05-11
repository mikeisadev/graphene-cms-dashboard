import { useId} from "react";
import { ListingCtxInterface, ListingProps } from "../@types";
import ListingItem from "./ListingItem";
import { useListing } from "../context/ListingContext";

export default function Listing(props: ListingProps) {
    const { data } = props;

    const { items } = useListing() as ListingCtxInterface

    function handleClick(e: React.MouseEvent) {
        Object.keys(items).map(id => {
            const item = items[id]!.querySelector('.select-item input');

            (e.target as HTMLInputElement).checked ? item?.setAttribute('checked', 'true') : item?.removeAttribute('checked')
        })
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
                                <input type="checkbox" onClick={handleClick} />
                            </th>
                            <th>Title</th>
                            <th className="w-[45px] actions"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(el => <ListingItem key={useId()} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}