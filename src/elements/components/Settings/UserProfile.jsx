import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

const UserProfile = ({ user }) => {
	const [firstName, setFirstName] = useState(user?.firstName)
	const [lastName, setLastName] = useState(user?.lastName)
	const [email, setEmail] = useState(user?.email)
	const [phone, setPhone] = useState(user?.phone_number)
	const endPoint = process.env.REACT_APP_BASE_URL

	const [active, setActive] = useState(true)
	const token = localStorage.getItem('user-token')

	const handleFirstNameChange = (e) => {
		e.preventDefault()
		setFirstName(e.target.value)
	}
	const handleLastNameChange = (e) => {
		e.preventDefault()
		setLastName(e.target.value)
	}
	const handleEmailChange = (e) => {
		e.preventDefault()
		setEmail(e.target.value)
	}
	const handlePhoneChange = (e) => {
		e.preventDefault()
		setPhone(e.target.value)
	}

	const handleUpdate = async () => {
		console.log('handling')

		try {
			const updatedUser = {
				...user,
				firstName: firstName,
				lastName: lastName,
				email: email,
				phone_number: phone,
			}
			console.log('UpdatedUser', updatedUser)
			let requestData = JSON.stringify(updatedUser)

			let config = {
				method: 'PUT',
				url: `http://${endPoint}:8080/user/basic/${user._id}`,

				headers: {
					'Content-Type': 'application/json',
					token: `Bearer ${token}`,
				},
				data: requestData,
			}

			axios
				.request(config)
				.then((response) => {
					if (response.status === 200) {
						localStorage.setItem('user', requestData)
						console.log(JSON.stringify(response.data))

						Swal.fire({
							icon: 'success',
							title: ' Successfully Updated User Data ',
							showConfirmButton: false,
							timer: 2000,
						})
					}
				})
				.catch((error) => {
					console.log(error)
					Swal.fire({
						icon: 'error',
						title: error.message,
						text: error,
						showCloseButton: true,
					})
				})
		} catch (error) {
			console.error('Error updating user:', error)
		}
	}
	return (
		<>
			<div className="flex flex-wrap items-center justify-end m-4 px-6 border-b w-full">
				<label className="  py-2 text-4xl font-semibold w-11/12 font-medium text-primary ">
					Account Settings
				</label>{' '}
				<button
					type="button"
					className="text-white bg-sky-500  hover:bg-sky-700 focus:bg-sky-700 w-1/12 focus:ring-2  focus:outline-none focus:ring-secondary-light font-semibold rounded-lg text-md px-2 py-1 text-center "
					onClick={() => setActive(!active)}
				>
					Edit Info
				</button>
			</div>
			<div className="px-8">
				<div className="px-8">
					<div className="mb-6 flex items-end py-4">
						<label className="block mb-1 text-lg px-4 font-medium text-primary ">
							Firstname:
						</label>
						<input
							type="text"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
							value={firstName}
							disabled={active}
							onChange={handleFirstNameChange}
						/>
					</div>
					<div className="mb-6 flex items-end py-4">
						<label className="block mb-1 text-lg px-4 font-medium text-primary ">
							Lastname:
						</label>
						<input
							type="text"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
							value={lastName}
							disabled={active}
							onChange={handleLastNameChange}
						/>
					</div>
					<div className="mb-6 flex items-end py-4">
						<label className="block mb-1 text-lg px-4 mr-8 font-medium text-primary ">
							Email:
						</label>
						<input
							type="text"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
							value={email}
							disabled={active}
							onChange={handleEmailChange}
						/>
					</div>
					<div className="mb-6 flex items-end py-4">
						<label className="block mb-1 text-lg px-4 mr-6 font-medium text-primary ">
							Phone:
						</label>
						<input
							type="text"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
							value={phone}
							disabled={active}
							onChange={handlePhoneChange}
						/>
					</div>
					<div className="flex flex-wrap justify-end">
						<button
							onClick={handleUpdate}
							className="text-white bg-secondary-light hover:bg-secondary-dark focus:ring-2 my-4 focus:outline-none focus:ring-secondary-light font-semibold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center "
						>
							Save Changes
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default UserProfile
