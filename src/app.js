const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/apinode');

app.use(express.urlencoded());
app.use(express.json());

const postRoute = require(`./routes/postRoute`);
app.use('/posts', postRoute);

const comRoute = require(`./routes/comRoute`);
app.use('/', comRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});