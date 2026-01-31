import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const ImageModal = ({
	isOpen = false,
	image,
	title,
	onClose,
	onPrevious,
	onNext,
	showNavigation = false,
}) => {
	if (!isOpen || !image) return null

	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose?.()
		}
	}

	return (
		<div
			className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'
			onClick={handleBackdropClick}
		>
			{/* Close Button */}
			<Button
				onClick={onClose}
				variant='ghost'
				className='absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2'
			>
				<X className='w-6 h-6' />
			</Button>

			{/* Navigation Buttons */}
			{showNavigation && onPrevious && (
				<Button
					onClick={onPrevious}
					variant='ghost'
					className='absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full p-3'
				>
					<ChevronLeft className='w-8 h-8' />
				</Button>
			)}

			{showNavigation && onNext && (
				<Button
					onClick={onNext}
					variant='ghost'
					className='absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full p-3'
				>
					<ChevronRight className='w-8 h-8' />
				</Button>
			)}

			{/* Image */}
			<div className='max-w-5xl max-h-[90vh] overflow-hidden'>
				<img
					src={image}
					alt={title || "Rasm"}
					className='max-w-full max-h-[85vh] object-contain rounded-lg'
				/>
				{title && (
					<p className='text-white text-center mt-4 text-lg font-medium'>
						{title}
					</p>
				)}
			</div>
		</div>
	)
}

export default ImageModal
