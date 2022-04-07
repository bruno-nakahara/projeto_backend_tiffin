import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import eventRoutes from './routes/eventRoutes';

import swaggerDocs from './swagger.json';

require('dotenv').config();
const app = express();

mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
});

app.use(cors());
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/terms', (req, res) => {
  return res.json({
    message: 'Termos de Serviço',
  });
});

app.use('/v1', eventRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Rodando na porta ${process.env.PORT}`);
});
