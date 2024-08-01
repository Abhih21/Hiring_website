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

app.use('/uploads', express.static('uploads'));

app.use(cors(corsOptions));
app.options(cors(corsOptions));

// Routes
import userRouter from './routes/user.routes.js';
import userDetailsRouter from './routes/userDetails.routes.js';
import candidateRouter from './routes/candidate.routes.js';
import jobRouter from './routes/job.routes.js';

app.use('/api/v1/user', userRouter);
app.use('/api/v1/user', userDetailsRouter);
app.use('/api/v1/candidate', candidateRouter);
app.use('/api/v1/job', jobRouter);

export { app };
