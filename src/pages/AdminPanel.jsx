import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddUser from '../elements/AddUser'
import UserTable from '../elements/components/Tables/UserTable'
import WithdrawlTable from '../elements/components/Tables/WithdrawlTable'

const AdminPanel = () => {
	const endPoint = process.env.REACT_APP_BASE_URL
	const navigate = useNavigate()
	const token = localStorage.getItem('user-token')
	const [active, setActive] = useState('home')
	const [requests, setRequests] = useState([])
	const [users, setUsers] = useState([])

	const fetchUsers = async () => {
		try {
			let config = {
				method: 'get',
				url: `http://${endPoint}:8080/admin/all`,
				headers: {
					token: `Bearer ${token}`,
				},
			}

			axios.request(config).then((response) => {
				setUsers(response.data)
				console.log(users)
			})
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}

	const handleLogout = async () => {
		let config = {
			method: 'get',
			url: `http://${endPoint}:8080/user/auth/logout/`,
			headers: {
				token: `Bearer ${token}`,
			},
		}
		console.log(config.headers)
		await axios
			.request(config)
			.then((response) => {
				console.log(JSON.stringify(response.data.message))
				if (response.status === 200) {
					localStorage.clear()
					navigate('/login')
				} else {
					console.log(response.data)
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}

	const fetchWithdrawlRequests = async () => {
		try {
			let config = {
				method: 'get',
				url: `http://${endPoint}:8080/admin/withdrawl/all/`,
				headers: {
					token: `Bearer ${token}`,
				},
			}

			axios.request(config).then((response) => {
				setRequests(response.data)
				console.log(requests, 'response')
			})
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}

	useEffect(() => {
		fetchUsers()
		fetchWithdrawlRequests()
	}, [])

	return (
		<div className="w-full  ">
			<div className="flex flex-wrap justify-center h-screen">
				<div
					className="w-full h-1/6 bg-gray-200 flex justify-end py-6 px-4
				"
				>
					<button
						className="text-gray-800 bg-white shadow-lg rounded-lg py-2 px-6 font-semibold tracking-wider scale-100 text-md active:scale-90 cursor-pointer border border-gray-200 "
						onClick={handleLogout}
					>
						Log Out
					</button>
				</div>
				<div className="h-5/6 w-full flex">
					<div className="w-1/6 border p-3 bg-gray-100">
						{' '}
						<ul className="py-8 px-1 text-lg font-bold text-gray-700 divide-y divide-teal-500 h-90">
							<li className="cursor-pointer hover:text-secondary-dark focus-within:bg-gray-100 py-4">
								<div onClick={() => setActive('home')}>Home</div>
							</li>
							<li className="cursor-pointer hover:text-secondary-dark focus:text-secondary-dark py-4">
								<div onClick={() => setActive('allUsers')}>All Users</div>
							</li>
							<li className="cursor-pointer hover:text-secondary-dark focus:text-secondary-dark py-4">
								<div onClick={() => setActive('Approval')}>
									Withdrawl Requests
								</div>
							</li>
						</ul>
					</div>
					<div className="w-5/6 px-4  ">
						{active === 'allUsers' && (
							<div className="flex flex-col flex-wrap w-full h-full">
								<div className="h-1/5 border-b border-gray-800 flex justify-end p-4 ">
									<button
										type="button"
										className=" m-0 w-40 h-12 rounded-md text-lg text-white bg-sky-600 px-2 font-medium py-1"
										onClick={() => setActive('addUser')}
									>
										+ Add User
									</button>
								</div>
								<div className="h-4/5 py-4">
									<UserTable users={users} setUsers={setUsers} />
								</div>
							</div>
						)}
						{active === 'addUser' && <AddUser setActive={setActive} />}
						{active === 'Approval' && (
							<div className="flex flex-col flex-wrap w-full h-full">
								<div className="h-1/5 border-b border-gray-800 flex justify-end p-4 ">
									<button
										type="button"
										className=" m-0 w-40 h-12 rounded-md text-lg text-white bg-sky-600 px-2 font-medium py-1"
										onClick={() => setActive('addUser')}
									>
										+ Add User
									</button>
								</div>
								<div className="h-4/5 py-4">
									<WithdrawlTable
										users={users}
										requests={requests}
										setRequests={setRequests}
									/>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default AdminPanel
