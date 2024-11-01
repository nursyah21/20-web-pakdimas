import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Index.tsx'
import ProductAndServices from './pages/ProductAndServices.tsx'
import Partner from './pages/Partner.tsx'
import Support from './pages/Support.tsx'
import Product from './pages/Product.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/products-and-services' Component={ProductAndServices} />
        <Route path='/partner' Component={Partner} />
        <Route path='/support' Component={Support} />
        <Route path='/product/:id' Component={Product} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
