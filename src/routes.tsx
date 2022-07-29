import DefaultPage from 'components/DefaultPage'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import About from 'pages/About'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import Product from 'pages/Product'
import Products from 'pages/Products'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="produtos" element={<Products />} />
            <Route path="sobre" element={<About />} />
          </Route>
          <Route path="produto/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}
