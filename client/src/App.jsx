import { Route, Routes } from "react-router"
import Footer from "./components/footer/Footer.jsx"
import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import Catalog from "./components/catalog/Catalog.jsx"
import Details from "./components/details/Details.jsx"
import GameCreate from "./components/game-create/GameCreate.jsx"
import Register from "./components/register/Register.jsx"
import { useState } from "react"
import Login from "./components/login/Login.jsx"

function App() {
	const [user, setUser] = useState(null);

	const authHandler = (email) => {
		setUser({
			email,
		})
	}

	return (
		<>
			<Header user={user} />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/games" element={<Catalog />} />
				<Route path="/games/:gameId/details" element={<Details />} />
				<Route path="/games/create" element={<GameCreate />} />
				<Route path="/register" element={<Register onRegister={authHandler} />} />
				<Route path="/login" element={<Login onLogin={authHandler} />} />
			</Routes>

			<Footer />
		</>

	)
}

export default App
