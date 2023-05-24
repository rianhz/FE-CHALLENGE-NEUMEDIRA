import React from "react";
import "./headerContent.css";
import { Col, Row } from "react-bootstrap";

const HeaderContent = () => {
	return (
		<Row className="mt-4">
			<Col className="main-content-header">
				<span>All Books</span>
				<span>Favourite</span>
				<span>Borrowed Books</span>
				<span>E-Books</span>
				<span>Audio Books</span>
				<span>Articles & Journals</span>
			</Col>
		</Row>
	);
};

export default HeaderContent;
