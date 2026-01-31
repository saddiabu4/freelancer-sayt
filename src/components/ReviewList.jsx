import RatingStars from "@/components/RatingStars"
import { Button } from "@/components/ui/button"
import { Calendar, ThumbsUp, User } from "lucide-react"

const ReviewList = ({
	reviews = [],
	showWriteButton = true,
	onWriteReview,
}) => {
	const formatDate = (dateStr) => {
		const date = new Date(dateStr)
		return date.toLocaleDateString("uz-UZ", {
			year: "numeric",
			month: "long",
			day: "numeric",
		})
	}

	return (
		<div>
			{showWriteButton && (
				<div className='flex justify-between items-center mb-6'>
					<h2 className='text-xl font-bold'>Mijoz sharhlari</h2>
					<Button
						onClick={onWriteReview}
						className='bg-orange-600 hover:bg-orange-700 text-white'
					>
						Sharh yozish
					</Button>
				</div>
			)}

			{reviews && reviews.length > 0 ? (
				<div className='space-y-6'>
					{reviews.map((review) => (
						<div
							key={review.id}
							className='border-b pb-6 last:border-0 last:pb-0'
						>
							<div className='flex justify-between items-start mb-3'>
								<div className='flex items-center gap-3'>
									<div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center'>
										<User className='w-6 h-6 text-orange-600' />
									</div>
									<div>
										<p className='font-semibold'>{review.user}</p>
										<RatingStars rating={review.rating} size='sm' />
									</div>
								</div>
								<div className='flex items-center gap-2 text-sm text-gray-500'>
									<Calendar className='w-4 h-4' />
									{formatDate(review.date)}
								</div>
							</div>
							<p className='text-gray-700 ml-15'>{review.comment}</p>
							<div className='flex items-center gap-4 mt-3 ml-15'>
								<button className='flex items-center gap-1 text-sm text-gray-500 hover:text-orange-600 transition-colors'>
									<ThumbsUp className='w-4 h-4' />
									Foydali
								</button>
							</div>
						</div>
					))}
				</div>
			) : (
				<p className='text-gray-500 text-center py-8'>Hali sharhlar yo'q</p>
			)}
		</div>
	)
}

export default ReviewList
