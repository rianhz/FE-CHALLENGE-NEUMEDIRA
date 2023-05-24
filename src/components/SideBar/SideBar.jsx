import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.svg";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Charts } from "../../assets/charts.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Contribute } from "../../assets/Give-Gift.svg";

const SideBar = () => {
	return (
		<div className="sidebar-wrapper">
			<img src={logo} alt="logo" />
			<div className="main-side">
				<div className="side-item-wrapper">
					<Home />
					<span>Home</span>
				</div>
				<div className="side-item-wrapper">
					<Search />
					<span>Search</span>
				</div>
				<div className="side-item-wrapper">
					<Charts />
					<span>My Shelf</span>
				</div>
				<div className="side-item-wrapper">
					<Contribute />
					<span>Contribute</span>
				</div>
			</div>
			<div className="footer-side">
				<span>About</span>
				<span>Suppor</span>
				<span>Terms and Condition</span>
			</div>
		</div>
	);
};

export default SideBar;
