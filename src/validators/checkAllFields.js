function checkAllFields(req, res, next) {
  const keys = Object.keys(req.body);

  for (let key of keys) {
    if (req.body[key] == '') {
      return res
        .status(400)
        .json({ message: 'Favor preencher todos os campos' });
    }
  }

  next();
}

export default checkAllFields;
