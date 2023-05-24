import React, { useEffect, useState } from "react";
import "./list.css";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../components/SideBar/SideBar";
import Cookies from "universal-cookie";
import CardBooks from "../../components/Card/CardBooks";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HeaderContent from "../../components/HeaderContent/HeaderContent";
import SearchGroup from "../../components/SearchGroup/SearchGroup";

const ListBooks = () => {
	const [books, setBooks] = useState([]);

	const cookies = new Cookies();
	const token = cookies.get("token");
	const navigate = useNavigate();

	const fetchBooks = async () => {
		const res = await axios.get(
			`${process.env.REACT_APP_BASE_BOOKS_URL}/books`
		);
		setBooks(res.data);
	};

	useEffect(() => {
		token === undefined ? navigate("/") : fetchBooks();
	}, []);

	return (
		<Container fluid className="list">
			<Row className="p-0">
				<Col lg={2} className="bg-light ">
					<SideBar />
				</Col>
				<Col lg={10} className="right-content">
					<SearchGroup />
					<h1>
						Your <span id="shelf">Shelf</span>
					</h1>
					<HeaderContent />
					<Row>
						<Col className="card-container vh-100">
							{books?.map((el, i) => {
								return <CardBooks key={i} books={el} />;
							})}
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default ListBooks;
