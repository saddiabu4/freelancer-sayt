import React from "react"

const BuilderCard = () => {
	return (
		<div className='border border-gray-200 rounded-lg p-4'>
			<h3 className='text-lg font-bold mb-2'>Builder Name</h3>
			<p className='text-gray-600 mb-4'>
				Short description of the builder's services.
			</p>
			<button className='bg-blue-500 text-white px-4 py-2 rounded'>
				View Portfolio
			</button>
		</div>
	)
}

export default BuilderCard
