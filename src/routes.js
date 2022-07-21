import Home from 'pages/Home'
import Products from 'pages/Products'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
      </Routes>
    </Router>
  )
}
