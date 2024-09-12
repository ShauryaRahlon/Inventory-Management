import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import AddProduct from './pages/AddProduct'
import UpdateProduct from './pages/UpdateProduct'
import { Route, Routes } from 'react-router-dom'
import DeleteProduct from './pages/DeleteProduct'
import ViewProduct from './pages/ViewProduct'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products/add' element={<AddProduct />}></Route>
        <Route path='/products/edit/:id' element={<UpdateProduct />}></Route>
        <Route path='/products/delete/:id' element={<DeleteProduct />}></Route>
        <Route path='/products/view/:id' element={<ViewProduct />} ></Route>
      </Routes>
    </>
  )
}

export default App
