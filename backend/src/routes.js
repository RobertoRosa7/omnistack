const express = require('express');
const routes = express.Router();
const OngsController = require('./controllers/OngsControllers');
const IncidentsController = require('./controllers/IncidentsControllers');
const ProfilesController = require('./controllers/ProfilesControllers');
const SessionController = require('./controllers/SessionControllers');

routes.get('/', (req, res) => {
    res.json({status:true, msg:"it's works"});
});

// ONGS
routes.get('/ongs', OngsController.fetchAll);
routes.post('/ongs', OngsController.create);


// INCIDENTS
routes.get('/incidents', IncidentsController.fetchAll);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.remove);

// PROFILE
routes.get('/profile', ProfilesController.fetchProfile);

// SESSION
routes.post('/sessions', SessionController.create);

module.exports = routes;