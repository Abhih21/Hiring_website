import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true, // Allow credentials (cookies, authorization headers)
};

app.use(cors(corsOptions));
app.options(cors(corsOptions));

// Routes
import userRouter from './routes/user.routes.js';
import userDetailsRouter from './routes/userDetails.routes.js'; // Corrected import statement

app.use('/api/v1/user', userRouter);
app.use('/api/v1/user', userDetailsRouter); // Corrected route usage

export { app };
