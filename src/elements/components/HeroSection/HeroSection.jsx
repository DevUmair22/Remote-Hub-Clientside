import React from 'react'

const HeroSection = () => {
	return (
		<div className="w-full h-[86vh] mx-auto p-10 text-white bg-green-950 flex items-center">
			<div className="mx-auto w-[60%]">
				<div className="py-5 flex tagline">
					<h1 className="text-6xl text-center px-4 font-bold mx-auto">
						Hire IT Professionals From Pakistan
					</h1>
				</div>
				<div className="">
					<div>
						<form>
							<div className="flex">
								<div className="relative w-full">
									<input
										type="search"
										className="block rounded-md p-3 w-full z-20 text-md text-primary bg-gray-100 border-2 border border-green-600 focus:outline-none focus:ring-green-600 focus:ring-1 "
										placeholder="Developers, Managers, Designers etc"
									/>
									<button
										type="submit"
										className="absolute top-0 right-0 p-2.5 text-md h-full w-1/12 text-white bg-green-600 rounded-r-lg border border-green-600 hover:bg-green-700 focus:outline-none focus:bg-green-800"
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
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
											></path>
										</svg>
									</button>
								</div>
							</div>
						</form>
					</div>
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
