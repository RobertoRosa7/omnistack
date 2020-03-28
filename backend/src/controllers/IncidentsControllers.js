const connection = require('../database/connection');

module.exports = {
    async fetchAll(req, res){
        const { page = 1} = req.query;
        try{
            const [ count ] = await connection('incidents').count();
            const incidents = await connection('incidents')
                .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
                .limit(5)
                .offset((page -1) * 5)
                .select([
                    'incidents.*', 
                    'ongs.nome',
                    'ongs.email',
                    'ongs.whatsapp',
                    'ongs.cidade',
                    'ongs.uf'
                ]);
            res.header('X-Total-Count', count['count(*)']);

            return res.status(200).json(incidents);
        }catch(e){
            console.error(e);
            return res.status(500).json({
                "statusCode":500,
                "msg":'Não foi possível listar todos os incidentes.'
            });
        }
    },
    async create(req, res){
        const { titulo, descricao, valor } = req.body;
        const ong_id = req.headers.authorization;

        try{
            await connection('incidents').insert({
                "titulo":titulo,
                "descricao":descricao,
                "valor":valor,
                "ong_id":ong_id
            });
            return res.status(200).json({
                "status":true,
                "msg":'Incidente cadastrado com sucesso.',
            });
        }catch(e){
            console.error(e);
            return res.status(500).json({
                "status":false,
                "msg":'Não foi possível cadastrar incidente'
            });
        }
    },
    async remove(req, res){
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        try{
            const incident = await connection('incidents').where('id', id).select('ong_id').first();
            if(!incident) res.status(404).json({
                "statusCode":404,
                "msg":`Nenhuma ONG foi encontrada com Id ${ong_id}`
            })

            if(incident.ong_id != ong_id){
                return res.status(401).json({
                    "statusCode":401,
                    "msg":'Não authorizado'
                })
            }
            await connection('incidents').where('id', id).delete();
            return res.status(204).send();
        }catch(e){
            console.error(e);
            return res.status(500).json({
                "statusCode":500,
                "msg":'Não foi possivel deletar incidente.'
            })
        }
    }
}