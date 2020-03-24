const connection = require('../database/connection');
const cripto = require('crypto');

module.exports = {
    async create(req, res){
        const { titulo, descricao, valor } = req.body;
        const ongs_id = req.headers.authorization;

        try{
            const [id] = await connection('incidents').insert({
                "titulo":titulo,
                "descricao":descricao,
                "valor":valor,
                "ongs_id":ongs_id
            });
            return res.status(200).json({
                "status":true,
                "msg":'Incidente cadastrado com sucesso.',
                "id":id
            });
        }catch(e){
            return res.status(500).json({
                "status":false,
                "msg":'Não foi possível cadastrar incidente'
            });
        }
    }
}