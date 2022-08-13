import { Router } from "express";
import pool from "./db";

// import logger from "./utils/logger";

const router = Router();

router.get("/", (_, res) => {
	console.log("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});


router.get("/cars/:carsId", (req, res) => {
	const id = req.params.carsId;
	pool
		.query(`select * from cars where id = $1`, [id])
		.then((result) => res.status(200).json(result.rows))
		.catch((error) => res.status(500).json(error));
});

router.get("/cars", (req, res) => {
	pool
		.query(`select * from cars order by id`)
		.then((result) => res.status(200).json(result.rows))
		.catch((error) => res.status(500).json(error));
});



export default router;
