import {
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Send,
	Youtube,
} from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
	return (
		<footer className='bg-gray-900 text-white'>
			<div className='max-w-7xl mx-auto px-4 lg:px-8 py-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{/* Logo & Description */}
					<div>
						<h2 className='text-3xl font-bold text-orange-500 mb-4'>Atif UZ</h2>
						<p className='text-gray-400 mb-4'>
							O'zbekistonning eng yirik uy xizmatlari platformasi. Ishonchli
							ustalarni toping va uyingizni yaxshilang.
						</p>
						<div className='flex gap-4'>
							<a
								href='#'
								className='bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors'
							>
								<Facebook className='w-5 h-5' />
							</a>
							<a
								href='#'
								className='bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors'
							>
								<Instagram className='w-5 h-5' />
							</a>
							<a
								href='#'
								className='bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors'
							>
								<Send className='w-5 h-5' />
							</a>
							<a
								href='#'
								className='bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors'
							>
								<Youtube className='w-5 h-5' />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='text-lg font-semibold mb-4'>Tez havolalar</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									to='/'
									className='text-gray-400 hover:text-orange-500 transition-colors'
								>
									Bosh sahifa
								</Link>
							</li>
							<li>
								<Link
									to='/builders'
									className='text-gray-400 hover:text-orange-500 transition-colors'
								>
									Ustalar
								</Link>
							</li>
							<li>
								<Link
									to='/favorites'
									className='text-gray-400 hover:text-orange-500 transition-colors'
								>
									Sevimlilar
								</Link>
							</li>
							<li>
								<Link
									to='#'
									className='text-gray-400 hover:text-orange-500 transition-colors'
								>
									Biz haqimizda
								</Link>
							</li>
							<li>
								<Link
									to='#'
									className='text-gray-400 hover:text-orange-500 transition-colors'
								>
									Aloqa
								</Link>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className='text-lg font-semibold mb-4'>Xizmatlar</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									to='/builders?category=electrical'
									className='text-gray-400 hover:text-orange-500 transition-colors'
								>
									Elektrik ishlari
								</Link>
							</li>
							<li>
								<Link
									to='/builders?category=plumbing'
									className='text-gray-400 hover:text-orange-500 transition-colors'
								>
									Santexnika ishlari
								</Link>
							</li>
							<li>
								<Link
									to='/builders?category=renovation'
									className='text-gray-400 hover:text-orange-500 transition-colors'
								>
									Qayta ta'mirlash
								</Link>
							</li>
							<li>
								<Link
									to='/builders?category=painting'
									className='text-gray-400 hover:text-orange-500 transition-colors'
								>
									Bo'yash ishlari
								</Link>
							</li>
							<li>
								<Link
									to='/builders?category=cleaning'
									className='text-gray-400 hover:text-orange-500 transition-colors'
								>
									Tozalash xizmatlari
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className='text-lg font-semibold mb-4'>Bog'lanish</h3>
						<ul className='space-y-3'>
							<li className='flex items-center gap-3 text-gray-400'>
								<MapPin className='w-5 h-5 text-orange-500' />
								<span>Toshkent shahri, Chilonzor tumani</span>
							</li>
							<li className='flex items-center gap-3 text-gray-400'>
								<Phone className='w-5 h-5 text-orange-500' />
								<span>+998 90 123 45 67</span>
							</li>
							<li className='flex items-center gap-3 text-gray-400'>
								<Mail className='w-5 h-5 text-orange-500' />
								<span>info@atif.uz</span>
							</li>
						</ul>
					</div>
				</div>

				<hr className='border-gray-800 my-8' />

				<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
					<p className='text-gray-400 text-sm'>
						© 2026 Atif UZ. Barcha huquqlar himoyalangan.
					</p>
					<div className='flex gap-6 text-sm'>
						<Link
							to='#'
							className='text-gray-400 hover:text-orange-500 transition-colors'
						>
							Maxfiylik siyosati
						</Link>
						<Link
							to='#'
							className='text-gray-400 hover:text-orange-500 transition-colors'
						>
							Foydalanish shartlari
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
