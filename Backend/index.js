import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import prodRoutes from './Routes/prodRoutes.js';

const mongoDbUrl = 'mongodb://localhost:27017/GDSC';
const PORT = 3101;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.send("Welcome to my MERN application");
});

app.use('/products', prodRoutes);

mongoose.connect(mongoDbUrl)
    .then(() => {
        console.log(`App connected to database`);
        app.listen(PORT, () => {
            console.log(`Listening on PORT: ${PORT}`);
        });
    }).catch((error) => {
        console.log(error);
    });
