const router = require("express").Router();
const { apiLimiter } = require("../helpers/ratelimit");

router.use(apiLimiter);

router.get("/", (req, res) => {
	res
		.status(200)
		.send(
			"Welcome to the HonestWeather API! GET /api/v1/endpoints to list all available endpoints."
		);
});

router.get("/endpoints", (req, res) => {
	res.status(200).json(["GET /api/v1/weather"]);
});

module.exports = router;
