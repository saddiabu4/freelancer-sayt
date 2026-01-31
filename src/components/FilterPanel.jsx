import { Button } from "@/components/ui/button"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

const FilterPanel = ({
	cities = [],
	professions = [],
	selectedCity,
	setSelectedCity,
	selectedProfession,
	setSelectedProfession,
	priceRange,
	setPriceRange,
	minRating,
	setMinRating,
	onClear,
}) => {
	const formatPrice = (price) => {
		return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0"
	}

	return (
		<div className='p-6 bg-gray-50 rounded-xl border'>
			<div className='flex justify-between items-center mb-4'>
				<h3 className='font-semibold'>Filterlar</h3>
				<Button
					variant='ghost'
					size='sm'
					onClick={onClear}
					className='text-orange-600 hover:text-orange-700'
				>
					Tozalash
				</Button>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				{/* City Select */}
				<div>
					<label className='block text-sm font-medium mb-2'>Shahar</label>
					<Select value={selectedCity} onValueChange={setSelectedCity}>
						<SelectTrigger>
							<SelectValue placeholder='Barcha shaharlar' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='all'>Barcha shaharlar</SelectItem>
							{cities.map((city) => (
								<SelectItem key={city} value={city}>
									{city}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				{/* Profession Select */}
				<div>
					<label className='block text-sm font-medium mb-2'>Kasb</label>
					<Select
						value={selectedProfession}
						onValueChange={setSelectedProfession}
					>
						<SelectTrigger>
							<SelectValue placeholder='Barcha kasblar' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='all'>Barcha kasblar</SelectItem>
							{professions.map((prof) => (
								<SelectItem key={prof} value={prof}>
									{prof}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				{/* Price Range */}
				<div>
					<label className='block text-sm font-medium mb-2'>
						Narx diapazoni: {formatPrice(priceRange?.[0])} -{" "}
						{formatPrice(priceRange?.[1])} so'm
					</label>
					<Slider
						value={priceRange}
						onValueChange={setPriceRange}
						min={0}
						max={500000}
						step={10000}
						className='mt-4'
					/>
				</div>

				{/* Min Rating */}
				<div>
					<label className='block text-sm font-medium mb-2'>
						Minimal reyting
					</label>
					<Select
						value={minRating?.toString()}
						onValueChange={(v) => setMinRating?.(parseFloat(v))}
					>
						<SelectTrigger>
							<SelectValue placeholder='Minimal reyting' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='0'>Hammasi</SelectItem>
							<SelectItem value='3'>3+ yulduz</SelectItem>
							<SelectItem value='4'>4+ yulduz</SelectItem>
							<SelectItem value='4.5'>4.5+ yulduz</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</div>
	)
}

export default FilterPanel
