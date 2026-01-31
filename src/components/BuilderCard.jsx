import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, MapPin, Phone, Star } from "lucide-react"
import { Link } from "react-router-dom"

import uy1 from "@/images/uy1.png"
import uy2 from "@/images/uy2.png"
import uy3 from "@/images/uy3.png"

const builderImages = [uy1, uy2, uy3]

const BuilderCard = ({
	builder,
	index = 0,
	isFavorite = false,
	onToggleFavorite,
}) => {
	const formatPrice = (price) => {
		return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0"
	}

	return (
		<div className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border'>
			{/* Builder Image */}
			<div className='relative h-48'>
				<img
					src={builderImages[index % builderImages.length]}
					alt={builder.name}
					className='w-full h-full object-cover'
				/>
				<button
					onClick={() => onToggleFavorite?.(builder.id)}
					className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
						isFavorite
							? "bg-red-500 text-white"
							: "bg-white/90 text-gray-600 hover:bg-white"
					}`}
				>
					<Heart className={`w-5 h-5 ${isFavorite ? "fill-white" : ""}`} />
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
						<p className='text-orange-600 font-medium'>{builder.profession}</p>
					</div>
					<div className='flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded'>
						<CheckCircle className='w-4 h-4' />
						<span className='text-xs font-medium'>Tasdiqlangan</span>
					</div>
				</div>

				<div className='flex items-center gap-4 text-sm text-gray-600 mb-3'>
					<div className='flex items-center gap-1'>
						<MapPin className='w-4 h-4' />
						{builder.city}
					</div>
					<div>{builder.experience} yil tajriba</div>
				</div>

				<p className='text-gray-600 text-sm mb-4 line-clamp-2'>{builder.bio}</p>

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
						<Link to={`/profile?id=${builder.id}`}>Profil ko'rish</Link>
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
	)
}

export default BuilderCard
