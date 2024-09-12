import axios from 'axios';
import { enqueueSnackbar, useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteProduct = () => {
    const [loading, setLoading] = useState(false)
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const { id } = useParams();
    const handleDeleteProduct = () => {
        axios.delete(`http://localhost:3101/products/${id}`).
            then(() => {
                enqueueSnackbar('product deleted successfully', { variant: 'success' })
                setLoading(false)
                navigate('/')
            })
    }
    return (
        <div>
            <Link to="/">back</Link>
            <h3 className='deleteP'>Delete product</h3>
            <div><h3 className='deleteP1'>Are u sure u want to delete the book</h3></div>
            <button onClick={handleDeleteProduct} className='delBut'>Yes</button>
        </div>
    )
}

export default DeleteProduct
