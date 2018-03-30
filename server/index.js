const express = require('express');
const bodyParser = require('body-parser');
const pc = require('./controller')

const app = express();

app.use(bodyParser.json())

app.get('/api/pokemon/:number', pc.read)
app.put('/api/pokemon/:number', pc.update)

app.listen(3005, () => console.log("listening 3005"));