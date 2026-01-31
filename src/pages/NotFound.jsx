import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, Search } from "lucide-react"
import { Link } from "react-router-dom"

const NotFound = () => {
	return (
		<>
			<Navbar />
			<main className='bg-gray-50 min-h-screen flex items-center justify-center'>
				<div className='text-center px-4'>
					<div className='relative'>
						<h1 className='text-[150px] md:text-[200px] font-bold text-gray-200 leading-none'>
							404
						</h1>
						<div className='absolute inset-0 flex items-center justify-center'>
							<Search className='w-20 h-20 md:w-32 md:h-32 text-orange-600 opacity-50' />
						</div>
					</div>

					<h2 className='text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4'>
						Sahifa topilmadi
					</h2>
					<p className='text-gray-600 text-lg mb-8 max-w-md mx-auto'>
						Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki boshqa manzilga
						ko'chirilgan bo'lishi mumkin.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Button
							asChild
							className='bg-orange-600 hover:bg-orange-700 text-white px-8 py-6'
						>
							<Link to='/'>
								<Home className='w-5 h-5 mr-2' />
								Bosh sahifaga
							</Link>
						</Button>
						<Button
							asChild
							variant='outline'
							className='border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6'
						>
							<Link to='/builders'>
								<ArrowLeft className='w-5 h-5 mr-2' />
								Ustalarni ko'rish
							</Link>
						</Button>
					</div>

					{/* Helpful Links */}
					<div className='mt-12 pt-8 border-t'>
						<p className='text-gray-600 mb-4'>
							Quyidagi sahifalar foydali bo'lishi mumkin:
						</p>
						<div className='flex flex-wrap justify-center gap-4'>
							<Link to='/' className='text-orange-600 hover:underline'>
								Bosh sahifa
							</Link>
							<span className='text-gray-300'>|</span>
							<Link to='/builders' className='text-orange-600 hover:underline'>
								Ustalar
							</Link>
							<span className='text-gray-300'>|</span>
							<Link to='/favorites' className='text-orange-600 hover:underline'>
								Sevimlilar
							</Link>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default NotFound
