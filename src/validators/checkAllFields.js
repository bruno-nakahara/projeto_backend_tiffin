function checkAllFields(req, res, next) {
  const dataKeys = [
    'name',
    'description',
    'price',
    'date',
    'category',
    'local',
    'imageUrl',
  ];
  const keys = Object.keys(req.body);

  const eventValidate = dataKeys.every(el => keys.includes(el));

  if (!eventValidate) {
    return res.status(400).json({ message: 'Favor preencher todos os campos' });
  }

  for (let key of keys) {
    if (req.body[key] === '') {
      return res
        .status(400)
        .json({ message: 'Favor preencher todos os campos' });
    }
  }

  next();
}

export default checkAllFields;
