import axios from 'axios'

import { useNavigate } from 'react-router-dom'

const Logout = () => {
	const navigate = useNavigate()
	const token = localStorage.getItem('user-token')
	const endPoint = process.env.REACT_APP_BASE_URL
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

	return (
		<div className="flex  w-full justify-center items-center h-screen">
			<div className="mx-auto flex-col flex-wrap">
				{' '}
				<h2 className="text-3xl text-blue-500 py-1font-semibold ">Logout</h2>
				<p>Are you sure you want to log out?</p>
				<button
					onClick={handleLogout}
					className="bg-blue-500 focus:scale-90 text-white w-full py-4 mt-2 rounded-lg text-xl"
				>
					Logout
				</button>
			</div>
		</div>
	)
}
export default Logout
