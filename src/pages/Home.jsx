import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
	BrickWall,
	BriefcaseConveyorBelt,
	Brush,
	BrushCleaning,
	Bubbles,
	Bug,
	ChevronRight,
	DropletOff,
	House,
	HousePlus,
	Layers,
	Mail,
	Paintbrush,
	PanelsTopLeft,
	Search,
	Shield,
	Star,
	ThumbsUp,
	Trees,
	Users,
	Warehouse,
	WashingMachine,
	Wrench,
	Zap,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import bgHome1 from "@/images/home1.png"
import bgHome2 from "@/images/home2.png"
import bgHome3 from "@/images/home3.png"
import uy1 from "@/images/uy1.png"
import uy2 from "@/images/uy2.png"
import uy3 from "@/images/uy3.png"
import uy5 from "@/images/uy5.png"

const images = [bgHome1, bgHome2, bgHome3]

const categories = [
	{ icon: BriefcaseConveyorBelt, name: "Qo'lbola", slug: "handyman" },
	{ icon: Trees, name: "Obodonlashtirish", slug: "landscaping" },
	{ icon: Wrench, name: "Santexnika", slug: "plumbing" },
	{ icon: Zap, name: "Elektr", slug: "electrical" },
	{ icon: Brush, name: "Qayta ta'mirlash", slug: "renovation" },
	{ icon: HousePlus, name: "Uy qurilishi", slug: "construction" },
	{ icon: Paintbrush, name: "Bo'yash", slug: "painting" },
	{ icon: Bubbles, name: "Tozalash", slug: "cleaning" },
	{ icon: PanelsTopLeft, name: "Derazalar", slug: "windows" },
	{ icon: Layers, name: "Beton", slug: "concrete" },
]

const popularProjects = [
	{
		icon: Warehouse,
		title: "Ayvonlar va terrasalar",
		rating: 3.7,
		reviews: "1k+",
		price: "1,890,000",
	},
	{
		icon: BrushCleaning,
		title: "Uyni tozalash",
		rating: 4.5,
		reviews: "314k+",
		price: "85,000",
	},
	{
		icon: House,
		title: "Tom ta'mirlash",
		rating: 4.7,
		reviews: "613k+",
		price: "594,000",
	},
	{
		icon: BrickWall,
		title: "Devorni ta'mirlash",
		rating: 4.2,
		reviews: "4.8k+",
		price: "380,000",
	},
	{
		icon: WashingMachine,
		title: "Maishiy texnika ta'mirlash",
		rating: 4.7,
		reviews: "274k+",
		price: "264,000",
	},
	{
		icon: Bug,
		title: "Zararkunandalarga qarshi kurash",
		rating: 4.8,
		reviews: "317k+",
		price: "186,000",
	},
	{
		icon: DropletOff,
		title: "Ariq xizmatlari",
		rating: 4.0,
		reviews: "427k+",
		price: "575,000",
	},
	{
		icon: Wrench,
		title: "Santexnika xizmatlari",
		rating: 4.4,
		reviews: "26,7k+",
		price: "210,000",
	},
]

const featuredProjects = [
	{
		image: uy1,
		title: "Mayda uy ishlari uchun usta",
		rating: 4.6,
		reviews: "599k+",
		price: "158,000",
	},
	{
		image: uy2,
		title: "Hammom ta'mirlash",
		rating: 4.5,
		reviews: "245k+",
		price: "450,000",
	},
	{
		image: uy3,
		title: "Oshxona yangilash",
		rating: 4.8,
		reviews: "189k+",
		price: "890,000",
	},
	{
		image: uy5,
		title: "Pol yotqizish",
		rating: 4.4,
		reviews: "312k+",
		price: "320,000",
	},
]

