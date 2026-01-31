import { Skeleton } from "@/components/ui/skeleton"

const SkeletonCard = () => {
	return (
		<div className='bg-white rounded-xl overflow-hidden shadow-sm border'>
			{/* Image skeleton */}
			<Skeleton className='h-48 w-full rounded-none' />

			{/* Content skeleton */}
			<div className='p-5'>
				<div className='flex justify-between items-start mb-3'>
					<div className='space-y-2'>
						<Skeleton className='h-5 w-32' />
						<Skeleton className='h-4 w-20' />
					</div>
					<Skeleton className='h-6 w-24 rounded' />
				</div>

				<div className='flex items-center gap-4 mb-3'>
					<Skeleton className='h-4 w-24' />
					<Skeleton className='h-4 w-28' />
				</div>

				<div className='space-y-2 mb-4'>
					<Skeleton className='h-4 w-full' />
					<Skeleton className='h-4 w-3/4' />
				</div>

				<div className='flex items-center justify-between mb-4'>
					<Skeleton className='h-5 w-28' />
					<Skeleton className='h-5 w-32' />
				</div>

				<div className='flex gap-2'>
					<Skeleton className='h-10 flex-1' />
					<Skeleton className='h-10 w-12' />
				</div>
			</div>
		</div>
	)
}

export default SkeletonCard
