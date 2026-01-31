import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const SortSelect = ({
	value = "rating",
	onChange,
	options = [],
	label = "Saralash",
	placeholder = "Tanlang",
	className = "",
}) => {
	const defaultOptions = [
		{ value: "rating", label: "Reyting bo'yicha" },
		{ value: "reviews", label: "Sharhlar soni" },
		{ value: "price-low", label: "Narx: arzondan qimmatga" },
		{ value: "price-high", label: "Narx: qimmatdan arzonga" },
		{ value: "experience", label: "Tajriba bo'yicha" },
	]

	const selectOptions = options.length > 0 ? options : defaultOptions

	return (
		<div className={`flex items-center gap-2 ${className}`}>
			{label && (
				<span className='text-sm text-gray-600 whitespace-nowrap'>
					{label}:
				</span>
			)}
			<Select value={value} onValueChange={onChange}>
				<SelectTrigger className='w-48'>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent>
					{selectOptions.map((option) => (
						<SelectItem key={option.value} value={option.value}>
							{option.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}

export default SortSelect
