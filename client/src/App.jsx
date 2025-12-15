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
import useRequest from "./hooks/useRequest.js";

function App() {
	const [user, setUser] = useState(null);
	const {request} = useRequest();

	const registerHandler = async (email, password) => {
		const newUser = { email, password };
		// Register API call
		const result = await request('/users/register', 'POST', newUser); 
			
		// Login user after register
		setUser(result);
	}

	const loginHandler = async (email, password) => {
		const result = await request('/users/login', 'POST', {email, password});

		setUser(result);
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
				<Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Logout onLogout={logoutHandler} />} />
			</Routes>

			<Footer />
		</UserContext.Provider>

	)
}

export default App
