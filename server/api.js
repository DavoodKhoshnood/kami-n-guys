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
		.query(`select cars.* from cars where id = $1`, [id])
		.then((result) => res.status(200).json(result.rows))
		.catch((error) => res.status(500).json(error));
});

router.get("/cars", (req, res) => {
	pool
		.query(`select brands.brand, models.model, cars.* 
				from cars 
				inner join models on models.id = model_id
				inner join brands on brands.id = brand_id
				order by cars.id`)
		.then((result) => res.status(200).json(result.rows))
		.catch((error) => res.status(500).json(error));
});

router.get("/models", (req, res) => {
	pool
	.query(`select * from models`)
	.then((result) => res.status(200).json(result.rows))
	.catch((error) => res.status(500).json(error));
});

router.get("/brands", (req, res) => {
	pool
	.query(`select * from brands`)
	.then((result) => res.status(200).json(result.rows))
	.catch((error) => res.status(500).json(error));
});


export default router;
