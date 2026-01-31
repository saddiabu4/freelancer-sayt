import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

const FavoriteButton = ({
	isFavorite = false,
	onClick,
	size = "default",
	showText = false,
	className = "",
}) => {
	const sizeClasses = {
		sm: "p-1.5",
		default: "p-2",
		lg: "p-3",
	}

	const iconSizes = {
		sm: "w-4 h-4",
		default: "w-5 h-5",
		lg: "w-6 h-6",
	}

	return (
		<Button
			onClick={onClick}
			variant='ghost'
			className={`rounded-full transition-all ${
				isFavorite
					? "bg-red-500 text-white hover:bg-red-600"
					: "bg-white/90 text-gray-600 hover:bg-white hover:text-red-500"
			} ${sizeClasses[size]} ${className}`}
		>
			<Heart
				className={`${iconSizes[size]} ${isFavorite ? "fill-current" : ""}`}
			/>
			{showText && (
				<span className='ml-2'>
					{isFavorite ? "Sevimlilardan olib tashlash" : "Sevimlilarga qo'shish"}
				</span>
			)}
		</Button>
	)
}

export default FavoriteButton
