import express from 'express';
import {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
} from '../controllers/event.controller';
import checkAllFields from '../validators/checkAllFields';

const routes = express.Router();

routes.post('/events', checkAllFields, createEvent);
routes.get('/events', getEvents);
routes.put('/events/:id', checkAllFields, updateEvent);
routes.delete('/events/:id', deleteEvent);

module.exports = routes;
