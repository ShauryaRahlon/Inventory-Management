import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import '../styling/AddProd.css'
const AddProduct = () => {
    const [title, setTitle] = useState('')
    const [sku, setSku] = useState()
    const [quantity, setQuantity] = useState()
    const [price, setPrice] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const handleAddProduct = () => {
        const data = {
            title,
            sku,
            quantity,
            price
        };
        setLoading(true)
        axios.post('http://localhost:3101/products/', data)
            .then(() => {
                setLoading(false)
                enqueueSnackbar('succesfully product added', { variant: 'success' })
                navigate('/');
            })
            .catch((error) => {
                setLoading(false)
                enqueueSnackbar('Error', { variant: 'error' })
                console.log(error)
            })
    }

    return (
        <div className='container'>
            <Link to='/' className='links'>back</Link>
            <div className="inp">
                <div className="title">
                    <input type="text" value={title}
                        onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
                </div>
                <div className="sku">
                    <input type="text" value={sku} onChange={(e) => setSku(e.target.value)} placeholder='Stock keeping units' />
                </div>
                <div className="quantity">
                    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder='Quantity available' />
                </div>
                <div className="price">
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Price' />
                </div>
                {/* <button onClick={handleAddProduct}>Add a product</button> */}
                <button onClick={handleAddProduct}>
                    Add Product
                    <div className="arrow-wrapper">
                        <div className="arrow"></div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default AddProduct
