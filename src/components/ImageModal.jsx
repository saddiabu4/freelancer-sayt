const ImageModal = () => {
	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
			<div className='bg-white p-4 rounded-lg'>
				<h2 className='text-xl font-bold mb-2'>Image Title</h2>
				<img
					src='image-url.jpg'
					alt='Image Description'
					className='w-full h-auto'
				/>
				<button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'>
					Close
				</button>
			</div>
		</div>
	)
}

export default ImageModal
