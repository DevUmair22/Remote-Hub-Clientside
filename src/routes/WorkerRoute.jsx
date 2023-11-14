import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const WorkerRoute = (props) => {
	const [role, setRole] = useState(false)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		checkUserRole()
	}, [])

	const checkUserRole = () => {
		const user = localStorage.getItem('user')
		const userToken = localStorage.getItem('user-token')
		setRole(user.role)

		if (userToken) {
			setIsLoggedIn(true)
		} else {
			setIsLoggedIn(false)
			return navigate('/login')
		}
	}
	return (
		<> {isLoggedIn && role === 'worker' ? props.children : 'Access Denied'}</>
	)
}

export default WorkerRoute
