import {
  create,
  findEvent,
  getAll,
  remove,
  search,
  update,
} from '../services/event.services';

const createEvent = async (req, res) => {
  const eventCreated = await create(req.body);

  try {
    if (!!eventCreated?._id) {
      return res.status(201).json({ message: 'Evento criado com sucesso' });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Falha ao tentar criar evento' });
  }
};

const getEvents = async (req, res) => {
  const { filter } = req.query;
  let events;

  try {
    if (!!filter) {
      events = await search(filter);
    } else {
      events = await getAll();
    }

    return res.status(200).json(events);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Falha ao tentar buscar eventos' });
  }
};

const updateEvent = async (req, res) => {
  const { id } = req.params;

  const event = await findEvent(id);

  try {
    if (event) {
      await update(req.body);

      return res.status(200).json({ message: 'Evento atualizado com sucesso' });
    } else {
      return res.status(404).json({ message: 'Não encontro o evento' });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ message: 'Falha ao tentar atualizar evento' });
  }
};

const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const eventDeleted = await remove(id);

    if (!eventDeleted)
      return res.status(404).json({ message: 'Não encontro o evento' });

    return res.status(200).json({ message: 'Evento deletado com sucesso' });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Falha ao tentar deletar evento' });
  }
};

export { createEvent, getEvents, updateEvent, deleteEvent };
