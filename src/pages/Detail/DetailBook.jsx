import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../components/SideBar/SideBar";
import Cookies from "universal-cookie";
import axios from "axios";
import "./detail.css";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as Review } from "../../assets/reviews.svg";
import { ReactComponent as Notes } from "../../assets/notes.svg.svg";
import { ReactComponent as Share } from "../../assets/share.svg.svg";
import { AiFillStar } from "react-icons/ai";
import HeaderContent from "../../components/HeaderContent/HeaderContent";
import SearchGroup from "../../components/SearchGroup/SearchGroup";

const DetailBook = () => {
	const [book, setBook] = useState({});

	const { id } = useParams();

	const cookies = new Cookies();
	const token = cookies.get("token");
	const navigate = useNavigate();

	const getDetailBook = async (e) => {
		const res = await axios.get(
			`${process.env.REACT_APP_BASE_BOOKS_URL}/books/${id}`
		);

		setBook(res.data);
	};

	useEffect(() => {
		token === undefined ? navigate("/") : getDetailBook();
	}, []);

	return (
		<Container fluid className="list">
			<Row className="p-0">
				<Col lg={2} className="p-0 sides">
					<SideBar />
				</Col>
				<Col lg={10} className="right-content">
					<SearchGroup />
					<h1 id="back-to" onClick={() => navigate("/list-books")}>
						<BsArrowLeft /> Back to results
					</h1>
					<HeaderContent />
					<Row className="mt-4">
						<Col lg={4}>
							<div className="left-detail">
								<img src={book.image} alt={book.Title} />
								<div className="detail-icons-wrapper">
									<div className="detail-icons-item">
										<Review />
										<span>Review</span>
									</div>
									<div className="detail-icons-item">
										<Notes />
										<span>Notes</span>
									</div>
									<div className="detail-icons-item">
										<Share />
										<span>Share</span>
									</div>
								</div>
							</div>
						</Col>
						<Col lg={8}>
							<div className="detail-top">
								<h1 id="detail-title">{book.Title}</h1>
								<p id="detail-author">
									by <span>{book.author}</span>,{" "}
									{new Date(book.published)
										.toDateString()
										.split(" ")
										.slice(3, 4)}
								</p>
								<span id="edition">Second Edition</span>
							</div>
							<div className="detail-rating-wrapper">
								<div className="star">
									<AiFillStar className="stars" />
									<AiFillStar className="stars" />
									<AiFillStar className="stars" />
									<AiFillStar className="stars" />
									<AiFillStar className="stars" />
									<span id="stars-ratings">5.0 Ratings</span>
									<span id="stars-current">25 Currently reading</span>
									<span id="stars-read">119 Have read</span>
								</div>
							</div>
							<div className="btn-detail-wrapper">
								<button id="baca">Baca Buku</button>
								<select defaultValue="Add to list" id="detail-select">
									<option value="add">Add</option>
								</select>
							</div>
							<p id="previews-in">
								Previews available in: <span>English</span>
							</p>
							<p id="desc">{book.description}</p>
							<div className="book-detail-bottom">
								<h1 id="book-detail-sub-title">Book Details</h1>

								<p className="detail-subs pubs">Published In</p>

								<span id="country">United States</span>

								<div className="detail-item-group">
									<p className="detail-subs editor">Editor Notes</p>
									<div className="span-wrapper-right">
										<div className="span-right-item-key">
											<span>Series</span>
											<span>Genre</span>
										</div>
										<div className="span-right-item-value">
											<span>Dover large print classics</span>
											<span>Fiction.</span>
										</div>
									</div>
									<p id="classific">Classification</p>
									<div className="classification-wrapper-right">
										<div className="span-right-item-key-class">
											<span id="dewey">Dewey Decimal Class</span>
											<span id="lib">Library of Congress</span>
										</div>
										<div className="span-right-item-value-class">
											<span id="vr-top">823/.8</span>
											<span id="vr-bot">PR5485 .A1 2002</span>
										</div>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default DetailBook;
