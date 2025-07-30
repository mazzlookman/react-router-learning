import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Index from "./components/data/Index.jsx";
import Product from "./components/data/Product.jsx";
import Customer from "./components/data/Customer.jsx";
import Seller from "./components/data/Seller.jsx";
import DataLayout from "./components/data/DataLayout.jsx";
import ProductDetail from "./components/data/ProductDetail.jsx";
import NotFound from "./components/NotFound.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/about'} element={<About />} />
              <Route path={'/data'} element={<DataLayout />}>
                  <Route index element={<Index />} />
                  <Route path={'product'} element={<Product />} />
                  <Route path={'products/:no/:id'} element={<ProductDetail />} />
                  <Route path={'customer'} element={<Customer />} />
                  <Route path={'seller'} element={<Seller />} />
              </Route>
              <Route path={'/*'} element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
