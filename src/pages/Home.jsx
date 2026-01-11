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
	DropletOff,
	House,
	HousePlus,
	Layers,
	Mail,
	Paintbrush,
	PanelsTopLeft,
	Search,
	Star,
	Trees,
	Warehouse,
	WashingMachine,
	Wrench,
	Zap,
} from "lucide-react"
import { useEffect, useState } from "react"

import bgHome1 from "@/images/home1.png"
import bgHome2 from "@/images/home2.png"
import bgHome3 from "@/images/home3.png"
// import uy1 from "@/images/uy1"

const images = [bgHome1, bgHome2, bgHome3]

const Home = () => {
	const [current, setCurrent] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % images.length)
		}, 5000) // 5 sekund

		return () => clearInterval(interval)
	}, [])

	return (
		<>
			<Navbar />
			<main className='bg-gray-100'>
				{/* birinchi bo'lim */}
				<section
					className='h-75 md:h-105 bg-cover bg-center flex items-center transition-all duration-1000'
					style={{ backgroundImage: `url(${images[current]})` }}
				>
					<div className='mx-6 lg:mx-20 max-w-2xl bg-black/30 p-2 sm:p-8 rounded-xl'>
						<h1 className='text-2xl md:text-4xl font-bold text-white'>
							Hududingizdagi eng yuqori baholangan mutaxassislarni toping.
						</h1>
						<div className='relative mt-6'>
							<Input
								className='p-7 bg-white rounded-2xl outline-orange-600'
								placeholder='Qidiruv...'
							/>
							<div className='absolute right-3 top-1/2 -translate-y-1/2 bg-orange-600 p-2 rounded-2xl'>
								<Search className=' text-white text-2xl' />
							</div>
						</div>
					</div>
				</section>
				{/* ikkinchi bo'lim */}
				<section>
					<div className='lg:mx-20 my-10 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6'>
						<div className='p-5 rounded cursor-pointer hover:bg-gray-200 '>
							<BriefcaseConveyorBelt className='w-12 h-12 mx-auto text-orange-600 mb-2' />
							<p className='text-sm whitespace-nowrap text-center'>Qo'lbola</p>
						</div>

						<div className='p-5 rounded cursor-pointer hover:bg-gray-200 '>
							<Trees className='w-12 h-12 mx-auto text-orange-600 mb-2' />
							<p className='text-sm whitespace-nowrap text-center'>
								Obodonlashtirish
							</p>
						</div>

						<div className='p-5 rounded cursor-pointer hover:bg-gray-200 '>
							<Wrench className='w-12 h-12 mx-auto text-orange-600 mb-2' />
							<p className='text-sm whitespace-nowrap text-center'>
								Santexnika
							</p>
						</div>

						<div className='p-5 rounded cursor-pointer hover:bg-gray-200 '>
							<Zap className='w-12 h-12 mx-auto text-orange-600 mb-2' />
							<p className='text-sm whitespace-nowrap text-center'>Elektr</p>
						</div>

						<div className='p-5 rounded cursor-pointer hover:bg-gray-200 '>
							<Brush className='w-12 h-12 mx-auto text-orange-600 mb-2' />
							<p className='text-sm whitespace-nowrap text-center'>
								Qayta ta'mirlash
							</p>
						</div>

						<div className='p-5 rounded cursor-pointer hover:bg-gray-200 '>
							<HousePlus className='w-12 h-12 mx-auto text-orange-600 mb-2' />
							<p className='text-sm whitespace-nowrap text-center'>
								Uy qurilishi
							</p>
						</div>

						<div className='p-5 rounded cursor-pointer hover:bg-gray-200 '>
							<Paintbrush className='w-12 h-12 mx-auto text-orange-600 mb-2' />
							<p className='text-sm whitespace-nowrap text-center'>Bo'yash</p>
						</div>

						<div className='p-5 rounded cursor-pointer hover:bg-gray-200 '>
							<Bubbles className='w-12 h-12 mx-auto text-orange-600 mb-2' />
							<p className='text-sm whitespace-nowrap text-center'>Tozalash</p>
						</div>

						<div className='p-5 rounded cursor-pointer hover:bg-gray-200 '>
							<PanelsTopLeft className='w-12 h-12 mx-auto text-orange-600 mb-2' />
							<p className='text-sm whitespace-nowrap text-center'>Derazalar</p>
						</div>

						<div className='p-5 rounded cursor-pointer hover:bg-gray-200 '>
							<Layers className='w-12 h-12 mx-auto text-orange-600 mb-2' />
							<p className='text-sm whitespace-nowrap text-center'>Beton</p>
						</div>
					</div>
				</section>
				{/* uchinchi bo'lim */}
				<section>
					<div className='lg:mx-20 my-10'>
						<div className='text-2xl font-bold'>
							Yaqin atrofingizdagi mashhur loyihalar
						</div>
						<div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 text-sm'>
							<div className='flex gap-5 items-center border p-5 bg-white rounded'>
								<Warehouse className='w-10 h-10 text-orange-600' />
								<div>
									<p className='text-lg font-medium'>Ayvonlar va terrasalar</p>
									<div className='flex items-center gap-1'>
										<Star className='w-4 h-4 text-orange-600' />
										3.7 (1k+) | $1,890 dan boshlab
									</div>
								</div>
							</div>
							<div className='flex gap-5 items-center border p-5 bg-white rounded'>
								<BrushCleaning className='w-10 h-10 text-orange-600' />
								<div>
									<p className='text-lg font-medium'>Tozalash Uyni tozalash</p>
									<div className='flex items-center gap-1'>
										<Star className='w-4 h-4 text-orange-600' />
										4.5 (314k+) | $85 dan boshlab{" "}
									</div>
								</div>
							</div>
							<div className='flex gap-5 items-center border p-5 bg-white rounded'>
								<House className='w-10 h-10 text-orange-600' />
								<div>
									<p className='text-lg font-medium'>Tom Tomni ta'mirlash</p>
									<div className='flex items-center gap-1'>
										{" "}
										<Star className='w-4 h-4 text-orange-600' />
										4.7 (613k+) | $594 dan boshlab
									</div>
								</div>
							</div>
							<div className='flex gap-5 items-center border p-5 bg-white rounded'>
								<BrickWall className='w-10 h-10 text-orange-600' />

								<div>
									<p className='text-lg font-medium'>Devorni ta'mirlash</p>
									<div className='flex items-center gap-1'>
										4.2 (4.8k+) | $380 dan boshlab
									</div>
								</div>
							</div>
							<div className='flex gap-5 items-center border p-5 bg-white rounded'>
								<WashingMachine className='w-10 h-10 text-orange-600' />
								<div>
									<p className='text-lg font-medium'>
										Maishiy texnika ta'mirlash
									</p>
									<div className='flex items-center gap-1'>
										<Star className='w-4 h-4 text-orange-600' />
										4.7 (274k+) | $264 dan boshlab
									</div>
								</div>
							</div>
							<div className='flex gap-5 items-center border p-5 bg-white rounded'>
								<Bug className='w-10 h-10 text-orange-600' />
								<div>
									<p className='text-lg font-medium'>
										Zararkunandalarga qarshi kurash
									</p>
									<div className='flex items-center gap-1'>
										{" "}
										<Star className='w-4 h-4 text-orange-600' />
										4.8 (317k+) | $186 dan boshlab
									</div>
								</div>
							</div>
							<div className='flex gap-5 items-center border p-5 bg-white rounded'>
								<DropletOff className='w-10 h-10 text-orange-600' />
								<div>
									<p className='text-lg font-medium'>Ariq xizmatlari</p>
									<div className='flex items-center gap-1'>
										{" "}
										<Star className='w-4 h-4 text-orange-600' />
										4.0 (427k+) | $575 dan boshlab
									</div>
								</div>
							</div>
							<div className='flex gap-5 items-center border p-5 bg-white rounded'>
								<Wrench className='w-10 h-10 text-orange-600' />

								<div>
									<p className='text-lg font-medium'>
										Santexnika Santexnika xizmatlari
									</p>
									<div className='flex items-center gap-1'>
										{" "}
										<Star className='w-4 h-4 text-orange-600' />
										4.4 (26,7k+) | $210 dan boshlab
									</div>
								</div>
							</div>
						</div>
						<p className='mt-4 text-sm text-gray-600'>
							Ko'rsatilgan narx Angi'ning oldindan belgilangan taklifi uchun
							minimal ish hajmining milliy o'rtacha narxidir. Haqiqiy narxlar
							farq qilishi mumkin.
						</p>
					</div>
				</section>
				{/* tortinchi bo'lim */}
				<section>
					<div className='lg:mx-20 my-10 bg-orange-100 p-10 rounded flex items-center justify-between'>
						<div>
							<p className='text-lg font-black mb-2 sm:text-2xl'>
								Bilim bebaho — narxlar bo‘yicha qo‘llanmalarimiz bepul.
							</p>
							<p className='text-sm sm:text-lg'>
								Bepul loyiha xarajatlari haqida ma’lumotlarni e-pochtangizga
								oling.
							</p>
						</div>
						<div className='flex items-center gap-2 relative'>
							<Input
								placeholder='e-pochta manzilingiz...'
								className='py-5 pl-13 bg-white rounded border outline-orange-600'
							/>
							<Mail className='absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5' />
							<Button className='bg-orange-600 hover:bg-orange-700 text-white rounded px-4 py-2'>
								Yuborish
							</Button>
						</div>
					</div>
				</section>
				{/* bechinchi bo'lim */}
				<section>
					<div className='lg:px-20'>
						<div className='text-lg font-black mb-2 sm:text-2xl'>
							Mashhur uy loyihalari
						</div>
						<div>
							<div>
								<p>Mayda uy ishlari uchun usta</p>
								<p>⭐ 4.6 (599k+) | narxi $158 dan boshlab</p>
								<div>
									<img src='' alt='' />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default Home
