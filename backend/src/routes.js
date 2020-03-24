const express = require('express');
const routes = express.Router();
const OngsController = require('./controllers/OngsControllers');
const IncidentsController = require('./controllers/IncidentsControllers');

routes.get('/', (req, res) => {
    res.json({status:true, msg:"it's works"});
});

// ONGS
routes.get('/ongs', OngsController.fetchAll);
routes.post('/ongs', OngsController.create);


// INCIDENTS
routes.post('/incidents', IncidentsController.create);

module.exports = routes;