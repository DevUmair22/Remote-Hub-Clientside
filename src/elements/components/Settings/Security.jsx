import React from 'react'

const Security = () => {
	return (
		<>
			<div className="py-4 text-4xl px-8 text-primary mt-4 font-semibold">
				Security Settings
			</div>
			<div className="px-8">
				<form>
					<div className="mb-6 flex justify-around items-end py-4">
						<label
							htmlFor="opassword"
							className="block mb-1 text-lg px-4 font-medium text-primary "
						>
							Old Password:
						</label>
						<input
							type="password"
							id="opassword"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-3/4  p-2.5 "
						/>
					</div>
					<div className="mb-6 flex justify-around  items-end py-4">
						<label
							htmlFor="npassword"
							className="block mb-1 text-lg px-4 font-medium text-primary "
						>
							New Password:
						</label>
						<input
							type="text"
							id="npassword"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-3/4  p-2.5 "
						/>
					</div>
					<div className=" flex justify-around items-end py-4">
						<label
							htmlFor="cnpassword"
							className="block mb-1 text-lg px-4 font-medium text-primary "
						>
							Confirm Password:
						</label>
						<input
							type="text"
							id="cnpassword"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-3/4 p-2.5 "
						/>
					</div>
					<p className="pr-16 mr-16 justify-end flex text-gray-500 font-medium">
						8 characters or longer. Combine upper and lowercase letters and
						numbers.
					</p>
					<div className="flex justify-end">
						{' '}
						<button
							type="submit"
							className="text-white bg-secondary-light hover:bg-secondary-dark focus:ring-2 my-4 focus:outline-none focus:ring-secondary-light font-semibold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center "
						>
							Save Changes
						</button>
					</div>
				</form>
				<div>
					<div className="pt-6 pl-16 text-center">
						{' '}
						Your phone is not verified with REMOTEHUB. Click Verify Now to
						complete phone verification
					</div>
					<div className="mb-6 flex justify-around items-end py-4">
						<label
							htmlFor="vfone"
							className="block mb-1 text-lg px-4 font-medium text-primary "
						>
							Verify Phone:
						</label>
						<input
							type="number"
							id="vphone"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-2/4  p-2.5 "
							placeholder="+92 3451234123"
						/>
						<button
							type="submit"
							className="text-white bg-secondary-light hover:bg-secondary-dark focus:ring-2 focus:outline-none focus:ring-secondary-light font-semibold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center "
						>
							Verify Now
						</button>
					</div>
					<div className="mb-6 flex justify-around items-end py-4">
						<label
							htmlFor="secphrase"
							className="block mb-1 text-lg px-4 font-medium text-primary "
						>
							Security Phrase:
						</label>
						<input
							type="text"
							id="secphrase"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-2/4  p-2.5 "
							placeholder="Shaun the Sheep"
						/>
						<button
							type="submit"
							className="text-white bg-secondary-light hover:bg-secondary-dark focus:ring-2 focus:outline-none focus:ring-secondary-light font-semibold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center "
						>
							Verify Now
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Security
