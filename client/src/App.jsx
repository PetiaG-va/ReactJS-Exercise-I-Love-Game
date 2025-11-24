import { Route, Routes } from "react-router"
import Footer from "./components/footer/Footer.jsx"
import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import Catalog from "./components/catalog/Catalog.jsx"
import Details from "./components/details/Details.jsx"

function App() {

	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/games" element={<Catalog />} />
				<Route path="/games/:gameId/details" element={<Details />} />
			</Routes>
 
			<Footer />
		</>

	)
}

export default App
