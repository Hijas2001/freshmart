import React from 'react'
import Products from './pages/Products'
import product from './components/asset'
import Navebar from './pages/Navebar'

const App = () => {
  return (
    <div>
      <Navebar></Navebar>
      <Products product={product}></Products>
    </div>
  )
}

export default App
