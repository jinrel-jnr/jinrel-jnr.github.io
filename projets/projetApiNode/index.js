// La constante express contient le framework Express.
const express = require("express");

// app "devient" express
const app = express();

// Lien vers la gestion de la connexion de la BDD
require("./models/dbConfig");

// Appel du routeur
const postsRoutes = require("./routes/postsController");

const bodyParser = require("body-parser");
// bodyParser deprecated. Mise à jour pour MongoDB
const mongoose = require("mongoose");

// Appel de CORS pour autoriser l'accès à l'API
const cors = require("cors");

mongoose.set("useFindAndModify", false);

// Midlewarne : fonctions qui va ecouter tout les changements sur les requetes/reponses
//cors{origin} : 'url autorisée pour accès à l'API'
app.use(bodyParser.json());
app.use(cors());
app.use("/posts", postsRoutes);

// Se connecter au serveur : port 5500 avec un callback
app.listen(5500, () => console.log("Server started : 5500"));
