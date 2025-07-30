import {useNavigate} from "react-router";

export default function Home(){
    const nav = useNavigate();

    function handleNavigate(){
        nav({
            pathname: '/data',
        });
    }

    return (
        <>
            <h1>Homepage</h1>
            <p>Halo semuahh.. Ini homepage</p>
            <button onClick={handleNavigate}>Go to Data</button>
        </>
    )
}