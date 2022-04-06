import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import eventRoutes from './routes/eventRoutes';

require('dotenv').config();
const app = express();

mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
});

app.use(cors());
app.use(bodyParser.json());
app.use(eventRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Rodando na porta ${process.env.PORT}`);
});
