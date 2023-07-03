import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
const Settings = () => {
	const scrollToSection = (event, sectionId) => {
		event.preventDefault()

		const section = document.getElementById(sectionId)
		section.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<>
			<div className="mx-14">
				<ul className="flex justify-center flex-wrap px-10 py-10 w-full h-8">
					<li className="px-4 font-semibold text-lg text-primary hover:text-secondary-dark hover:underline">
						<a
							href="#account"
							onClick={(event) => scrollToSection(event, 'account')}
						>
							Account
						</a>
					</li>
					<li className="px-4 font-semibold text-lg text-primary hover:text-secondary-dark hover:underline">
						<a
							href="#security"
							onClick={(event) => scrollToSection(event, 'security')}
						>
							Security
						</a>
					</li>
					<li className="px-4 font-semibold text-lg text-primary hover:text-secondary-dark hover:underline">
						<a
							href="#billing"
							onClick={(event) => scrollToSection(event, 'billing')}
						>
							Billing and Payments
						</a>
					</li>
				</ul>
				<div className="py-4 px-4 border mb-8 divide-y">
					<div id="account">
						<div className="py-4 text-4xl px-8 text-primary mt-4 font-semibold">
							Account Settings
						</div>
						<div className="px-8">
							<form>
								<div className="px-8">
									<div className="mb-6 flex items-end py-4">
										<label
											for="firstname"
											className="block mb-1 text-lg px-4 font-medium text-primary "
										>
											Firstname:
										</label>
										<input
											type="text"
											id="firstname"
											className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
											placeholder="umair"
										/>
									</div>
									<div className="mb-6 flex items-end py-4">
										<label
											for="lastname"
											className="block mb-1 text-lg px-4 font-medium text-primary "
										>
											Lastname:
										</label>
										<input
											type="text"
											id="lastname"
											className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
											placeholder="malik"
										/>
									</div>
									<div className="mb-6 flex items-end py-4">
										<label
											for="email"
											className="block mb-1 text-lg px-4 mr-8 font-medium text-primary "
										>
											Email:
										</label>
										<input
											type="text"
											id="email"
											className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
											placeholder="umair22@gmail.com"
										/>
									</div>
									<div className="mb-6 flex items-end py-4">
										<label
											for="email"
											className="block mb-1 text-lg px-4 mr-6 font-medium text-primary "
										>
											Phone:
										</label>
										<input
											type="text"
											id="email"
											className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
											placeholder="0345-1234456"
										/>
									</div>
									<div className="flex justify-end">
										{' '}
										<button
											type="submit"
											className="text-white bg-secondary-light hover:bg-secondary-dark focus:ring-2 my-4 focus:outline-none focus:ring-secondary-light font-semibold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center "
										>
											Save Changes
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>

					<div id="security">
						<div className="py-4 text-4xl px-8 text-primary mt-4 font-semibold">
							Security Settings
						</div>
						<div className="px-8 divide-y">
							<form>
								<div className="mb-6 flex justify-around items-end py-4">
									<label
										for="opassword"
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
										for="npassword"
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
										for="cnpassword"
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
									8 characters or longer. Combine upper and lowercase letters
									and numbers.
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
										for="vfone"
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
										for="secphrase"
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
					</div>
					<div id="billing " className="divide-y">
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
											for="name"
											className="block mb-1 text-lg  font-medium text-primary "
										>
											FullName:
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
											for="name"
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
								<div className=" px-4 flex justify-around py-4">
									<div className="pb-2 w-2/4 mx-4">
										{' '}
										<label
											for="cname"
											className="block mb-1 text-lg  font-medium text-primary "
										>
											Country:
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
											for="pname"
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
								<div className="mb-2 mx-4 px-4 justify-around py-4">
									<label
										for="address"
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
											for="city"
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
											for="post"
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
										for="vat"
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
					</div>
				</div>
			</div>
		</>
	)
}

export default Settings
