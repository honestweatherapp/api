require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

const weather = require("./routes/weather");
const router = require("./routes/router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => res.send("Welcome to the HonestWeather API!"));

app.use("/api/v1/", router);
app.use("/api/v1/weather", weather);

app.listen(port, () =>
	console.log(`HonestWeather API listening on port ${port}!`)
);
