import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminRoute = (props) => {
	const [admin, setAdmin] = useState(false)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		checkUserRole()
	}, [])

	const checkUserRole = () => {
		const isAdminFromLocalStorage = localStorage.getItem('isAdmin') === 'true'
		const userToken = localStorage.getItem('user-token')

		setAdmin(isAdminFromLocalStorage)
		console.log('isAdminFromLocalStorage:', isAdminFromLocalStorage)

		if (userToken) {
			setIsLoggedIn(true)
		} else {
			setIsLoggedIn(false)
			return navigate('/login')
		}
	}
	return <> {isLoggedIn && admin ? props.children : 'Access Denied'}</>
}

export default AdminRoute
