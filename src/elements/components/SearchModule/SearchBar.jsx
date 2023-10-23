import React from 'react'

const SearchBar = ({ color }) => {
	return (
		<div>
			<form>
				<div
					className={
						color === '#10BCAD' ? 'relative w-full h-2/3' : 'relative w-full'
					}
				>
					<input
						type="search"
						className={
							color === '#10BCAD'
								? 'block rounded-md p-1.5 h-full w-full z-20 text-md text-primary bg-gray-100 border-2 border border-[#10BCAD] focus:outline-none focus:ring-green-600 focus:ring-1 placeholder:italic '
								: 'block rounded-md p-3 w-full z-20 text-md text-primary bg-gray-100 border-2 border border-green-600 focus:outline-none focus:ring-green-600 focus:ring-1 '
						}
						placeholder="Developers, Managers, Designers.."
					/>
					<button
						type="submit"
						className={
							color === '#10BCAD'
								? 'absolute top-0 right-0 p-1.5 text-md h-full w-1/10 text-white bg-[#10BCAD] rounded-r-lg border border-[#10BCAD] hover:bg-secondary-dark focus:outline-none focus:bg-secondary-dark'
								: 'absolute top-0 right-0 p-2.5 text-md h-full w-1/12 text-white bg-green-600 rounded-r-lg border border-green-600 hover:bg-green-700 focus:outline-none focus:bg-green-800'
						}
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
