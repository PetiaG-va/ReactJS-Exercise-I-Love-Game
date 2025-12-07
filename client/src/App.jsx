import { Route, Routes } from "react-router";
import { useState } from "react";

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

function App() {
	const [registeredUsers, setRegisteredUsers] = useState([]);
	const [user, setUser] = useState(null);

	const registerHandler = (email, password) => {
		if (registeredUsers.some(user => user.email === email)) {
			throw new Error("Username is taken!");
		}

		const newUser = { email, password };

		setRegisteredUsers(state => [...state, newUser]);

		// Login user after register
		setUser(newUser);
	}

	const loginHandler = (email, password) => {
		const user = registeredUsers.find(user => user.email === email && user.password === password);

		if (!user) {
			throw new Error("Invalid email or password!");
		};

		setUser(user);
	};

	const logoutHandler = () => {
		setUser(null);
	}

	return (
		<>
			<Header user={user} />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/games" element={<Catalog />} />
				<Route path="/games/:gameId/details" element={<Details />} />
				<Route path="/games/create" element={<GameCreate />} />
				<Route path="/games/:gameId/edit/" element={<GameEdit />} />
				<Route path="/register" element={<Register onRegister={registerHandler} />} />
				<Route path="/login" element={<Login onLogin={loginHandler} />} />
				<Route path="/logout" element={<Logout onLogout={logoutHandler} />} />
			</Routes>

			<Footer />
		</>

	)
}

export default App
