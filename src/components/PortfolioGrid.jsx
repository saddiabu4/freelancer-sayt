import ImageModal from "@/components/ImageModal"
import { useState } from "react"

import uy1 from "@/images/uy1.png"
import uy2 from "@/images/uy2.png"
import uy3 from "@/images/uy3.png"
import uy5 from "@/images/uy5.png"
import uy6 from "@/images/uy6.png"

const defaultImages = [uy1, uy2, uy3, uy5, uy6]

const PortfolioGrid = ({ works = [], images = defaultImages }) => {
	const [selectedIndex, setSelectedIndex] = useState(null)

	const handlePrevious = () => {
		setSelectedIndex((prev) => (prev === 0 ? works.length - 1 : prev - 1))
	}

	const handleNext = () => {
		setSelectedIndex((prev) => (prev === works.length - 1 ? 0 : prev + 1))
	}

	if (!works || works.length === 0) {
		return (
			<p className='text-gray-500 text-center py-8'>Hali ishlar qo'shilmagan</p>
		)
	}

	return (
		<>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				{works.map((work, index) => (
					<div
						key={work.id || index}
						className='group cursor-pointer'
						onClick={() => setSelectedIndex(index)}
					>
						<div className='relative overflow-hidden rounded-xl'>
							<img
								src={images[index % images.length]}
								alt={work.title}
								className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
							/>
							<div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center'>
								<span className='text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium'>
									Ko'rish
								</span>
							</div>
						</div>
						<p className='mt-2 font-medium'>{work.title}</p>
					</div>
				))}
			</div>

			{/* Image Modal */}
			<ImageModal
				isOpen={selectedIndex !== null}
				image={
					selectedIndex !== null ? images[selectedIndex % images.length] : null
				}
				title={selectedIndex !== null ? works[selectedIndex]?.title : null}
				onClose={() => setSelectedIndex(null)}
				onPrevious={works.length > 1 ? handlePrevious : null}
				onNext={works.length > 1 ? handleNext : null}
				showNavigation={works.length > 1}
			/>
		</>
	)
}

export default PortfolioGrid
