import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<header>
			<div className='w-full'>
				<nav className='pt-4 lg:px-20 flex items-center justify-between gap-4'>
					<h1 className='text-3xl font-bold font-mono text-orange-600'>
						<Link to='/'>atif</Link>
					</h1>

					<div className='flex items-center gap-2'>
						<Sheet>
							<SheetTrigger asChild>
								<Button variant='outline' className='md:hidden p-2'>
									<Menu />
								</Button>
							</SheetTrigger>

							<SheetContent side='right' className='w-3/4 sm:w-1/2'>
								<div className='flex flex-col gap-6 mt-8'>
									<div className='flex flex-col gap-3 text-sm font-medium'>
										<Link
											to='/'
											className='hover:underline decoration-orange-600'
										>
											Ichki dizayn
										</Link>
										<Link
											to='/'
											className='hover:underline decoration-orange-600'
										>
											Tashqi dizayn
										</Link>
										<Link
											to='/'
											className='hover:underline decoration-orange-600'
										>
											Maysazor va bog'
										</Link>
										<Link
											to='/'
											className='hover:underline decoration-orange-600'
										>
											Ko‘proq
										</Link>
										<Link
											to='/'
											className='hover:underline decoration-orange-600'
										>
											Maqolalar va maslahatlar
										</Link>
									</div>

									<hr />
									<Button asChild variant='outline' className='w-full'>
										<Link to='/'>Professional sahifa</Link>
									</Button>

									<Button asChild variant='outline' className='w-full'>
										<Link to='/'>Login</Link>
									</Button>

									<Button
										asChild
										className='bg-orange-600 hover:bg-orange-700 text-white w-full'
									>
										<Link to='/'>Sign Up</Link>
									</Button>
								</div>
							</SheetContent>
						</Sheet>

						<div className='hidden md:flex items-center gap-2'>
							<Button
								asChild
								variant='outline bg-white'
								className='hover:underline'
							>
								<Link to='/'>Professional sahifa</Link>
							</Button>
							<Button asChild variant='outline'>
								<Link to='/'>Login</Link>
							</Button>
							<Button
								asChild
								className='bg-orange-600 hover:bg-orange-700 text-white'
							>
								<Link to='/'>Sign Up</Link>
							</Button>
						</div>
					</div>
				</nav>

				<nav className='hidden md:flex lg:px-20 items-center gap-4 text-sm font-medium my-2'>
					<Link className='hover:underline decoration-orange-600' to='/'>
						Ichki dizayn
					</Link>
					<Link className='hover:underline decoration-orange-600' to='/'>
						Tashqi dizayn
					</Link>
					<Link className='hover:underline decoration-orange-600' to='/'>
						Maysazor va bog'
					</Link>
					<Link className='hover:underline decoration-orange-600' to='/'>
						Ko‘proq
					</Link>
					<Link className='hover:underline decoration-orange-600' to='/'>
						Maqolalar va maslahatlar
					</Link>
				</nav>
			</div>
		</header>
	)
}

export default Navbar
