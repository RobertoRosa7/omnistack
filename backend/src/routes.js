const express = require('express');
const routes = express.Router();
const { celebrate, Segments, Joi} = require('celebrate');
const OngsController = require('./controllers/OngsControllers');
const IncidentsController = require('./controllers/IncidentsControllers');
const ProfilesController = require('./controllers/ProfilesControllers');
const SessionController = require('./controllers/SessionControllers');

routes.get('/', (req, res) => {
    res.json({status:true, msg:"it's works"});
});

// CREATE OBJECT TO VALIDATE ONG - USE CELEBRATE
const validateCreateOng = {
    [Segments.BODY]:Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(9).max(15),
        cidade: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}
const validateHeadersProfile = {
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}
const validateParamsID = {
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}
const validateQueryPage = {
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}

// ONGS
routes.get('/ongs', OngsController.fetchAll);
routes.post('/ongs', celebrate(validateCreateOng), OngsController.create);

// INCIDENTS
routes.get('/incidents', IncidentsController.fetchAll);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', celebrate(validateParamsID), IncidentsController.remove);

// PROFILE
routes.get('/profile', celebrate(validateHeadersProfile), ProfilesController.fetchProfile);

// SESSION
routes.post('/sessions', SessionController.create);

module.exports = routes;