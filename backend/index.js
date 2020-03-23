const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({status:true, msg:"it's works"});
})
app.listen(3333);