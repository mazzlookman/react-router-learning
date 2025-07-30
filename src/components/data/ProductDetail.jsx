import {useParams} from "react-router";

export default function ProductDetail() {
    const params = useParams();
    return (
        <>
            <h1>Product Detail</h1>
            <p>No: {params.no}, ID: {params.id}</p>
        </>
    )
}