import {useSearchParams} from "react-router";
import {useState} from "react";

export default function Product() {
    const [query] = useSearchParams();
    // const [product, setProduct] = useState(query.get('search') || "");

    return (
        <>
            <h1>Product page</h1>
            <p>Ini product gagal dari kami</p>
            <p>Query: {query.get('murce')}</p>
        </>
    )
}