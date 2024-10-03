import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import userRoute from './routes/user.route.js';
import customerRoute from './routes/customer.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

const connect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("database connected successfully");
    } catch (error) {
        throw error;
        
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('database disconnected');
})

mongoose.connection.on('error', (error) => {
    console.error('database error:', error);
})

app.get('/', (re, res) => {
    res.send('Hello World');
})

//middlewares
app.use(express.json());
app.use(helmet());
app.use(cookieParser());
app.use(morgan('common'));

//cors
// app.use(cors({
//     origin: 'http://localhost:5173/',
//     credentials: true,
// }))

const corsOptions = {
    origin: "http://localhost:5173",  // Replace this with the correct frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true, // Allow cookies or other credentials to be sent
};

app.use(cors(corsOptions));

// //routes
app.use('/api/users', userRoute);
app.use('/api/customers', customerRoute );

//listen to the port
app.listen(PORT, () => {
    console.log(`server is running on PORT: ${PORT}`);
    connect();
})