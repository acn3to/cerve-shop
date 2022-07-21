import DefaultPage from 'components/DefaultPage'
import Menu from 'components/Menu'
import Home from 'pages/Home'
import Products from 'pages/Products'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="produtos" element={<Products />} />
          </Route>
        </Routes>
      </Router>
    </main>
  )
}
