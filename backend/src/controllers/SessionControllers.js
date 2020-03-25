const connection = require('../database/connection');

module.exports = {
    async create(req, res){
        const { id } = req.body;
        try{
            const ong = await connection('ongs').where('id', id).select('nome').first();
            if(!ong) return res.status(400).json({"error": 'No found ONG'});
            return res.status(200).json(ong);
        }catch(e){
            console.error(e);
            return res.status(500).json({"error": 'Server'});
        }
    }
}