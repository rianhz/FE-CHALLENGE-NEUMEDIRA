import React from "react";
import { Col, Row, Dropdown, DropdownButton } from "react-bootstrap";
import { ReactComponent as SearchBtn } from "../../assets/search.svg";
import { ReactComponent as Scan } from "../../assets/scan.svg";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import defaultImage from "../../assets/profs.png";
import "./searchGroup.css";

const SearchGroup = () => {
	const user = useSelector((state) => state);
	const cookies = new Cookies();
	const token = cookies.get("token");
	return (
		<Row>
			<Col className="head">
				<div className="search-wrapper">
					<DropdownButton id="dropdown-basic-button" title="All">
						<Dropdown.Item href="#/action-1">All</Dropdown.Item>
					</DropdownButton>
					<input type="text" placeholder="Search" id="search" />
					<div className="icons-wrapper">
						<SearchBtn />
						<div className="v"></div>
						<Scan id="scan" />
					</div>
				</div>
				<div className="profile">
					<div className="imgs">
						<img
							src={token !== undefined ? user.image : defaultImage}
							alt="user"
							className="user-image"
						/>
					</div>
					<select defaultValue="All">
						<option value="profile">Profile</option>
						<option value="logout">Logout</option>
					</select>
				</div>
			</Col>
		</Row>
	);
};

export default SearchGroup;
