// La constante express contient le framework Express.
const bodyParser = require("body-parser");
const express = require("express");

// app "devient" express
const app = express();

// Lien vers la gestion de la connexion de la BDD
require("./models/dbConfig");

// Appel du routeur
const postsRoutes = require("./routes/postsController");

// Midlewarne : fonction qui va ecouter tout les changements sur les requetes/reponses
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use("/posts", postsRoutes);

// Se connecter au serveur : port 5500 avec un callback
app.listen(5500, () => console.log("Server started : 5500"));
