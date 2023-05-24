import React from "react";
import "./cardBooks.css";
import { useNavigate } from "react-router-dom";

const CardBooks = ({ books }) => {
	const navigate = useNavigate();

	return (
		<div
			className="card-wrapper"
			onClick={() => navigate(`/detail-book/${books.id}`)}
		>
			<div className="left-card">
				<img src={books.image} alt={books.Title} />
				<div className="left-card-text">
					<p className="book-title">{books.Title}</p>
					<p className="author">{books.author}</p>
					<p className="rating">
						<span>4.5/</span> 5
					</p>
				</div>
			</div>
			<div className="right-card">
				<div className="borrowed">
					<h5>Burrowed on</h5>
					<p>
						{new Date(books.published)
							.toDateString()
							.split(" ")
							.slice(1, 4)
							.join(" ")}
					</p>
				</div>
				<div className="submission">
					<h5>Submission Due</h5>
					<p>
						{new Date(books.published)
							.toDateString()
							.split(" ")
							.slice(1, 4)
							.join(" ")}
					</p>
					<button className="btn-borrowed">Borrowed</button>
					<button className="btn-return">Return</button>
				</div>
			</div>
		</div>
	);
};

export default CardBooks;
