import express, { request, response } from 'express'
import { Product } from '../Models/prodDetails.js'
const router = express.Router();

router.post('/', async (request, response) => {
    try {
        // Check for missing fields
        if (!request.body.title || !request.body.sku || !request.body.quantity || !request.body.price) {
            return response.status(400).send({
                message: 'Please provide all required fields'
            });
        }

        // Create a new product object
        const newProd = {
            title: request.body.title,
            sku: request.body.sku,
            quantity: request.body.quantity,
            price: request.body.price
        };

        // Save the new product to the database
        const product = await Product.create(newProd);
        return response.status(201).send(product);  // Return the created product with status 201
    } catch (error) {
        console.error(error);
        return response.status(500).send({ message: 'Internal Server Error' });  // Provide a response in case of error
    }
    console.log(`post response sent on this port`)
});

router.get('/', async (request, response) => {
    try {
        const products = await Product.find({})
        return response.status(200).json({
            count: products.length,
            data: products
        })
    } catch (error) {
        console.log(error)
        return response.status(500).send(error)
    }
})
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const product = await Product.findById(id)
        return response.status(200).json(product)
    } catch (error) {
        console.log(error)
        return response.status(500).send(error)
    }
})
router.put('/:id', async (request, response) => {
    try {
        if (!request.body.title || !request.body.sku) {
            return response.status(400).send({
                message: 'Send all the require fields'
            })
        }
        const { id } = request.params
        const result = await Product.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(400).json({ message: 'Product not found' })
        }
        return response.status(200).send({ message: 'Product Updated successfully' })
    } catch (error) {
        console.log(error)
        response.status(500).send({ message: error.message })
    }
})
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const result = await Product.findByIdAndDelete(id)
        if (!result) {
            return response.status(404).json({ message: 'Product not found' })
        }
        return response.status(200).send({ message: 'Product deleted successfully' })
    } catch (error) {
        console.log(error)
        response.status(500).send({ message: error.message })
    }
})


export default router;