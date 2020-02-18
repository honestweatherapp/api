const messages = require("../assets/_messages.json");

const getMessage = (deg, lang) => {
	if (!messages[lang]) return "Invalid/unsupported language.";

	let message;
	if (deg < 0) {
		let range = messages[lang]["<0"];
		message = range[Math.floor(Math.random() * range.length)];
	} else if (deg <= 5) {
		let range = messages[lang]["0-5"];
		message = range[Math.floor(Math.random() * range.length)];
	} else if (deg <= 10) {
		let range = messages[lang]["6-10"];
		message = range[Math.floor(Math.random() * range.length)];
	} else if (deg <= 15) {
		let range = messages[lang]["11-15"];
		message = range[Math.floor(Math.random() * range.length)];
	} else if (deg <= 20) {
		let range = messages[lang]["16-20"];
		message = range[Math.floor(Math.random() * range.length)];
	} else if (deg <= 25) {
		let range = messages[lang]["21-25"];
		message = range[Math.floor(Math.random() * range.length)];
	} else if (deg <= 30) {
		let range = messages[lang]["26-30"];
		message = range[Math.floor(Math.random() * range.length)];
	} else if (deg > 30) {
		let range = messages[lang][">30"];
		message = range[Math.floor(Math.random() * range.length)];
	} else message = "How did you even end up here?";
	return message;
};

module.exports = { getMessage };
