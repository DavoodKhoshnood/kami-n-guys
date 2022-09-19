import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import EditIcon from "@mui/icons-material/Edit";
import { MenuItem, Select } from "@mui/material";

function CarModal({ postCar, IsAdd, car }) {
	const [openModal, setOpenModal] = useState(false);
	const [brands, setBrands] = useState([]);
	const [carDetails, setCarDetails] = useState(
		car ? car : { id: "", title: "", description: "", skills_require: "" }
	);

	useEffect(() => {
		fetch("/api/brands")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((result) => {
        console.log(result);
				setBrands(result);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);


	const handleClickOpen = () => {
		setOpenModal(true);
	};
	const handleClose = () => {
		setOpenModal(false);
	};

	const addCar = (input) => (e) => {
		setCarDetails({ ...carDetails, [input]: e.target.value });
	};

	const resetForm = () => {
		setCarDetails({
			...carDetails,
			["brand"]: "",
			["model"]: "",
			["year"]: "",
			["transmission"]: "",
			["color"]: "",
			["milage"]: "",
			["doors"]: "",
		});
	};

	const handlePostCar = () => {
		postCar(carDetails, IsAdd);
		resetForm();
		handleClose();
	};

	return (
		<div>
			{IsAdd ? (
				<Button variant="contained" onClick={handleClickOpen}>
					ADD
				</Button>
			) : (
				<EditIcon onClick={handleClickOpen} />
			)}
			<Dialog fullWidth open={openModal} onClose={handleClose}>
				<DialogContent>
					<DialogContentText>
						Brand<span className="asterisk"> *</span>
					</DialogContentText>
					<Select
						required
						id="brand"
						label=""
						variant="outlined"
						size="small"
						value={carDetails.title}
						fullWidth
						onChange={addCar("brand")}
					>
					{brands.map((brand) =>
					(
						<MenuItem key={brand.id} value={brand.id}>{brand.brand}</MenuItem>
					)
					)
					}
					</Select>
					<br />
					<br />
					<DialogContentText>Description</DialogContentText>
					<TextField
						multiline
						id="description"
						label=""
						variant="outlined"
						size="large"
						value={carDetails.description}
						fullWidth
						onChange={addCar("description")}
					/>
					<br />
					<br />
					<DialogContentText>Skills Require</DialogContentText>
					<TextField
						multiline
						id="skills-require"
						label=""
						variant="outlined"
						size="large"
						value={carDetails.skills_require}
						fullWidth
						onChange={addCar("skills_require")}
					/>
					<br />
					<br />
				</DialogContent>
				<DialogActions>
					<Button variant="contained" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="contained" onClick={handlePostCar}>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default CarModal;
