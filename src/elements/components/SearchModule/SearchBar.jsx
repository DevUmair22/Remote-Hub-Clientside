import React, { useEffect, useState } from 'react'

const SearchBar = (props) => {
	const [searchedValue, setSearchedValue] = useState('')
	const [data, setData] = useState(null)
	const token = localStorage.getItem('user-token')
	const endPoint = process.env.REACT_APP_BASE_URL

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://${endPoint}:8080/worker/allWorkers`
				)
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const allUsers = await response.json()
				setData(allUsers)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [])
	const handleSearch = (e) => {
		e.preventDefault()
		const regex = new RegExp(searchedValue, 'i')
		const searchedData = data.filter((item) => regex.test(item.designation))
		props.onSearchedData(searchedData)
	}
	return (
		<div>
			<form>
				<div
					className={
						props.color === '#10BCAD'
							? 'relative w-full h-2/3'
							: 'relative w-full'
					}
				>
					<input
						type="search"
						className={
							props.color === '#10BCAD'
								? 'block rounded-md p-1.5 h-full w-full z-20 text-md text-primary bg-gray-100 border-2 border border-[#10BCAD] focus:outline-none focus:ring-green-600 focus:ring-1 placeholder:italic '
								: 'block rounded-md p-3 w-full z-20 text-md text-primary bg-gray-100 border-2 border border-green-600 focus:outline-none focus:ring-green-600 focus:ring-1 '
						}
						placeholder="Developers, Managers, Designers.."
						onChange={(e) => setSearchedValue(e.target.value)}
					/>
					<button
						type="submit"
						className={
							props.color === '#10BCAD'
								? 'absolute top-0 right-0 p-1.5 text-md h-full w-1/10 text-white bg-[#10BCAD] rounded-r-lg border border-[#10BCAD] hover:bg-secondary-dark focus:outline-none focus:bg-secondary-dark'
								: 'absolute top-0 right-0 p-2.5 text-md h-full w-1/12 text-white bg-green-600 rounded-r-lg border border-green-600 hover:bg-green-700 focus:outline-none focus:bg-green-800'
						}
						onClick={handleSearch}
					>
						<svg
							aria-hidden="true"
							className="w-6 h-6 mx-auto"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							></path>
						</svg>
					</button>
				</div>
			</form>
		</div>
	)
}

export default SearchBar
