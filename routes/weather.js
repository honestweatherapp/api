const router = require("express").Router();
const axios = require("axios");
const { apiLimiter } = require("../helpers/ratelimit");
const { getMessage } = require("../helpers/messages");

router.use(apiLimiter);

router.get("/", (req, res) => {
	if (!req.body.long)
		return res.status(400).json({ message: "Please provide a longitute." });
	if (!req.body.lat)
		return res.status(400).json({ message: "Please provide a latitude." });
	if (!req.body.lang)
		return res.status(400).json({ message: "Please provide a language." });
	if (!req.body.units)
		return res.status(400).json({ message: "Please provide a unit system." });

	axios
		.get(
			`https://api.openweathermap.org/data/2.5/weather?lat=${req.body.lat}&lon=${req.body.long}&units=${req.body.units}&appid=${process.env.OWM_KEY}`
		)
		.then(response => {
			return res.status(response.status).json({
				coord: response.data.coord,
				...response.data,
				message: getMessage(response.data.main.feels_like, req.body.lang)
			});
		})
		.catch(e => res.status(500).json({ message: e }));
});

module.exports = router;
