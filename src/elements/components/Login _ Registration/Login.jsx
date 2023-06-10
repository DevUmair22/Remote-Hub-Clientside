import React from 'react'
import MainLayout from '../Layout/Layout.jsx'
const Login = () => {
	return (
		<MainLayout>
			<div className="flex flex-wrap justify-center py-10">
				<div className="w-full max-w-sm p-4 border rounded-lg shadow sm:p-6 md:p-8 bg-teal-950 border-gray-500">
					<form className="space-y-6" action="#">
						<h5 className="text-2xl font-bold text-gray-100 text-center">
							Sign In
						</h5>
						<div>
							<label
								for="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Email or username
							</label>
							<input
								type="email"
								name="email"
								id="email"
								className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:border-secondary-light block w-full p-2.5"
								placeholder="name@company.com"
								required
							/>
						</div>
						<div>
							<label
								for="password"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:border-secondary-light block w-full p-2.5 "
								required
							/>
						</div>
						<div className="flex items-start">
							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input
										id="remember"
										type="checkbox"
										value=""
										className="w-4 h-4 rounded bg-gray-50 accent-secondary-light"
										required
									/>
								</div>
								<label
									for="remember"
									className="ml-2 text-sm font-medium text-gray-100 "
								>
									Remember me
								</label>
							</div>
							<a
								href="#"
								className="ml-auto text-sm text-secondary-light hover:underline "
							>
								Forgot Password?
							</a>
						</div>
						<button
							type="submit"
							className=" flex mx-auto w-[2/4] text-white bg-secondary-light scale-100 hover:bg-secondary-dark focus:bg-secondary-dark hover:text-gray-100 font-bold rounded-lg text-md px-10 py-2 text-center "
						>
							Continue
						</button>
						<div className="text-sm font-medium text-gray-500 dark:text-gray-300">
							Not registered?{' '}
							<a href="#" className="text-secondary-light hover:underline ">
								Create account
							</a>
						</div>
					</form>
				</div>
			</div>
		</MainLayout>
	)
}

export default Login
