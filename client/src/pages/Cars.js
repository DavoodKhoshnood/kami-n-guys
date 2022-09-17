import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

export default function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(()=> {
      fetch("/api/cars")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				console.log(body);
				setCars(body);
			})
			.catch((err) => {
				console.error(err);
			});

  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "brand",
      headerName: "Brand",
      width: 150,
      editable: true,
    },
    {
      field: "model",
      headerName: "Model",
      width: 150,
      editable: true,
    },
    {
      field: "year",
      headerName: "Year",
      width: 70,
      editable: true,
    },
    {
      field: "transmission",
      headerName: "Transmission",
      width: 130,
    },
    {
      field: "color",
      headerName: "Color",
      width: 100,
    },
    {
      field: "milage",
      headerName: "Milage",
      type: "number",
      width: 120,
    },
    {
      field: "doors",
      headerName: "Doors",
      width: 50,
    },
  ];
console.log("cars",cars);
  const rows = cars.map((car) => {
    return {
    id: car.id,
    brand: car.brand,
    model: car.model,
    year: car.year,
    transmission: car.transmission,
    color: car.color,
    milage: car.milage,
    doors: car.doors,
    };

  });

  return (
    <div>
    <div className="container">
      <Button> Add </Button>
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        />
    </Box>
        </div>
        </div>
  );
}
