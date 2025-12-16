import { Route, Routes } from "react-router";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/home/Home.jsx";
import Catalog from "./components/catalog/Catalog.jsx";
import Details from "./components/details/Details.jsx";
import GameCreate from "./components/game-create/GameCreate.jsx";
import Register from "./components/register/Register.jsx";
import Login from "./components/login/Login.jsx";
import Logout from "./components/logout/Logout.jsx";
import GameEdit from "./components/game-edit/GameEdit.jsx";
import { useUserContext } from "./contexts/UserContext.jsx";

function App() {
	const { user } = useUserContext();

	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/games" element={<Catalog />} />
				<Route path="/games/:gameId/details" element={<Details user={user} />} />
				<Route path="/games/create" element={<GameCreate />} />
				<Route path="/games/:gameId/edit/" element={<GameEdit />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Logout />} />
			</Routes>

			<Footer />
		</>

	)
}

export default App
