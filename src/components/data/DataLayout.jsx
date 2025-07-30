import {Link, NavLink, Outlet, useLocation} from "react-router";
import "../../data.css";

export default function DataLayout() {
    const location = useLocation();

    return (
        <>
            <div>
                <h1>Header Data</h1>
            </div>
            <div>
                <ul style={{display: 'flex', listStyle: 'none', gap: '1rem'}}>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/data/product'}>Products</NavLink></li>
                    <li><NavLink to={{
                        pathname: '/data/product',
                        search: '?id=123&murce=true',
                        hash: '#top',
                    }}>Products with query</NavLink></li>
                    <li><NavLink to={'/data/customer'}>Customers</NavLink></li>
                    <li><NavLink to={'/data/seller'}>Sellers</NavLink></li>
                    <li><a href="/data/seller">Reload sellers</a></li>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <p>Footer Data</p>
                <p>Location: {location.pathname} {location.search} {location.hash}</p>
            </div>
        </>
    )
}