import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const UpdateProduct = () => {
    const [title, setTitle] = useState('')
    const [sku, setSku] = useState()
    const [quantity, setQuantity] = useState()
    const [price, setPrice] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { id } = useParams();
    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:3101/products/${id}`)
            .then((response) => {
                setTitle(response.data.title)
                // setSku(respone.data.sku)
                setQuantity(response.data.quantity)
                setPrice(response.data.price)
                setLoading(false)
            }).catch((error) => {
                setLoading(false)
                enqueueSnackbar('An error occured', { variant: 'error' })
                console.log(error)
            })
    }, [id])

    const handleEditProduct = () => {
        const data = {
            title,
            sku,
            quantity,
            price,
        };
        setLoading(true)
        axios.put(`http://localhost:3101/products/${id}`, data)
            .then(() => {
                enqueueSnackbar('Product successfully edited', { variant: 'success' })
                setLoading(false)
                navigate('/')
            })
            .catch((error) => {
                setLoading(false)
                alert("something has happened")
                console.log(error)
            })
    }

    return (
        <div className='edit-container'>
            <div>
                <Link to='/' className='links'>back</Link>
                <div className='chead'>

                    <h1>Edit Product</h1>
                </div>
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
                    <button onClick={handleEditProduct}>
                        save
                        <div className="arrow-wrapper">
                            <div className="arrow"></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpdateProduct
