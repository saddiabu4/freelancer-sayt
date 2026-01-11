import React from "react"

const SortSelect = () => {
	return (
		<div>
			<label htmlFor='sort' className='block text-sm font-medium text-gray-700'>
				Sort by:
			</label>
			<select
				id='sort'
				name='sort'
				className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
			>
				<option value='latest'>Latest</option>
				<option value='oldest'>Oldest</option>
				<option value='highest-rated'>Highest Rated</option>
				<option value='lowest-rated'>Lowest Rated</option>
			</select>
		</div>
	)
}

export default SortSelect
