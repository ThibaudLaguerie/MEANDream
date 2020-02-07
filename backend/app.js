const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const cartsRoutes = require("./routes/carts");
const app = express();
mongoose.connect("mongodb://localhost:27017/DreamDB", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database');
    })
    .catch(() => {
        console.log('Connection failed');
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));
// Permet de définir l'accès et l'utilisation de certaines méthodes.

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});

app.use("/api/products", productsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/carts", cartsRoutes);

module.exports = app;
