import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Index from "./components/data/Index.jsx";
import Product from "./components/data/Product.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/about'} element={<About />} />
              <Route path={'/data'}>
                  <Route index element={<Index />} />
                  <Route path={'product'} element={<Product />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
