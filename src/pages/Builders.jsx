import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import buildersData from "@/data/db.json"
import {
	CheckCircle,
	ChevronDown,
	Filter,
	Heart,
	MapPin,
	Phone,
	Search,
	Star,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

import uy1 from "@/images/uy1.png"
import uy2 from "@/images/uy2.png"
import uy3 from "@/images/uy3.png"

const builderImages = [uy1, uy2, uy3]

const Builders = () => {
	const [searchParams] = useSearchParams()
	const [builders, setBuilders] = useState([])
	const [filteredBuilders, setFilteredBuilders] = useState([])
	const [searchQuery, setSearchQuery] = useState("")
	const [selectedCity, setSelectedCity] = useState("all")
	const [selectedProfession, setSelectedProfession] = useState("all")
	const [priceRange, setPriceRange] = useState([0, 500000])
	const [minRating, setMinRating] = useState(0)
	const [sortBy, setSortBy] = useState("rating")
	const [showFilters, setShowFilters] = useState(false)
	const [favorites, setFavorites] = useState([])

	useEffect(() => {
		// Load builders from data
		setBuilders(buildersData.builders)
		setFilteredBuilders(buildersData.builders)

		// Load favorites from localStorage
		const savedFavorites = localStorage.getItem("favorites")
		if (savedFavorites) {
			setFavorites(JSON.parse(savedFavorites))
		}

		// Check URL params for category
		const category = searchParams.get("category")
		if (category) {
			// Map category to profession
			const categoryMap = {
				electrical: "Elektrik",
				plumbing: "Santexnik",
				handyman: "Usta",
				concrete: "Betonchi",
				welding: "Payvandchi",
			}
			if (categoryMap[category]) {
				setSelectedProfession(categoryMap[category])
			}
		}
	}, [searchParams])

	useEffect(() => {
		let result = [...builders]

		// Search filter
		if (searchQuery) {
			result = result.filter(
				(b) =>
					b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					b.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
					b.bio.toLowerCase().includes(searchQuery.toLowerCase())
			)
		}

		// City filter
		if (selectedCity !== "all") {
			result = result.filter((b) => b.city === selectedCity)
		}

		// Profession filter
		if (selectedProfession !== "all") {
			result = result.filter((b) => b.profession === selectedProfession)
		}

		// Price filter
		result = result.filter(
			(b) => b.priceFrom >= priceRange[0] && b.priceFrom <= priceRange[1]
		)

		// Rating filter
		if (minRating > 0) {
			result = result.filter((b) => b.rating >= minRating)
		}

		// Sorting
		switch (sortBy) {
			case "rating":
				result.sort((a, b) => b.rating - a.rating)
				break
			case "reviews":
				result.sort((a, b) => b.reviewsCount - a.reviewsCount)
				break
			case "price-low":
				result.sort((a, b) => a.priceFrom - b.priceFrom)
				break
			case "price-high":
				result.sort((a, b) => b.priceFrom - a.priceFrom)
				break
			case "experience":
				result.sort((a, b) => b.experience - a.experience)
				break
			default:
				break
		}

		setFilteredBuilders(result)
	}, [
		builders,
		searchQuery,
		selectedCity,
		selectedProfession,
		priceRange,
		minRating,
		sortBy,
	])

	const toggleFavorite = (builderId) => {
		let newFavorites
		if (favorites.includes(builderId)) {
			newFavorites = favorites.filter((id) => id !== builderId)
		} else {
			newFavorites = [...favorites, builderId]
		}
		setFavorites(newFavorites)
		localStorage.setItem("favorites", JSON.stringify(newFavorites))
	}

	const clearFilters = () => {
		setSearchQuery("")
		setSelectedCity("all")
		setSelectedProfession("all")
		setPriceRange([0, 500000])
		setMinRating(0)
	}

	const formatPrice = (price) => {
		return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}

	return (
		<>
			<Navbar />
			<main className='bg-gray-50 min-h-screen'>
				{/* Header Section */}
				<section className='bg-white border-b'>
					<div className='max-w-7xl mx-auto px-4 lg:px-8 py-8'>
						<h1 className='text-3xl font-bold mb-2'>
							Hududingizdagi eng yaxshi ustalar
						</h1>
						<p className='text-gray-600'>
							Tasdiqlangan va ishonchli ustalarni toping
						</p>

						{/* Search Bar */}
						<div className='mt-6 flex flex-col md:flex-row gap-4'>
							<div className='relative flex-1'>
								<Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
								<Input
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									placeholder='Usta yoki xizmat turini qidiring...'
									className='pl-12 py-6 rounded-lg border-gray-300'
								/>
							</div>
							<Button
								onClick={() => setShowFilters(!showFilters)}
								variant='outline'
								className='flex items-center gap-2 py-6 px-6'
							>
								<Filter className='w-5 h-5' />
								Filterlar
								<ChevronDown
									className={`w-4 h-4 transition-transform ${
										showFilters ? "rotate-180" : ""
									}`}
								/>
							</Button>
						</div>

						{/* Filters Panel */}
						{showFilters && (
							<div className='mt-6 p-6 bg-gray-50 rounded-xl border'>
								<div className='flex justify-between items-center mb-4'>
									<h3 className='font-semibold'>Filterlar</h3>
									<Button
										variant='ghost'
										size='sm'
										onClick={clearFilters}
										className='text-orange-600 hover:text-orange-700'
									>
										Tozalash
									</Button>
								</div>
								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
									{/* City Select */}
									<div>
										<label className='block text-sm font-medium mb-2'>
											Shahar
										</label>
										<Select
											value={selectedCity}
											onValueChange={setSelectedCity}
										>
											<SelectTrigger>
												<SelectValue placeholder='Barcha shaharlar' />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value='all'>Barcha shaharlar</SelectItem>
												{buildersData.cities.map((city) => (
													<SelectItem key={city} value={city}>
														{city}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</div>

									{/* Profession Select */}
									<div>
										<label className='block text-sm font-medium mb-2'>
											Kasb
										</label>
										<Select
											value={selectedProfession}
											onValueChange={setSelectedProfession}
										>
											<SelectTrigger>
												<SelectValue placeholder='Barcha kasblar' />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value='all'>Barcha kasblar</SelectItem>
												{buildersData.professions.map((prof) => (
													<SelectItem key={prof} value={prof}>
														{prof}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</div>

									{/* Price Range */}
									<div>
										<label className='block text-sm font-medium mb-2'>
											Narx diapazoni: {formatPrice(priceRange[0])} -{" "}
											{formatPrice(priceRange[1])} so'm
										</label>
										<Slider
											value={priceRange}
											onValueChange={setPriceRange}
											min={0}
											max={500000}
											step={10000}
											className='mt-4'
										/>
									</div>

									{/* Min Rating */}
									<div>
										<label className='block text-sm font-medium mb-2'>
											Minimal reyting
										</label>
										<Select
											value={minRating.toString()}
											onValueChange={(v) => setMinRating(parseFloat(v))}
										>
											<SelectTrigger>
												<SelectValue placeholder='Minimal reyting' />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value='0'>Hammasi</SelectItem>
												<SelectItem value='3'>3+ yulduz</SelectItem>
												<SelectItem value='4'>4+ yulduz</SelectItem>
												<SelectItem value='4.5'>4.5+ yulduz</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>
							</div>
						)}
					</div>
				</section>

				{/* Results Section */}
				<section className='max-w-7xl mx-auto px-4 lg:px-8 py-8'>
					{/* Sort & Results Count */}
					<div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6'>
						<p className='text-gray-600'>
							<span className='font-semibold text-gray-900'>
								{filteredBuilders.length}
							</span>{" "}
							ta usta topildi
						</p>
						<div className='flex items-center gap-2'>
							<span className='text-sm text-gray-600'>Saralash:</span>
							<Select value={sortBy} onValueChange={setSortBy}>
								<SelectTrigger className='w-48'>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='rating'>Reyting bo'yicha</SelectItem>
									<SelectItem value='reviews'>Sharhlar soni</SelectItem>
									<SelectItem value='price-low'>
										Narx: arzondan qimmatga
									</SelectItem>
									<SelectItem value='price-high'>
										Narx: qimmatdan arzonag
									</SelectItem>
									<SelectItem value='experience'>Tajriba bo'yicha</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					{/* Builders Grid */}
					{filteredBuilders.length > 0 ? (
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
							{filteredBuilders.map((builder, index) => (
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
											onClick={() => toggleFavorite(builder.id)}
											className={`absolute top-4 right-4 p-2 rounded-full ${
												favorites.includes(builder.id)
													? "bg-red-500 text-white"
													: "bg-white/90 text-gray-600 hover:bg-white"
											}`}
										>
											<Heart
												className={`w-5 h-5 ${
													favorites.includes(builder.id) ? "fill-white" : ""
												}`}
											/>
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
					) : (
						<div className='text-center py-16'>
							<div className='bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Search className='w-10 h-10 text-gray-400' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>Usta topilmadi</h3>
							<p className='text-gray-600 mb-4'>
								Filterlarni o'zgartirib ko'ring
							</p>
							<Button onClick={clearFilters} variant='outline'>
								Filterlarni tozalash
							</Button>
						</div>
					)}
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Builders
