const connection = require('../database/connection');

module.exports = {
  async fetchProfile(req, res) {
    const ong_id = req.headers.authorization;
    try {
      const incidents = await connection('incidents').where('ong_id', ong_id).select('*');
      return res.status(200).json(incidents);
    } catch (e) {
      console.error(e);
      return res.status(500).json({
        "status": false,
        "msg": 'Não foi possível listar incidentes desta ONG.'
      });
    }
  }
};