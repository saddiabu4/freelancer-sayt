import Builders from "@/pages/Builders"
import Favorites from "@/pages/Favorites"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import Profile from "@/pages/Profile"
import { Route, Routes } from "react-router-dom"

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/builders' element={<Builders />} />
			<Route path='/profile' element={<Profile />} />
			<Route path='/favorites' element={<Favorites />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default App
