import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import buildersData from "@/data/db.json"
import {
	Briefcase,
	Calendar,
	CheckCircle,
	ChevronLeft,
	Clock,
	Heart,
	MapPin,
	MessageSquare,
	Phone,
	Share2,
	Star,
	ThumbsUp,
	User,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

import uy1 from "@/images/uy1.png"
import uy2 from "@/images/uy2.png"
import uy3 from "@/images/uy3.png"
import uy5 from "@/images/uy5.png"
import uy6 from "@/images/uy6.png"

const builderImages = [uy1, uy2, uy3]
const workImages = [uy1, uy2, uy3, uy5, uy6]

const Profile = () => {
	const [searchParams] = useSearchParams()
	const [builder, setBuilder] = useState(null)
	const [isFavorite, setIsFavorite] = useState(false)
	const [selectedImage, setSelectedImage] = useState(null)

	useEffect(() => {
		const builderId = searchParams.get("id") || "1"
		const foundBuilder = buildersData.builders.find((b) => b.id === builderId)
		setBuilder(foundBuilder || buildersData.builders[0])

		// Check if in favorites
		const savedFavorites = localStorage.getItem("favorites")
		if (savedFavorites) {
			const favorites = JSON.parse(savedFavorites)
			setIsFavorite(favorites.includes(builderId))
		}
	}, [searchParams])

	const toggleFavorite = () => {
		const savedFavorites = localStorage.getItem("favorites")
		let favorites = savedFavorites ? JSON.parse(savedFavorites) : []

		if (isFavorite) {
			favorites = favorites.filter((id) => id !== builder.id)
		} else {
			favorites.push(builder.id)
		}

		localStorage.setItem("favorites", JSON.stringify(favorites))
		setIsFavorite(!isFavorite)
	}

	const formatPrice = (price) => {
		return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0"
	}

	const formatDate = (dateStr) => {
		const date = new Date(dateStr)
		return date.toLocaleDateString("uz-UZ", {
			year: "numeric",
			month: "long",
			day: "numeric",
		})
	}

	if (!builder) {
		return (
			<>
				<Navbar />
				<div className='min-h-screen flex items-center justify-center'>
					<p>Yuklanmoqda...</p>
				</div>
			</>
		)
	}

	return (
		<>
			<Navbar />
			<main className='bg-gray-50 min-h-screen'>
				{/* Back Button */}
				<div className='max-w-7xl mx-auto px-4 lg:px-8 py-4'>
					<Link
						to='/builders'
						className='inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors'
					>
						<ChevronLeft className='w-5 h-5' />
						Orqaga
					</Link>
				</div>

				{/* Profile Header */}
				<section className='bg-white border-b'>
					<div className='max-w-7xl mx-auto px-4 lg:px-8 py-8'>
						<div className='flex flex-col lg:flex-row gap-8'>
							{/* Profile Image */}
							<div className='lg:w-1/3'>
								<div className='relative'>
									<img
										src={
											builderImages[parseInt(builder.id) % builderImages.length]
										}
										alt={builder.name}
										className='w-full h-72 lg:h-80 object-cover rounded-xl'
									/>
									{builder.topRated && (
										<div className='absolute top-4 left-4 bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2'>
											<Star className='w-4 h-4 fill-white' />
											Top Usta
										</div>
									)}
								</div>
							</div>

							{/* Profile Info */}
							<div className='lg:w-2/3'>
								<div className='flex flex-col sm:flex-row justify-between items-start gap-4 mb-4'>
									<div>
										<div className='flex items-center gap-3 mb-2'>
											<h1 className='text-3xl font-bold'>{builder.name}</h1>
											<div className='flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full'>
												<CheckCircle className='w-4 h-4' />
												<span className='text-sm font-medium'>
													Tasdiqlangan
												</span>
											</div>
										</div>
										<p className='text-xl text-orange-600 font-semibold'>
											{builder.profession}
										</p>
									</div>
									<div className='flex gap-2'>
										<Button
											variant='outline'
											onClick={toggleFavorite}
											className={`px-4 ${
												isFavorite
													? "bg-red-50 border-red-500 text-red-500"
													: ""
											}`}
										>
											<Heart
												className={`w-5 h-5 ${
													isFavorite ? "fill-red-500" : ""
												}`}
											/>
										</Button>
										<Button variant='outline' className='px-4'>
											<Share2 className='w-5 h-5' />
										</Button>
									</div>
								</div>

								<div className='flex flex-wrap gap-4 mb-6'>
									<div className='flex items-center gap-2 text-gray-600'>
										<MapPin className='w-5 h-5 text-orange-500' />
										<span>{builder.city}</span>
									</div>
									<div className='flex items-center gap-2 text-gray-600'>
										<Briefcase className='w-5 h-5 text-orange-500' />
										<span>{builder.experience} yil tajriba</span>
									</div>
									<div className='flex items-center gap-2 text-gray-600'>
										<Clock className='w-5 h-5 text-orange-500' />
										<span>Dushanba - Shanba, 9:00 - 18:00</span>
									</div>
								</div>

								{/* Rating */}
								<div className='bg-orange-50 p-4 rounded-xl mb-6'>
									<div className='flex items-center gap-4'>
										<div className='text-center'>
											<div className='flex items-center gap-1'>
												<Star className='w-8 h-8 text-orange-500 fill-orange-500' />
												<span className='text-3xl font-bold'>
													{builder.rating}
												</span>
											</div>
											<p className='text-sm text-gray-600'>
												{builder.reviewsCount} sharh
											</p>
										</div>
										<div className='flex-1'>
											<div className='flex gap-1'>
												{[1, 2, 3, 4, 5].map((star) => (
													<Star
														key={star}
														className={`w-6 h-6 ${
															star <= Math.round(builder.rating)
																? "text-orange-500 fill-orange-500"
																: "text-gray-300"
														}`}
													/>
												))}
											</div>
											<p className='text-sm text-gray-600 mt-1'>
												Mijozlar tomonidan yuqori baholangan
											</p>
										</div>
									</div>
								</div>

								{/* Price & Contact */}
								<div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between'>
									<div>
										<p className='text-sm text-gray-600'>Minimal narx</p>
										<p className='text-2xl font-bold text-green-600'>
											{formatPrice(builder.priceFrom)} so'm dan
										</p>
									</div>
									<div className='flex gap-3'>
										<Button className='bg-orange-600 hover:bg-orange-700 text-white px-6 py-6'>
											<Phone className='w-5 h-5 mr-2' />
											Bog'lanish
										</Button>
										<Button
											variant='outline'
											className='border-orange-600 text-orange-600 hover:bg-orange-50 px-6 py-6'
										>
											<MessageSquare className='w-5 h-5 mr-2' />
											Xabar yuborish
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Tabs Section */}
				<section className='max-w-7xl mx-auto px-4 lg:px-8 py-8'>
					<Tabs defaultValue='about' className='w-full'>
						<TabsList className='w-full justify-start bg-white p-1 rounded-xl mb-6'>
							<TabsTrigger
								value='about'
								className='px-6 py-3 data-[state=active]:bg-orange-600 data-[state=active]:text-white rounded-lg'
							>
								Haqida
							</TabsTrigger>
							<TabsTrigger
								value='works'
								className='px-6 py-3 data-[state=active]:bg-orange-600 data-[state=active]:text-white rounded-lg'
							>
								Ishlar ({builder.works?.length || 0})
							</TabsTrigger>
							<TabsTrigger
								value='reviews'
								className='px-6 py-3 data-[state=active]:bg-orange-600 data-[state=active]:text-white rounded-lg'
							>
								Sharhlar ({builder.reviews?.length || 0})
							</TabsTrigger>
						</TabsList>

						{/* About Tab */}
						<TabsContent value='about'>
							<div className='bg-white rounded-xl p-6'>
								<h2 className='text-xl font-bold mb-4'>Usta haqida</h2>
								<p className='text-gray-700 leading-relaxed mb-6'>
									{builder.bio}
								</p>

								<h3 className='text-lg font-semibold mb-3'>Xizmat turlari</h3>
								<div className='flex flex-wrap gap-2 mb-6'>
									<span className='bg-gray-100 px-4 py-2 rounded-full text-sm'>
										{builder.profession}
									</span>
									<span className='bg-gray-100 px-4 py-2 rounded-full text-sm'>
										Ta'mirlash
									</span>
									<span className='bg-gray-100 px-4 py-2 rounded-full text-sm'>
										O'rnatish
									</span>
									<span className='bg-gray-100 px-4 py-2 rounded-full text-sm'>
										Maslahatlash
									</span>
								</div>

								<h3 className='text-lg font-semibold mb-3'>Xizmat hududlari</h3>
								<div className='flex flex-wrap gap-2'>
									<span className='bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm'>
										{builder.city}
									</span>
									<span className='bg-gray-100 px-4 py-2 rounded-full text-sm'>
										Yaqin tumanlar
									</span>
								</div>
							</div>
						</TabsContent>

						{/* Works Tab */}
						<TabsContent value='works'>
							<div className='bg-white rounded-xl p-6'>
								<h2 className='text-xl font-bold mb-4'>Bajarilgan ishlar</h2>
								{builder.works && builder.works.length > 0 ? (
									<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
										{builder.works.map((work, index) => (
											<div
												key={work.id}
												className='group cursor-pointer'
												onClick={() =>
													setSelectedImage(
														workImages[index % workImages.length]
													)
												}
											>
												<div className='relative overflow-hidden rounded-xl'>
													<img
														src={workImages[index % workImages.length]}
														alt={work.title}
														className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
													/>
													<div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors'></div>
												</div>
												<p className='mt-2 font-medium'>{work.title}</p>
											</div>
										))}
									</div>
								) : (
									<p className='text-gray-500 text-center py-8'>
										Hali ishlar qo'shilmagan
									</p>
								)}
							</div>
						</TabsContent>

						{/* Reviews Tab */}
						<TabsContent value='reviews'>
							<div className='bg-white rounded-xl p-6'>
								<div className='flex justify-between items-center mb-6'>
									<h2 className='text-xl font-bold'>Mijoz sharhlari</h2>
									<Button className='bg-orange-600 hover:bg-orange-700 text-white'>
										Sharh yozish
									</Button>
								</div>

								{builder.reviews && builder.reviews.length > 0 ? (
									<div className='space-y-6'>
										{builder.reviews.map((review) => (
											<div
												key={review.id}
												className='border-b pb-6 last:border-0'
											>
												<div className='flex justify-between items-start mb-3'>
													<div className='flex items-center gap-3'>
														<div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center'>
															<User className='w-6 h-6 text-orange-600' />
														</div>
														<div>
															<p className='font-semibold'>{review.user}</p>
															<div className='flex items-center gap-1'>
																{[1, 2, 3, 4, 5].map((star) => (
																	<Star
																		key={star}
																		className={`w-4 h-4 ${
																			star <= review.rating
																				? "text-orange-500 fill-orange-500"
																				: "text-gray-300"
																		}`}
																	/>
																))}
															</div>
														</div>
													</div>
													<div className='flex items-center gap-2 text-sm text-gray-500'>
														<Calendar className='w-4 h-4' />
														{formatDate(review.date)}
													</div>
												</div>
												<p className='text-gray-700'>{review.comment}</p>
												<div className='flex items-center gap-4 mt-3'>
													<button className='flex items-center gap-1 text-sm text-gray-500 hover:text-orange-600'>
														<ThumbsUp className='w-4 h-4' />
														Foydali
													</button>
												</div>
											</div>
										))}
									</div>
								) : (
									<p className='text-gray-500 text-center py-8'>
										Hali sharhlar yo'q
									</p>
								)}
							</div>
						</TabsContent>
					</Tabs>
				</section>

				{/* Image Modal */}
				{selectedImage && (
					<div
						className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4'
						onClick={() => setSelectedImage(null)}
					>
						<img
							src={selectedImage}
							alt='Work'
							className='max-w-full max-h-full object-contain rounded-lg'
						/>
					</div>
				)}
			</main>
			<Footer />
		</>
	)
}

export default Profile
