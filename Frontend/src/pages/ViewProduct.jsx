import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../styling/viewProd.css'
const ViewProduct = () => {
    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams();
    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:3101/products/${id}`)
            .then((response) => {
                setProducts(response.data);
                setLoading(false)
            })
            .catch((error) => {
                console.error(error);
                setLoading(false)
            })

    }, [id])

    return (
        <div>

            <div className="viewTitle">Title- {products.title}</div>
            <div className="viewSku">Stock keeping units- {products.sku}</div>
            <div className="viewQuant">Quantity Remaining- {products.quantity}</div>
            <div className="viewPrice">Price- {products.price}</div>
            <div className="ai-assistant"></div>
        </div>
    )
}

export default ViewProduct
