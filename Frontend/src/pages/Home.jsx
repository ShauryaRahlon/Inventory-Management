import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styling/Home.css'
const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:3101/products/')
            .then((response) => {
                setProducts(response.data.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }, [])
    const title = "My Inventory"
    return (
        <div className='container'>
            <div className='heading'>
                <h1 className='MyInvent'> {title.split("").map((letra) => (
                    <span className="letra">{letra}</span>
                ))}</h1>
            </div>
            <Link to='/products/add' className='ad1'>
                <button className="cssbuttons-io-button">
                    Add a Product
                    <div className="icon">
                        <svg
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                </button>
            </Link>
            <div className='display-products'>
                <th>
                    <tr>
                        <th>No</th>
                        <th >Product</th>
                        <th>SKU</th>
                        <th>Quantity </th>
                        <th>Price</th>
                    </tr>
                </th>
                <tbody>
                    {products.map((product, index) => (
                        <div>
                            <tr key={product._id} >
                                <td >{index + 1}</td>
                                <td>{product.title && product.title.substr(0, 30) + ".."}  </td>
                                <td>{product.sku}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                                <Link to={`/products/edit/${product._id}`}>
                                    <button className='editProduct'>✏️</button>
                                </Link>
                                <Link to={`/products/delete/${product._id}`}><button className="tooltip">
                                    <span class="tooltiptext"></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24" height="24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                    </svg>
                                </button></Link>
                                <Link to={`/products/view/${product._id}`}><button className='view'>
                                    <span>View</span>
                                </button></Link>
                            </tr>

                        </div>
                    ))}
                </tbody>
            </div>


        </div>
    )
}

export default Home
