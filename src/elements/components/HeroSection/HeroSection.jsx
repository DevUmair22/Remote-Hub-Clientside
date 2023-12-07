import React from 'react'
import SearchBar from '../SearchModule/SearchBar'
const HeroSection = () => {
	const handleSearchedData = (data) => {
		console.log('Data received from child:', data)
	}
	return (
		<div className="w-full h-[86vh] mx-auto p-10 text-white bg-green-950 flex items-center">
			<div className="mx-auto w-[60%]">
				<div className="py-5 flex tagline">
					<h1 className="text-6xl text-center px-4 font-bold mx-auto">
						Hire IT Professionals From Pakistan
					</h1>
				</div>
				<div className="">
					<SearchBar onSearchedData={handleSearchedData} />
					<div className="flex flex-wrap py-6 px-2 items-center">
						<span className="text-md">Popular:</span>
						<ul className="px-4 flex">
							<li className="border border-white p-1 px-2 rounded-xl text-sm mr-2">
								DevOps
							</li>
							<li className="border border-white p-1 px-2 rounded-xl text-sm mr-2">
								Web Designer
							</li>
							<li className="border border-white p-1 px-2 rounded-xl text-sm mr-2">
								Javascript Developer
							</li>
							<li className="border border-white p-1 px-2 rounded-xl text-sm mr-2">
								QA Expert
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroSection
