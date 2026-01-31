import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import buildersData from "@/data/db.json"
import {
	CheckCircle,
	Heart,
	HeartOff,
	MapPin,
	Phone,
	Star,
	Trash2,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import uy1 from "@/images/uy1.png"
import uy2 from "@/images/uy2.png"
import uy3 from "@/images/uy3.png"

const builderImages = [uy1, uy2, uy3]

const Favorites = () => {
	const [favorites, setFavorites] = useState([])
	const [favoriteBuilders, setFavoriteBuilders] = useState([])

	useEffect(() => {
		loadFavorites()
	}, [])

	const loadFavorites = () => {
		const savedFavorites = localStorage.getItem("favorites")
		if (savedFavorites) {
			const favoriteIds = JSON.parse(savedFavorites)
			setFavorites(favoriteIds)

			const builders = buildersData.builders.filter((b) =>
				favoriteIds.includes(b.id)
			)
			setFavoriteBuilders(builders)
		}
	}

	const removeFavorite = (builderId) => {
		const newFavorites = favorites.filter((id) => id !== builderId)
		setFavorites(newFavorites)
		localStorage.setItem("favorites", JSON.stringify(newFavorites))

		const builders = buildersData.builders.filter((b) =>
			newFavorites.includes(b.id)
		)
		setFavoriteBuilders(builders)
	}

	const clearAllFavorites = () => {
		setFavorites([])
		setFavoriteBuilders([])
		localStorage.removeItem("favorites")
	}

	const formatPrice = (price) => {
		return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}

	return (
		<>
			<Navbar />
			<main className='bg-gray-50 min-h-screen'>
				{/* Header */}
				<section className='bg-white border-b'>
					<div className='max-w-7xl mx-auto px-4 lg:px-8 py-8'>
						<div className='flex justify-between items-center'>
							<div>
								<h1 className='text-3xl font-bold mb-2'>Sevimli ustalar</h1>
								<p className='text-gray-600'>
									Siz tanlagan ustalarning ro'yxati
								</p>
							</div>
							{favoriteBuilders.length > 0 && (
								<Button
									onClick={clearAllFavorites}
									variant='outline'
									className='text-red-500 border-red-500 hover:bg-red-50'
								>
									<Trash2 className='w-4 h-4 mr-2' />
									Hammasini o'chirish
								</Button>
							)}
						</div>
					</div>
				</section>

				{/* Favorites List */}
				<section className='max-w-7xl mx-auto px-4 lg:px-8 py-8'>
					{favoriteBuilders.length > 0 ? (
						<>
							<p className='text-gray-600 mb-6'>
								<span className='font-semibold text-gray-900'>
									{favoriteBuilders.length}
								</span>{" "}
								ta usta saqlangan
							</p>

							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
								{favoriteBuilders.map((builder, index) => (
									<div
										key={builder.id}
										className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border'
									>
										{/* Builder Image */}
										<div className='relative h-48'>
											<img
												src={builderImages[index % builderImages.length]}
												alt={builder.name}
												className='w-full h-full object-cover'
											/>
											<button
												onClick={() => removeFavorite(builder.id)}
												className='absolute top-4 right-4 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors'
											>
												<Heart className='w-5 h-5 fill-white' />
											</button>
											{builder.topRated && (
												<div className='absolute top-4 left-4 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full'>
													Top Usta
												</div>
											)}
										</div>

										{/* Builder Info */}
										<div className='p-5'>
											<div className='flex justify-between items-start mb-3'>
												<div>
													<h3 className='font-bold text-lg'>{builder.name}</h3>
													<p className='text-orange-600 font-medium'>
														{builder.profession}
													</p>
												</div>
												<div className='flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded'>
													<CheckCircle className='w-4 h-4' />
													<span className='text-xs font-medium'>
														Tasdiqlangan
													</span>
												</div>
											</div>

											<div className='flex items-center gap-4 text-sm text-gray-600 mb-3'>
												<div className='flex items-center gap-1'>
													<MapPin className='w-4 h-4' />
													{builder.city}
												</div>
												<div>{builder.experience} yil tajriba</div>
											</div>

											<p className='text-gray-600 text-sm mb-4 line-clamp-2'>
												{builder.bio}
											</p>

											<div className='flex items-center justify-between mb-4'>
												<div className='flex items-center gap-1'>
													<Star className='w-5 h-5 text-orange-500 fill-orange-500' />
													<span className='font-bold'>{builder.rating}</span>
													<span className='text-gray-500'>
														({builder.reviewsCount} sharh)
													</span>
												</div>
												<p className='text-green-600 font-semibold'>
													{formatPrice(builder.priceFrom)} so'm dan
												</p>
											</div>

											<div className='flex gap-2'>
												<Button
													asChild
													className='flex-1 bg-orange-600 hover:bg-orange-700 text-white'
												>
													<Link to={`/profile?id=${builder.id}`}>
														Profil ko'rish
													</Link>
												</Button>
												<Button
													variant='outline'
													className='px-4 border-orange-600 text-orange-600 hover:bg-orange-50'
												>
													<Phone className='w-4 h-4' />
												</Button>
											</div>
										</div>
									</div>
								))}
							</div>
						</>
					) : (
						<div className='text-center py-20'>
							<div className='bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6'>
								<HeartOff className='w-12 h-12 text-gray-400' />
							</div>
							<h3 className='text-2xl font-semibold mb-2'>
								Sevimlilar ro'yxati bo'sh
							</h3>
							<p className='text-gray-600 mb-6 max-w-md mx-auto'>
								Siz hali hech qanday ustani sevimlilar ro'yxatiga qo'shmagansiz.
								Ustalarni ko'rib chiqing va yoqtirganlaring yurak belgisini
								bosing.
							</p>
							<Button
								asChild
								className='bg-orange-600 hover:bg-orange-700 text-white px-8 py-6'
							>
								<Link to='/builders'>Ustalarni ko'rish</Link>
							</Button>
						</div>
					)}
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Favorites
