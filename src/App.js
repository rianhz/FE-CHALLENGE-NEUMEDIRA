import { Route, Routes } from "react-router-dom";
import Login from "./pages/Sign/Login";
import DetailBook from "./pages/Detail/DetailBook";
import ListBooks from "./pages/List/ListBooks";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="detail-book/:id" element={<DetailBook />} />
				<Route path="list-books" element={<ListBooks />} />
			</Routes>
		</div>
	);
}

export default App;
