// Pour se connecter à la BDD MongoDB : Mongoose est un paquet pour faire des liens entre l'appli et MongoDB
// attribue le paquet Mongoose
const mongoose = require("mongoose");

//on utilise connect  de Mongoose pour se connecter
mongoose.connect(
  "mongodb://localhost:27017/node-api",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("MongoDB connected :)");
    else log("Connection error :( - " + err);
  }
);
