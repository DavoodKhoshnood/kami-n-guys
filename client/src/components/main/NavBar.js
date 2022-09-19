import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
	AppBar,
	Divider,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


import "../../styles/navBar.css";

const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "left",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "left",
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .MuiPaper-root": {
		borderRadius: 0,
		marginTop: theme.spacing(1),
		minWidth: 180,
		fontSize: 42,
		color:
			theme.palette.mode === "light"
				? "rgb(62, 63, 64)"
				: theme.palette.grey[300],
		boxShadow:
			"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
		"& .MuiMenu-list": {
			padding: "4px 0",
		},
		"& .MuiMenuItem-root": {
			"& .MuiSvgIcon-root": {
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			"&:active": {
				backgroundColor: alpha(
					theme.palette.primary.main,
					theme.palette.action.selectedOpacity
				),
			},
		},
	},
}));

const NavBar = ({ usedCars }) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Box sx={{ display: "flex" }}>
			<AppBar component="nav">
				<Toolbar sx={{ backgroundColor: "#555" }}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						//   onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h5"
						component="h5"
						sx={{ flexGrow: 1, display: "block" }}
					>
						Kami 'n Guys
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						<Link className="nav-link" to={"/"} >Home</Link>
						<Link className="nav-link" to={"/cars"}>Finance</Link>
						<Link className="nav-link"
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
      >Services</Link>
						{/* <StyledMenu
							id="demo-customized-menu"
							MenuListProps={{
								"aria-labelledby": "demo-customized-button",
							}}
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose} >
								Edit
							</MenuItem>
							<MenuItem onClick={handleClose} disableRipple>
								Duplicate
							</MenuItem>
							<Divider sx={{ my: 0.5 }} />
							<MenuItem onClick={handleClose} disableRipple>
								Archive
							</MenuItem>
							<MenuItem onClick={handleClose} disableRipple>
								More
							</MenuItem>
						</StyledMenu> */}
						<Link className="nav-link">Warranty</Link>
						<Link className="nav-link">Used Cars</Link>
						<Link className="nav-link">About</Link>
						<Link className="nav-link">Contact</Link>
						{/* {usedCars.map((item) => (
							<Button key={item} sx={{ color: "#fff" }}>
								{item}
							</Button>
						))} */}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
