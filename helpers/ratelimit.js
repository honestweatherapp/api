const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
	windowMs: 60 * 1000, // 1 minute
	max: 60 // blocks after
});

module.exports = { apiLimiter };
