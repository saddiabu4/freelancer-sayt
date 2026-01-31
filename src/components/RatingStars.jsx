import { Star } from "lucide-react"

const RatingStars = ({
	rating = 0,
	maxRating = 5,
	size = "default",
	showValue = false,
	interactive = false,
	onChange,
}) => {
	const sizeClasses = {
		sm: "w-4 h-4",
		default: "w-5 h-5",
		lg: "w-6 h-6",
		xl: "w-8 h-8",
	}

	const handleClick = (index) => {
		if (interactive && onChange) {
			onChange(index + 1)
		}
	}

	return (
		<div className='flex items-center gap-1'>
			<div className='flex'>
				{[...Array(maxRating)].map((_, index) => {
					const isFilled = index < Math.round(rating)
					const isHalf = rating > index && rating < index + 1

					return (
						<button
							key={index}
							type='button'
							onClick={() => handleClick(index)}
							disabled={!interactive}
							className={`${
								interactive
									? "cursor-pointer hover:scale-110"
									: "cursor-default"
							} transition-transform`}
						>
							<Star
								className={`${sizeClasses[size]} ${
									isFilled
										? "text-orange-500 fill-orange-500"
										: isHalf
										? "text-orange-500 fill-orange-200"
										: "text-gray-300"
								}`}
							/>
						</button>
					)
				})}
			</div>
			{showValue && (
				<span className='ml-1 font-semibold text-gray-700'>
					{rating.toFixed(1)}
				</span>
			)}
		</div>
	)
}

export default RatingStars
