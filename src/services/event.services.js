import EventModel from '../model/event.model';
import date from 'date-and-time';

const create = async data => {
  const eventExists = await EventModel.findOne({ name: data.name });

  if (eventExists) return eventExists;

  const event = await EventModel.create({
    ...data,
    created_at: date.format(new Date(), 'DD/MM/YYYY'),
  });

  return event;
};

const getAll = async () => {
  const events = await EventModel.find();

  return events;
};

const findEvent = async id => {
  const eventExists = await EventModel.findOne({ _id: id });

  if (!eventExists) return false;

  return true;
};

const search = async filter => {
  const queryWordRegex = new RegExp(filter, 'i');

  const events = await EventModel.find({
    $or: [
      { name: { $regex: queryWordRegex } },
      { description: { $regex: queryWordRegex } },
      { date: { $regex: queryWordRegex } },
      { category: { $regex: queryWordRegex } },
      { local: { $regex: queryWordRegex } },
    ],
  });

  return events;
};

const update = async data => {
  const eventUpdated = await EventModel.updateOne(
    { _id: data._id },
    { ...data, updated_at: date.format(new Date(), 'DD/MM/YYYY') }
  );

  return eventUpdated;
};

const remove = async id => {
  const eventExists = await EventModel.findOne({ _id: id });

  if (!eventExists) return false;

  const eventDeleted = await EventModel.deleteOne({ _id: id });

  return eventDeleted.deletedCount > 0;
};

export { create, getAll, search, update, findEvent, remove };
