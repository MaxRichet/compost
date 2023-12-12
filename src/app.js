const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/apinode');

app.use(express.urlencoded());
app.use(express.json());

const postRoute = require(`./routes/postRoute`);
const comRoute = require(`./routes/comRoute`);
const userRoute = require(`./routes/userRoute`);

app.use('/posts', postRoute);
app.use('/', comRoute);
userRoute(app);

app.listen(port, () => {
  console.log(`Exemple app listening on port ${port}`)
});