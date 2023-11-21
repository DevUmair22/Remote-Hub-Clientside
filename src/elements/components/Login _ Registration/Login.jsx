import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../Layout/Layout.jsx'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [invalidPasswordError, setInvalidPasswordError] = useState(false)
	const [status, setStatus] = useState('')
	const [rememberMe, setRememberMe] = useState(false)
	const endPoint = process.env.REACT_APP_BASE_URL

	const handleRememberMeChange = () => {
		setRememberMe(!rememberMe)

		localStorage.setItem('rememberedEmail', email)
		localStorage.setItem('rememberedPassword', password)
	}

	useEffect(() => {
		const userToken = localStorage.getItem('user-token')

		if (userToken) {
			// If user is already logged in then redirect to the dashboard
			window.location.href = '/dashboard'
		}
		//remembered email and password should move to session storage as  i am clearing localstorage on logout
		const rememberedEmail = localStorage.getItem('rememberedEmail')
		const rememberedPassword = localStorage.getItem('rememberedPassword')

		if (rememberedEmail && rememberedPassword) {
			setEmail(rememberedEmail)
			setPassword(rememberedPassword)
			setRememberMe(true)
		}
	}, [])

	const handleLogin = async () => {
		try {
			const response = await axios.post(
				`http://${endPoint}:8080/user/auth/login/`,
				{
					email,
					password,
				}
			)

			if (response.status === 200) {
				const user = JSON.stringify(response.data.userData)
				console.log('Response Data : ', response.data)
				setStatus('Login successful!')

				localStorage.setItem('user-token', response.data.accessToken)
				localStorage.setItem('isAdmin', response.data.userData.isAdmin)
				localStorage.setItem('user', user)

				setTimeout(() => {
					window.location.href = '/dashboard'
				}, 500)

				// if (rememberMe) {
				// 	sessionStorage.setItem('rememberedEmail', email)
				// 	sessionStorage.setItem('rememberedPassword', password)
				// }
			} else {
				setStatus('Login failed. Please check your credentials.')
			}
		} catch (error) {
			console.log('error', error.response)
			setStatus(error.response)
		}
	}

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
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Email or username
							</label>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								id="email"
								className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:border-secondary-light block w-full p-2.5"
								placeholder="name@company.com"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Password
							</label>
							<div className="flex">
								<input
									type={showPassword ? 'text' : 'password'}
									id="password"
									placeholder="••••••••"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:border-secondary-light block w-full p-2.5 "
									required
								/>

								<FontAwesomeIcon
									icon={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
									size="lg"
									className="text-gray-500 hover:text-blue-500 cursor-pointer -ml-8 my-auto"
									onClick={() => setShowPassword(!showPassword)}
								/>
							</div>
							<p>{status}</p>
						</div>
						<div className="flex items-start">
							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input
										id="remember"
										type="checkbox"
										value=""
										className="w-4 h-4 rounded bg-gray-50 accent-secondary-light"
										checked={rememberMe}
										onChange={handleRememberMeChange}
									/>
								</div>
								<label
									htmlFor="remember"
									className="ml-2 text-sm font-medium text-gray-100 "
								>
									Remember me
								</label>
							</div>
							<Link
								href="/"
								className="ml-auto text-sm text-secondary-light hover:underline "
							>
								Forgot Password?
							</Link>
						</div>
						<button
							type="submit"
							className=" flex mx-auto w-[2/4] text-white bg-secondary-light scale-100 hover:bg-secondary-dark focus:bg-secondary-dark hover:text-gray-100 font-bold rounded-lg text-md px-10 py-2 text-center "
							onClick={handleLogin}
						>
							Continue
						</button>
						<p className="status">{status}</p>

						<div className="text-sm font-medium text-gray-500 dark:text-gray-300">
							Not registered?{' '}
							<Link
								to="/register"
								className="text-secondary-light hover:underline "
							>
								Create account
							</Link>
						</div>
					</form>
				</div>
			</div>
		</MainLayout>
	)
}

export default Login
