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
import UserContext from "./contexts/userContext.js";

function App() {
	const [user, setUser] = useState(null);

	const registerHandler = async (email, password) => {
		const newUser = { email, password };
		// Register API call
		await fetch('http://localhost:3030/users/register', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(newUser),
		}); 
			
		// Login user after register
		setUser(newUser);
	}

	const loginHandler = (email, password) => {

		if (!user) {
			throw new Error("Invalid email or password!");
		};

		setUser(user);
	};

	const logoutHandler = () => {
		setUser(null);
	};

	const userContextValues = {
		user,
		isAuthenticated: !!user?.accessToken,
		registerHandler,
		loginHandler,
		logoutHandler,
	}

	return (
		<UserContext.Provider value={userContextValues}>
			<Header user={user} />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/games" element={<Catalog />} />
				<Route path="/games/:gameId/details" element={<Details user={user}/>} />
				<Route path="/games/create" element={<GameCreate />} />
				<Route path="/games/:gameId/edit/" element={<GameEdit />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login onLogin={loginHandler} />} />
				<Route path="/logout" element={<Logout onLogout={logoutHandler} />} />
			</Routes>

			<Footer />
		</UserContext.Provider>

	)
}

export default App
