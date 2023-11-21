import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import MainLayout from '../Layout/Layout.jsx'

const Register = () => {
	const navigate = useNavigate()
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [roleType, setRoleType] = useState('')
	const [password1, setPassword1] = useState('')
	const [password2, setPassword2] = useState('')
	const [confirmedPassword, setConfirmedPassword] = useState('')
	const [status, setStatus] = useState('')

	const handleSubmit = async () => {
		try {
			const response = await axios.post(
				`http://localhost:8080/user/register/`,
				{
					firstName,
					lastName,
					email,
					phoneNumber,
					roleType,
					confirmedPassword,
				}
			)

			if (response.status === 201) {
				setStatus('Registration Successful!')
				Swal.fire({
					icon: 'success',
					title: status,
					showConfirmButton: false,
					timer: 2000,
				}).then(() => {
					navigate('/home')
				})
			} else {
				setStatus('Registration failed.')
				console.log('first', response)
				Swal.fire({
					icon: 'error',
					title: status,
					text: response.error,
					showCloseButton: true,
				})
			}
		} catch (error) {
			setStatus(`An error occurred during registration.   `)
			Swal.fire({
				icon: 'error',
				title: status,
				text: error,
				showCloseButton: true,
			})
		}
	}
	const handleFirstNameChange = (e) => {
		setFirstName(e.target.value)
		if (!e.target.value.match(/^[a-zA-Z\s]+$/)) {
			setStatus('Name Should be Alphabet')
			return
		} else {
			setStatus('')
		}
	}
	const handleLastNameChange = (e) => {
		setLastName(e.target.value)
		if (!e.target.value.match(/^[a-zA-Z\s]+$/)) {
			setStatus('Name Should be Alphabet')
			return
		} else {
			setStatus('')
		}
	}
	const hanldeEmailChange = (e) => {
		setEmail(e.target.value)
		if (
			!e.target.value.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
		) {
			setStatus('invalid email')
			return
		} else {
			setStatus('')
		}
	}
	const hanldePhoneChange = (e) => {
		setPhoneNumber(e.target.value)
		if (
			!e.target.value.match(
				/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/
			)
		) {
			setStatus('Invalid Syntax')
			return
		} else {
			setStatus('')
		}
	}

	const handlePasswordValidation = (e) => {
		setPassword1(e.target.value)
		if (password1.length < 8 && !password1.match(/[!@#%^&*]/)) {
			setStatus(
				'Password must be at least 8 characters long. Must contain 1 Capital Albhabet and 1 Special Chracter'
			)
			return
		} else {
			setStatus('')
		}
	}

	const hanldePasswordConfirmation = (e) => {
		password1 && setPassword2(e.target.value)

		if (password1 === password2) {
			setConfirmedPassword(e.target.value)
		}
	}
	return (
		<MainLayout>
			<div className="flex flex-wrap justify-center py-10">
				<div className="flex flex-col bg-primary text-secondary-light items-center mx-auto pt-2  rounded-lg divide-y divide-secondary-light divide-dashed">
					<p className="text-2xl text-gray-100 py-4 font-bold">
						Register an account
					</p>

					<div className="w-full bg-teal-950 border-gray-500 rounded-b-lg shadow md:mt-0 sm:max-w-md xl:p-0">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<form className="space-y-4 md:space-y-6" action={handleSubmit}>
								<div>
									<label
										htmlFor="countries"
										className="block mb-2 text-sm font-medium text-white "
									>
										Select Role Type
									</label>
									<select
										id="role"
										className="bg-gray-100 border-2  border border-teal-600 text-gray-900 text-sm rounded-lg  focus:outline-none focus:ring-1 focus:ring-secondary-light block w-full p-2.5 "
										onChange={(e) => setRoleType(e.target.value)}
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
											className="bg-gray-50 border-2  border border-teal-600 text-black sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary-light block w-full p-2.5"
											placeholder="First Name"
											required=""
											onChange={handleFirstNameChange}
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
											className="bg-gray-50 border-2  border border-teal-600 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary-light block w-full p-2.5"
											required=""
											onChange={handleLastNameChange}
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
											className="bg-gray-50 border-2  border border-teal-600 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary-light block w-full p-2.5"
											placeholder="Example@email.com"
											required=""
											onChange={hanldeEmailChange}
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
											className="bg-gray-50 border-2  border border-teal-600 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary-light block w-full p-2.5 "
											required=""
											onChange={hanldePhoneChange}
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
											className="bg-gray-50 border-2  border border-teal-600 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary-light block w-full p-2.5"
											placeholder="Password"
											required=""
											onChange={handlePasswordValidation}
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
											className="bg-gray-50 border-2 border border-teal-600 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary-light block w-full p-2.5 "
											required=""
											onChange={hanldePasswordConfirmation}
										/>
									</div>
								</div>

								<div className="flex items-center justify-between">
									<div className="flex items-start">
										<div className="flex items-center h-5">
											<input
												id="remember"
												aria-describedby="remember"
												type="checkbox"
												className="w-4 h-4 border border-gray-300 rounded bg-gray-50 accent-teal-400 focus:ring-3 focus:ring-primary-300 "
												required=""
											/>
										</div>
										<div className="ml-3 text-sm">
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

								<p className="text-sm font-light text-gray-200 ">
									Already have an account?{' '}
									<a
										href="/login"
										className=" text-secondary-light font-bold hover:underline "
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