const Home = () => {
	const [current, setCurrent] = useState(0)
	const [email, setEmail] = useState("")

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % images.length)
		}, 5000)

		return () => clearInterval(interval)
	}, [])

	return (
		<>
			<Navbar />
			<main className='bg-gray-50'>
				{/* Hero Section */}
				<section
					className='h-[400px] md:h-[500px] bg-cover bg-center flex items-center transition-all duration-1000 relative'
					style={{ backgroundImage: `url(${images[current]})` }}
				>
					<div className='absolute inset-0 bg-black/40'></div>
					<div className='mx-6 lg:mx-20 max-w-2xl relative z-10'>
						<h1 className='text-3xl md:text-5xl font-bold text-white leading-tight'>
							Hududingizdagi eng yuqori baholangan mutaxassislarni toping.
						</h1>
						<p className='text-white/90 mt-4 text-lg'>
							O'zbekistonning ishonchli uy xizmatlari platformasi
						</p>
						<div className='relative mt-6'>
							<Input
								className='p-7 bg-white rounded-full outline-none border-none shadow-lg'
								placeholder="Qanday xizmat kerak? (masalan: 'elektrik')"
							/>
							<Button className='absolute right-2 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-orange-700 p-3 rounded-full'>
								<Search className='text-white w-5 h-5' />
							</Button>
						</div>
						<div className='flex gap-2 mt-4'>
							{images.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrent(index)}
									className={`w-3 h-3 rounded-full transition-all ${
										current === index ? "bg-orange-600 w-6" : "bg-white/60"
									}`}
								/>
							))}
						</div>
					</div>
				</section>

				{/* Categories Section */}
				<section className='py-12'>
					<div className='max-w-7xl mx-auto px-4 lg:px-8'>
						<h2 className='text-2xl font-bold text-center mb-8'>
							Xizmat turini tanlang
						</h2>
						<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4'>
							{categories.map((cat, index) => (
								<Link
									key={index}
									to={`/builders?category=${cat.slug}`}
									className='p-4 rounded-xl cursor-pointer hover:bg-orange-50 hover:shadow-md transition-all text-center group'
								>
									<cat.icon className='w-10 h-10 mx-auto text-orange-600 mb-2 group-hover:scale-110 transition-transform' />
									<p className='text-sm font-medium text-gray-700'>
										{cat.name}
									</p>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* Popular Projects Section */}
				<section className='py-12 bg-white'>
					<div className='max-w-7xl mx-auto px-4 lg:px-8'>
						<div className='flex justify-between items-center mb-8'>
							<h2 className='text-2xl font-bold'>
								Yaqin atrofingizdagi mashhur loyihalar
							</h2>
							<Link
								to='/builders'
								className='text-orange-600 hover:underline flex items-center gap-1'
							>
								Barchasini ko'rish <ChevronRight className='w-4 h-4' />
							</Link>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
							{popularProjects.map((project, index) => (
								<Link
									key={index}
									to='/builders'
									className='flex gap-4 items-center border p-5 bg-white rounded-xl hover:shadow-lg transition-shadow cursor-pointer'
								>
									<div className='bg-orange-100 p-3 rounded-lg'>
										<project.icon className='w-8 h-8 text-orange-600' />
									</div>
									<div>
										<p className='font-semibold text-gray-800'>
											{project.title}
										</p>
										<div className='flex items-center gap-1 text-sm text-gray-600'>
											<Star className='w-4 h-4 text-orange-500 fill-orange-500' />
											{project.rating} ({project.reviews}) |{" "}
											<span className='text-green-600 font-medium'>
												{project.price} so'm
											</span>
										</div>
									</div>
								</Link>
							))}
						</div>
						<p className='mt-6 text-sm text-gray-500 text-center'>
							Ko'rsatilgan narxlar minimal ish hajmining o'rtacha narxidir.
							Haqiqiy narxlar farq qilishi mumkin.
						</p>
					</div>
				</section>

				{/* Newsletter Section */}
				<section className='py-12'>
					<div className='max-w-7xl mx-auto px-4 lg:px-8'>
						<div className='bg-gradient-to-r from-orange-500 to-orange-600 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6'>
							<div className='text-white'>
								<p className='text-2xl md:text-3xl font-bold mb-2'>
									Bilim bebaho — narxlar bo'yicha qo'llanmalarimiz bepul.
								</p>
								<p className='text-white/90'>
									Bepul loyiha xarajatlari haqida ma'lumotlarni e-pochtangizga
									oling.
								</p>
							</div>
							<div className='flex items-center gap-2 w-full md:w-auto'>
								<div className='relative flex-1 md:w-80'>
									<Mail className='absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
									<Input
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder='e-pochta manzilingiz...'
										className='py-6 pl-12 bg-white rounded-lg border-none w-full'
									/>
								</div>
								<Button className='bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-6 py-6'>
									Yuborish
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Featured Projects Section */}
				<section className='py-12 bg-white'>
					<div className='max-w-7xl mx-auto px-4 lg:px-8'>
						<h2 className='text-2xl font-bold mb-8'>Mashhur uy loyihalari</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
							{featuredProjects.map((project, index) => (
								<Link
									key={index}
									to='/builders'
									className='group cursor-pointer'
								>
									<div className='relative overflow-hidden rounded-xl'>
										<img
											src={project.image}
											alt={project.title}
											className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
										/>
										<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
										<div className='absolute bottom-4 left-4 text-white'>
											<p className='font-semibold'>{project.title}</p>
											<div className='flex items-center gap-1 text-sm'>
												<Star className='w-4 h-4 text-orange-400 fill-orange-400' />
												{project.rating} ({project.reviews})
											</div>
										</div>
									</div>
									<p className='mt-2 text-green-600 font-medium'>
										{project.price} so'm dan boshlab
									</p>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* Why Choose Us Section */}
				<section className='py-16 bg-gray-900 text-white'>
					<div className='max-w-7xl mx-auto px-4 lg:px-8'>
						<h2 className='text-3xl font-bold text-center mb-12'>
							Nega aynan bizni tanlashingiz kerak?
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							<div className='text-center'>
								<div className='bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Shield className='w-8 h-8' />
								</div>
								<h3 className='text-xl font-semibold mb-2'>
									Tasdiqlangan ustalar
								</h3>
								<p className='text-gray-400'>
									Barcha mutaxassislar tekshirilgan va tasdiqlangan. Sifat
									kafolatlanadi.
								</p>
							</div>
							<div className='text-center'>
								<div className='bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
									<ThumbsUp className='w-8 h-8' />
								</div>
								<h3 className='text-xl font-semibold mb-2'>Haqiqiy sharhlar</h3>
								<p className='text-gray-400'>
									Mijozlarning haqiqiy fikrlari asosida eng yaxshi ustalarni
									tanlang.
								</p>
							</div>
							<div className='text-center'>
								<div className='bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Users className='w-8 h-8' />
								</div>
								<h3 className='text-xl font-semibold mb-2'>Bepul xizmat</h3>
								<p className='text-gray-400'>
									Platformadan foydalanish mutlaqo bepul. Hech qanday yashirin
									to'lovlar yo'q.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Statistics Section */}
				<section className='py-16 bg-white'>
					<div className='max-w-7xl mx-auto px-4 lg:px-8'>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
							<div>
								<p className='text-4xl font-bold text-orange-600'>5000+</p>
								<p className='text-gray-600 mt-2'>Tasdiqlangan ustalar</p>
							</div>
							<div>
								<p className='text-4xl font-bold text-orange-600'>50,000+</p>
								<p className='text-gray-600 mt-2'>Bajarilgan loyihalar</p>
							</div>
							<div>
								<p className='text-4xl font-bold text-orange-600'>14</p>
								<p className='text-gray-600 mt-2'>Viloyatlarda xizmat</p>
							</div>
							<div>
								<p className='text-4xl font-bold text-orange-600'>4.8</p>
								<p className='text-gray-600 mt-2'>O'rtacha baho</p>
							</div>
						</div>
					</div>
				</section>

				{/* How It Works Section */}
				<section className='py-16 bg-gray-50'>
					<div className='max-w-7xl mx-auto px-4 lg:px-8'>
						<h2 className='text-3xl font-bold text-center mb-12'>
							Qanday ishlaydi?
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							<div className='bg-white p-8 rounded-2xl shadow-sm text-center'>
								<div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl font-bold text-orange-600'>1</span>
								</div>
								<h3 className='text-xl font-semibold mb-2'>
									Loyihangizni tasvirlang
								</h3>
								<p className='text-gray-600'>
									Qanday ish kerakligini va qachon bajarilishi kerakligini
									ayting.
								</p>
							</div>
							<div className='bg-white p-8 rounded-2xl shadow-sm text-center'>
								<div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl font-bold text-orange-600'>2</span>
								</div>
								<h3 className='text-xl font-semibold mb-2'>
									Ustalarni tanlang
								</h3>
								<p className='text-gray-600'>
									Sharhlar, baholar va narxlarni taqqoslab eng yaxshisini
									tanlang.
								</p>
							</div>
							<div className='bg-white p-8 rounded-2xl shadow-sm text-center'>
								<div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl font-bold text-orange-600'>3</span>
								</div>
								<h3 className='text-xl font-semibold mb-2'>Ishni boshlang</h3>
								<p className='text-gray-600'>
									Usta bilan bog'laning va loyihangizni amalga oshiring.
								</p>
							</div>
						</div>
						<div className='text-center mt-10'>
							<Button
								asChild
								className='bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 rounded-lg text-lg'
							>
								<Link to='/builders'>Ustalarni topish</Link>
							</Button>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className='py-16 bg-orange-600'>
					<div className='max-w-7xl mx-auto px-4 lg:px-8 text-center'>
						<h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
							Siz ham ustamisiz?
						</h2>
						<p className='text-white/90 text-lg mb-8'>
							Platformamizga qo'shiling va yangi mijozlar toping. Ro'yxatdan
							o'tish bepul!
						</p>
						<Button className='bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 rounded-lg text-lg font-semibold'>
							Usta sifatida ro'yxatdan o'tish
						</Button>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Home
