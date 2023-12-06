import React, { useState } from 'react'
const SellerProfile = () => {
	const [divs, setDivs] = useState(1)
	const [divss, setDivss] = useState(1)
	const [portfolioDiv, setPortfolioDiv] = useState(1)
	const renderDivs = () => {
		console.log('rendered')
		const array = []
		for (let index = 0; index < divs; index++) {
			array.push(
				<div
					key={index}
					className="border border-1 border-gray-300 py-8 rounded-xl shadow-lg my-8"
				>
					<div className=" px-4 flex justify-around py-4">
						<div className="pb-2 w-1/4 mx-4">
							{' '}
							<label
								htmlFor="cname"
								className="block mb-1 text-lg  font-medium text-primary "
							>
								Organization Name:
							</label>
							<input
								type="text"
								id="cname"
								className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
								placeholder="umair"
							/>
						</div>
						<div className="pb-2 w-1/4 mx-4">
							<label
								htmlFor="pname"
								className="block mb-1 text-lg  font-medium text-primary "
							>
								Toltal Experience:
							</label>
							<input
								type="text"
								id="name"
								className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
								placeholder="umair"
							/>
						</div>
						<div className="pb-2 w-1/4 mx-4">
							{' '}
							<label
								htmlFor="cname"
								className="block mb-1 text-lg  font-medium text-primary "
							>
								Role / Position:
							</label>
							<input
								type="text"
								id="cname"
								className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
								placeholder="umair"
							/>
						</div>
						<div className="pb-2 w-1/4 mx-4">
							<label
								htmlFor="pname"
								className="block mb-1 text-lg  font-medium text-primary "
							>
								Role Description:
							</label>
							<input
								type="text"
								id="name"
								className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
								placeholder="umair"
							/>
						</div>
					</div>
					<div className=" px-4 flex justify-around py-4">
						<div className="pb-2 w-1/4 mx-4">
							{' '}
							<label
								htmlFor="cname"
								className="block mb-1 text-lg  font-medium text-primary "
							>
								Start Date:
							</label>
							<input
								type="text"
								id="cname"
								className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
								placeholder="umair"
							/>
						</div>
						<div className="pb-2 w-1/4 mx-4">
							<label
								htmlFor="pname"
								className="block mb-1 text-lg  font-medium text-primary "
							>
								End Date:
							</label>
							<input
								type="text"
								id="name"
								className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
								placeholder="umair"
							/>
						</div>
						<div className="pb-2 w-2/4 mx-4">
							{' '}
							<label
								htmlFor="cname"
								className="block mb-1 text-lg  font-medium text-primary "
							>
								Skills Involved:
							</label>
							<input
								type="text"
								id="cname"
								className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
								placeholder="umair"
							/>
						</div>
					</div>
					<div className="flex justify-end px-8">
						{' '}
						<button
							type="button"
							className="text-white bg-secondary-light hover:bg-secondary-dark focus:ring-2 my-4 focus:outline-none focus:ring-secondary-light font-semibold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center "
						>
							Add Experience
						</button>
					</div>
				</div>
			)
		}
		console.log(array)
		return array
	}

	const renderDivss = () => {
		console.log('rendered')
		const array = []
		for (let index = 0; index < divss; index++) {
			array.push(
				<div
					key={index}
					className="border border-1 border-gray-300 py-4 rounded-xl shadow-lg my-8 flex flex-wrap px-6"
				>
					{' '}
					<div className="mb-6 w-2/4 mx-auto px-2  flex items-center">
						{' '}
						<label className="block mx-2 text-md  font-medium text-primary ">
							Title:
						</label>
						<input
							type="text"
							className="bg-gray-100 border border-gray-300 mx-auto text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-1.5 "
						/>
					</div>
					<div className="mb-6 w-2/4 mx-auto flex px-2 items-center">
						{' '}
						<label className="block  text-md  font-medium text-primary ">
							Certificate Link:
						</label>
						<input
							type="text"
							className="bg-gray-100 border border-gray-300 mx-auto text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-1.5 "
						/>
					</div>
				</div>
			)
		}
		console.log(array)
		return array
	}

	const renderPortfolioDiv = () => {
		console.log('rendered')
		const array = []
		for (let index = 0; index < portfolioDiv; index++) {
			array.push(
				<div
					key={index}
					className="border border-1 border-gray-300 py-4 rounded-xl shadow-lg my-8 flex flex-wrap px-6"
				>
					{' '}
					<div className="w-full flex ">
						<div className="mb-6 w-2/4 mx-auto px-2  flex items-center">
							{' '}
							<label className="block mx-2 text-md  font-medium text-primary ">
								Title:
							</label>
							<input
								type="text"
								className="bg-gray-100 border border-gray-300 mx-auto text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-1.5 "
							/>
						</div>
						<div className="mb-6 w-2/4 mx-auto flex px-2 items-center">
							{' '}
							<label className="block  text-md  font-medium text-primary ">
								Certificate Link:
							</label>
							<input
								type="text"
								className="bg-gray-100 border border-gray-300 mx-auto text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-1.5 "
							/>
						</div>
					</div>
					<div className="w-full flex ">
						<div className="mb-6 w-2/4 mx-auto px-2  flex items-center">
							{' '}
							<label className="block mx-2 text-md  font-medium text-primary ">
								Title:
							</label>
							<input
								type="text"
								className="bg-gray-100 border border-gray-300 mx-auto text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-1.5 "
							/>
						</div>
						<div className="mb-6 w-2/4 mx-auto flex px-2 items-center">
							{' '}
							<label className="block  text-md  font-medium text-primary ">
								Certificate Link:
							</label>
							<input
								type="text"
								className="bg-gray-100 border border-gray-300 mx-auto text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-1.5 "
							/>
						</div>
					</div>
				</div>
			)
		}
		console.log(array)
		return array
	}

	const handlePortfolio = () => {
		setPortfolioDiv(divs + 1)
	}
	const handleExperience = () => {
		setDivs(divs + 1)
	}

	const handleAchievements = () => {
		setDivss(divs + 1)
	}

	return (
		<>
			{' '}
			<div className="py-2 text-4xl px-8 text-primary mt-4 font-semibold border-b ">
				Seller Profile
			</div>
			<form onSubmit={(e) => e.preventDefault()}>
				<div className=" px-4 flex justify-around py-4">
					<div className="pb-2 w-1/4 px-14 mx-4 flex flex-col items-center">
						<input
							type="upload"
							className="bg-gray-100 border h-32 w-32 border-gray-300 text-gray-900 text-sm rounded-full focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block p-2.5 "
						/>
						<label className="block  w-full text-md text-center py-2 font-medium text-primary ">
							Profile Picture
						</label>
					</div>
				</div>
				<div className="  flex justify-around py-4 px-8">
					<div className="pb-2 w-full mx-4 flex items-center">
						<label className="block mb-1 w-1/4 text-lg  font-medium text-primary ">
							About Yourself:
						</label>
						<textarea
							name="message"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5  h-32"
							rows="10"
							cols="30"
							placeholder="I am John and I am a Web Developer."
						></textarea>
					</div>
				</div>
				<div className=" px-4 flex justify-around py-4">
					<div className="pb-2 w-2/4 mx-4">
						{' '}
						<label
							htmlFor="cname"
							className="block mb-1 text-lg  font-medium text-primary "
						>
							Profile Title:
						</label>
						<input
							type="text"
							id="cname"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
							placeholder="umair"
						/>
					</div>
					<div className="pb-2 w-2/4 mx-4">
						<label
							htmlFor="pname"
							className="block mb-1 text-lg  font-medium text-primary "
						>
							Province/State:
						</label>
						<input
							type="text"
							id="name"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
							placeholder="umair"
						/>
					</div>
				</div>
				<div className="mb-2 px-4 flex justify-around py-4">
					<div className="mb-6 w-2/4 mx-4">
						{' '}
						<label
							htmlFor="city"
							className="block mb-1 text-lg  font-medium text-primary "
						>
							City:
						</label>
						<input
							type="text"
							id="city"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
							placeholder="Los Angeles"
						/>
					</div>
					<div className="mb-6 w-2/4 mx-4">
						<label
							htmlFor="post"
							className="block mb-1 text-lg  font-medium text-primary "
						>
							Languages:
						</label>
						<input
							type="text"
							id="post"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
							placeholder="Urdu,English"
						/>
					</div>
				</div>
				<div className="mb-2 px-4 flex justify-around py-4">
					<div className="mb-6 w-2/4 mx-4">
						{' '}
						<label
							htmlFor="city"
							className="block mb-1 text-lg  font-medium text-primary "
						>
							Skills:
						</label>
						<input
							type="text"
							id="city"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
							placeholder="Los Angeles"
						/>
					</div>
					<div className="mb-6 w-2/4 mx-4">
						<label
							htmlFor="post"
							className="block mb-1 text-lg  font-medium text-primary "
						>
							Known Technologies:
						</label>
						<input
							type="text"
							id="post"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
							placeholder="Urdu,English"
						/>
					</div>
				</div>{' '}
				<div className="flex justify-end  mx-4 border-b">
					<label className="block w-full  py-2  text-2xl font-semibold  font-medium text-primary ">
						Experience:
					</label>{' '}
					<button
						type="button"
						className="text-white bg-secondary-light hover:bg-secondary-dark focus:ring-2 my-2 focus:outline-none focus:ring-secondary-light font-semibold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center "
						onClick={() => handleExperience()}
					>
						+
					</button>
				</div>
				<div className="text-lg text-gray-100 w-full flex justify-center flex-col px-16">
					{renderDivs()}
				</div>
				<div className="flex justify-end  mx-4 mb-2 border-b">
					<label className="block w-full  py-2  text-2xl font-semibold  font-medium text-primary ">
						Social Accounts:
					</label>{' '}
				</div>
				<div className="mb-2 px-4 flex justify-start py-4 flex flex-wrap rounded-xl border shadow-xl mx-12 my-4">
					<div className="mb-6 w-1/4 mx-auto px-2">
						{' '}
						<label className="block mb-1 text-lg  font-medium text-primary ">
							Linked In:
						</label>
						<input
							type="text"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
						/>
					</div>
					<div className="mb-6 w-1/4 mx-auto px-2">
						{' '}
						<label className="block mb-1 text-lg  font-medium text-primary ">
							Github:
						</label>
						<input
							type="text"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
						/>
					</div>
					<div className="mb-6 w-1/4 mx-auto px-2">
						{' '}
						<label className="block mb-1 text-lg  font-medium text-primary ">
							Hacker Rank:
						</label>
						<input
							type="text"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
						/>
					</div>
					<div className="mb-6 w-1/4 mx-auto px-2">
						{' '}
						<label className="block mb-1 text-lg  font-medium text-primary ">
							Stack Overflow:
						</label>
						<input
							type="text"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
						/>
					</div>
				</div>{' '}
				<div className="flex flex-wrap items-center justify-end m-4 px-6 border-b w-full">
					<label className="  py-2 text-2xl font-semibold w-11/12 font-medium text-primary ">
						Achievements:
					</label>{' '}
					<button
						type="button"
						className="text-white bg-secondary-light w-1/12 hover:bg-secondary-dark focus:ring-2  focus:outline-none focus:ring-secondary-light font-semibold rounded-lg text-md px-2 py-1 text-center "
						onClick={() => handleAchievements()}
					>
						+Add New
					</button>
				</div>
				<div className="text-lg text-gray-100 w-full flex justify-center flex-col px-8">
					{renderDivss()}
				</div>
				<div className="flex flex-wrap items-center justify-end m-4 px-6 border-b w-full">
					<label className="  py-2 text-2xl font-semibold w-11/12 font-medium text-primary ">
						Portfolio
					</label>{' '}
					<button
						type="button"
						className="text-white bg-secondary-light w-1/12 hover:bg-secondary-dark focus:ring-2  focus:outline-none focus:ring-secondary-light font-semibold rounded-lg text-md px-2 py-1 text-center "
						onClick={() => handlePortfolio()}
					>
						+Add New
					</button>
				</div>
				<div className="text-lg text-gray-100 w-full flex justify-center flex-col px-8">
					{renderPortfolioDiv()}
				</div>
				<div className="flex justify-end px-8">
					{' '}
					<button
						type="button"
						className="text-white bg-secondary-light hover:bg-secondary-dark focus:ring-2 my-4 focus:outline-none focus:ring-secondary-light font-semibold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center "
					>
						Save Changes
					</button>
				</div>
			</form>
		</>
	)
}

export default SellerProfile
