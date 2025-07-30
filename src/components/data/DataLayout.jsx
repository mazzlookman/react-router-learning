import {Link, Outlet} from "react-router";

export default function DataLayout() {
    return (
        <>
            <div>
                <h1>Header Data</h1>
            </div>
            <div>
                <ul style={{display: 'flex', listStyle: 'none', gap: '1rem'}}>
                    <li><Link to={'/data/product'}>Products</Link></li>
                    <li><Link to={{
                        pathname: '/data/product',
                        search: '?id=123&murce=true',
                        hash: '#top',
                    }}>Products with query</Link></li>
                    <li><Link to={'/data/customer'}>Customers</Link></li>
                    <li><Link to={'/data/seller'}>Sellers</Link></li>
                    <li><a href="/data/seller">Reload sellers</a></li>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <p>Footer Data</p>
            </div>
        </>
    )
}