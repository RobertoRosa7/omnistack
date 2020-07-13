const connection = require('../database/connection');
const cripto = require('crypto');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
  async fetchAll(req, res) {
    const ongs = await connection('ongs').select('*');
    return res.json(ongs);
  },
  async create(req, res) {
    // const body = req.body;
    const { nome, cidade, uf, whatsapp, email } = req.body;

    // create hash
    // const id = cripto.randomBytes(4).toString('HEX');
    const id = generateUniqueId();
    try {
      // insert data
      await connection('ongs').insert({
        "id": id,
        "nome": nome,
        "email": email,
        "cidade": cidade,
        "uf": uf,
        "whatsapp": whatsapp
      });
      return res.status(200).json({
        "id": id,
        "status": true,
        "msg": 'ONG cadastrada com sucesso.'
      });
    } catch (e) {
      return res.status(500).json({
        "status": false,
        "msg": 'Não foi possível cadastrar ONG',
        "error": e
      });
    }
  },
};