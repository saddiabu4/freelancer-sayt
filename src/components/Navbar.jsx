import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Heart, Menu } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
	const location = useLocation()
	const [isScrolled, setIsScrolled] = useState(false)
	const [favoritesCount, setFavoritesCount] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	useEffect(() => {
		const savedFavorites = localStorage.getItem("favorites")
		if (savedFavorites) {
			setFavoritesCount(JSON.parse(savedFavorites).length)
		}
	}, [location])

	const isActive = (path) => location.pathname === path

	const navLinks = [
		{ href: "/builders?category=renovation", label: "Ta'mirlash" },
		{ href: "/builders?category=electrical", label: "Elektr ishlari" },
		{ href: "/builders?category=plumbing", label: "Santexnika" },
		{ href: "/builders?category=painting", label: "Bo'yoq ishlari" },
		{ href: "/builders", label: "Barcha xizmatlar" },
	]

	return (
		<header
			className={`sticky top-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-white shadow-md" : "bg-white"
			}`}
		>
			<div className='max-w-7xl mx-auto px-4 lg:px-8'>
				{/* Top Bar */}
				<nav className='py-4 flex items-center justify-between gap-4'>
					{/* Logo */}
					<Link to='/' className='flex items-center gap-2'>
						<span className='text-3xl font-bold text-orange-600'>Atif UZ</span>
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden lg:flex items-center gap-6'>
						{/* Favorites */}
						<Link
							to='/favorites'
							className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
								isActive("/favorites")
									? "text-orange-600 bg-orange-50"
									: "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
							}`}
						>
							<div className='relative'>
								<Heart className='w-5 h-5' />
								{favoritesCount > 0 && (
									<span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
										{favoritesCount}
									</span>
								)}
							</div>
							<span className='font-medium'>Sevimlilar</span>
						</Link>

						{/* Buttons */}
						<Button
							asChild
							variant='outline'
							className='border-orange-600 text-orange-600 hover:bg-orange-50'
						>
							<Link to='#'>Usta sifatida ro'yxatdan o'tish</Link>
						</Button>

						<Button asChild variant='outline'>
							<Link to='#'>Kirish</Link>
						</Button>

						<Button
							asChild
							className='bg-orange-600 hover:bg-orange-700 text-white'
						>
							<Link to='#'>Ro'yxatdan o'tish</Link>
						</Button>
					</div>

					{/* Mobile Menu */}
					<div className='flex items-center gap-3 lg:hidden'>
						<Link to='/favorites' className='relative p-2'>
							<Heart className='w-6 h-6 text-gray-600' />
							{favoritesCount > 0 && (
								<span className='absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
									{favoritesCount}
								</span>
							)}
						</Link>

						<Sheet>
							<SheetTrigger asChild>
								<Button variant='ghost' className='p-2'>
									<Menu className='w-6 h-6' />
								</Button>
							</SheetTrigger>

							<SheetContent side='right' className='w-full sm:w-80 p-0'>
								<div className='flex flex-col h-full'>
									{/* Sheet Header */}
									<div className='p-4 border-b'>
										<h2 className='text-xl font-bold text-orange-600'>
											Atif UZ
										</h2>
									</div>

									{/* Navigation Links */}
									<div className='flex-1 overflow-auto py-4'>
										<div className='space-y-1 px-4'>
											<Link
												to='/'
												className={`block px-4 py-3 rounded-lg transition-colors ${
													isActive("/")
														? "bg-orange-100 text-orange-600"
														: "hover:bg-gray-100"
												}`}
											>
												Bosh sahifa
											</Link>
											<Link
												to='/builders'
												className={`block px-4 py-3 rounded-lg transition-colors ${
													isActive("/builders")
														? "bg-orange-100 text-orange-600"
														: "hover:bg-gray-100"
												}`}
											>
												Ustalar
											</Link>
											<Link
												to='/favorites'
												className={`block px-4 py-3 rounded-lg transition-colors ${
													isActive("/favorites")
														? "bg-orange-100 text-orange-600"
														: "hover:bg-gray-100"
												}`}
											>
												Sevimlilar
											</Link>
										</div>

										<hr className='my-4' />

										<div className='px-4'>
											<p className='text-sm font-semibold text-gray-500 mb-2 px-4'>
												Xizmatlar
											</p>
											<div className='space-y-1'>
												{navLinks.map((link, index) => (
													<Link
														key={index}
														to={link.href}
														className='block px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-gray-50 rounded-lg transition-colors'
													>
														{link.label}
													</Link>
												))}
											</div>
										</div>
									</div>

									{/* Sheet Footer */}
									<div className='p-4 border-t space-y-3'>
										<Button
											asChild
											variant='outline'
											className='w-full border-orange-600 text-orange-600'
										>
											<Link to='#'>Usta sifatida ro'yxatdan o'tish</Link>
										</Button>
										<Button asChild variant='outline' className='w-full'>
											<Link to='#'>Kirish</Link>
										</Button>
										<Button
											asChild
											className='w-full bg-orange-600 hover:bg-orange-700 text-white'
										>
											<Link to='#'>Ro'yxatdan o'tish</Link>
										</Button>
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</nav>

				{/* Secondary Navigation - Desktop */}
				<nav className='hidden lg:flex items-center gap-6 py-2 border-t text-sm'>
					{navLinks.map((link, index) => (
						<Link
							key={index}
							to={link.href}
							className='text-gray-600 hover:text-orange-600 transition-colors font-medium'
						>
							{link.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	)
}

export default Navbar
