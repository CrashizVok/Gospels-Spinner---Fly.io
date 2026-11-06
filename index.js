/* eslint-disable no-undef */
import "dotenv/config";

import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.get("/gospel", (req, res) => {
	const { passage = "Matthew" } = req.query;
	const style = process?.env?.STYLE;
	const apiKey = process?.env?.API_KEY;

	fetch(
		`https://api.biblia.com/v1/bible/content/LEB.html?passage=${passage}&style=${style}&key=${apiKey}`,
	)
		.then(async (result) => {
			console.log("GET /gospel result: ", result);
			const gospelText = await result.text();
			return res.status(200).send(gospelText);
		})
		.catch((error) => {
			console.warn(error);
			return res.status(403).send(`Bad Request. Error: ${error}.`);
		});
});

const PORT = process?.env?.PORT;
const HOST = process?.env?.HOST;

app.listen(PORT, HOST, (error) => {
	if (error) console.warn("Error: ", error);
	if (!error) console.log(`Express backend is running at ${HOST}:${PORT}`);
});
