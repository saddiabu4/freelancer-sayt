import { Route, Routes } from "react-router-dom"
import Home from "@/pages/Home"
import Builders from "@/pages/Builders"
import Profile from "@/pages/Profile"
import Favorites from "@/pages/Favorites"
import NotFound from "@/pages/NotFound"

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/builders' element={<Builders />} />
			<Route path='/profile' element={<Profile />} />
			<Route path='/favorites' element={<Favorites />} />
			<Route path='/not-found' element={<NotFound />} />
		</Routes>
	)
}

export default App
