import React from 'react'
import MainLayout from '../Layout/Layout.jsx'
const Register = () => {
	return (
		<MainLayout>
			<div className="flex flex-wrap justify-center py-10">
				<div class="flex flex-col bg-primary text-secondary-light items-center mx-auto pt-2  rounded-lg divide-y divide-secondary-light divide-dashed">
					<p className="text-2xl text-gray-100 py-4 font-bold">
						Register an account
					</p>

					<div class="w-full bg-teal-950 border-gray-500 rounded-b-lg shadow md:mt-0 sm:max-w-md xl:p-0">
						<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
							<form class="space-y-4 md:space-y-6" action="#">
								<div>
									<label
										htmlFor="countries"
										class="block mb-2 text-sm font-medium text-white "
									>
										Select Role Type
									</label>
									<select
										id="role"
										class="bg-gray-100 border-2  border border-teal-600 text-gray-900 text-sm rounded-lg  focus:outline-none focus:ring-1 focus:ring-secondary-light block w-full p-2.5 "
									>
										<option value="serviceprovider" selected>
											Service Provider
										</option>
										<option value="buyer">Buyer</option>
									</select>
								</div>
								<div className="flex justify-between">
									<div>
										<label
											htmlFor="firstname"
											className="block mb-1 text-sm font-medium text-white "
										>
											FirstName
										</label>
										<input
											type="text"
											name="firstname"
											id="firstname"
											class="bg-gray-50 border-2  border border-teal-600 text-black sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary-light block w-full p-2.5"
											placeholder="First Name"
											required=""
										/>
									</div>
									<div>
										<label
											htmlFor="lastname"
											className="block mb-1 text-sm font-medium text-white "
										>
											LastName
										</label>
										<input
											type="text"
											name="lastname"
											id="lastname"
											placeholder="Last Name"
											class="bg-gray-50 border-2  border border-teal-600 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary-light block w-full p-2.5"
											required=""
										/>
									</div>
								</div>
								<div className="flex justify-between">
									<div>
										<label
											htmlFor="email"
											className="block mb-1 text-sm font-medium text-white "
										>
											Email Address
										</label>
										<input
											type="email"
											name="email"
											id="email"
											class="bg-gray-50 border-2  border border-teal-600 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary-light block w-full p-2.5"
											placeholder="Example@email.com"
											required=""
										/>
									</div>
									<div>
										<label
											htmlFor="phone"
											className="block mb-1 text-sm font-medium text-white "
										>
											Phone #
										</label>
										<input
											type="number"
											name="phone"
											id="phone"
											placeholder="+123456789"
											class="bg-gray-50 border-2  border border-teal-600 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary-light block w-full p-2.5 "
											required=""
										/>
									</div>
								</div>
								<div className="flex justify-between">
									<div>
										<label
											htmlFor="password"
											className="block mb-1 text-sm font-medium text-white "
										>
											Password
										</label>
										<input
											type="password"
											name="password"
											id="password"
											class="bg-gray-50 border-2  border border-teal-600 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary-light block w-full p-2.5"
											placeholder="Password"
											required=""
										/>
									</div>
									<div>
										<label
											htmlFor="cpassword"
											className="block mb-1 text-sm font-medium text-white "
										>
											Confirm Password
										</label>
										<input
											type="password"
											name="cpassword"
											id="cpassword"
											placeholder="Confirm Password"
											class="bg-gray-50 border-2 border border-teal-600 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary-light block w-full p-2.5 "
											required=""
										/>
									</div>
								</div>

								<div class="flex items-center justify-between">
									<div class="flex items-start">
										<div class="flex items-center h-5">
											<input
												id="remember"
												aria-describedby="remember"
												type="checkbox"
												class="w-4 h-4 border border-gray-300 rounded bg-gray-50 accent-teal-400 focus:ring-3 focus:ring-primary-300 "
												required=""
											/>
										</div>
										<div class="ml-3 text-sm">
											<label
												htmlFor="remember"
												className="block mb-1 text-sm font-light text-white "
											>
												By{' '}
												<span className="text-secondary-light font-medium">
													Creating an Account,
												</span>{' '}
												you accept that you read and agree to our{' '}
												<span className="text-secondary-light">
													Terms of Use.
												</span>
											</label>
										</div>
									</div>
								</div>
								<div className="flex justify-center ">
									<button className="text-lg bg-secondary-light px-10 py-2 font-bold text-white rounded-xl">
										Register
									</button>
								</div>

								<p class="text-sm font-light text-gray-200 ">
									Already have an account?{' '}
									<a
										href="/login"
										class=" text-secondary-light font-bold hover:underline "
									>
										LogIn
									</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}

export default Register
