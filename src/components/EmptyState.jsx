import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const EmptyState = ({
	icon: Icon,
	title = "Hech narsa topilmadi",
	description = "Hozircha bu yerda hech narsa yo'q",
	actionText,
	actionLink,
	onAction,
}) => {
	return (
		<div className='text-center py-16'>
			{Icon && (
				<div className='bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6'>
					<Icon className='w-10 h-10 text-gray-400' />
				</div>
			)}
			<h2 className='text-2xl font-bold mb-2'>{title}</h2>
			<p className='text-gray-600 mb-6 max-w-md mx-auto'>{description}</p>
			{actionText && (actionLink || onAction) && (
				<>
					{actionLink ? (
						<Button
							asChild
							className='bg-orange-600 hover:bg-orange-700 text-white px-8 py-6'
						>
							<Link to={actionLink}>{actionText}</Link>
						</Button>
					) : (
						<Button
							onClick={onAction}
							className='bg-orange-600 hover:bg-orange-700 text-white px-8 py-6'
						>
							{actionText}
						</Button>
					)}
				</>
			)}
		</div>
	)
}

export default EmptyState
