import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
const Billing = () => {
	return (
		<>
			<div>
				{' '}
				<div className="py-4 text-4xl px-8 text-primary mt-4 font-semibold ">
					Billing
				</div>
				<form>
					<div className=" px-4 flex justify-around py-4">
						<div className="pb-2 w-2/4 mx-4">
							{' '}
							<label
								htmlFor="name"
								className="block mb-1 text-lg  font-medium text-primary "
							>
								Full Name:
							</label>
							<input
								type="text"
								id="name"
								className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
								placeholder="umair"
							/>
						</div>
						<div className="pb-2 w-2/4 mx-4">
							<label
								htmlFor="name"
								className="block mb-1 text-lg  font-medium text-primary "
							>
								Company Name:
							</label>
							<input
								type="text"
								id="name"
								className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
								placeholder="umair"
							/>
						</div>
					</div>

					<div className="mb-2 mx-4 px-4 justify-around py-4">
						<label
							htmlFor="address"
							className="block mb-1 text-lg  font-medium text-primary "
						>
							Billing Address:
						</label>
						<input
							type="text"
							id="address"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
							placeholder="19th street blah blah"
						/>
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
								className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
								placeholder="Los Angeles"
							/>
						</div>
						<div className="mb-6 w-2/4 mx-4">
							<label
								htmlFor="post"
								className="block mb-1 text-lg  font-medium text-primary "
							>
								Postal Code:
							</label>
							<input
								type="text"
								id="post"
								className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
								placeholder="121213"
							/>
						</div>
					</div>
					<div className="mb-2 mx-4 px-4 justify-around py-4">
						<label
							htmlFor="vat"
							className="block mb-1 text-lg  font-medium text-primary "
						>
							VAT Number:
						</label>
						<input
							type="number"
							id="vat"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
						/>
					</div>
					<div className="flex justify-end px-8">
						{' '}
						<button
							type="submit"
							className="text-white bg-secondary-light hover:bg-secondary-dark focus:ring-2 my-4 focus:outline-none focus:ring-secondary-light font-semibold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center "
						>
							Save Changes
						</button>
					</div>
				</form>
			</div>
			<div>
				<div className="py-4 text-4xl px-8 text-primary mt-4 font-semibold">
					Payement Methods
				</div>
				<div className="divide-y">
					<div className="py-6 px-6 text-gray-500">
						<div className="border py-6 px-6 flex font-medium items-center">
							<FontAwesomeIcon
								icon="fa-regular fa-credit-card"
								size="xl"
								className="mx-2"
							/>{' '}
							Credit Card
						</div>
					</div>
					<div className="font-bold text-lg py-6 px-6">
						+ Add a payment method
					</div>
				</div>
			</div>
		</>
	)
}

export default Billing
