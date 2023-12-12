import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import icon from '../../../images/icon.jpg'
import SearchBar from '../SearchModule/SearchBar'

const Header2 = ({ worker, employer }) => {
	const user = JSON.parse(localStorage.getItem('user'))
	console.log(user.role)
	const [isOpen, setIsOpen] = useState(false)
	const navigate = useNavigate()
	const handleNavigation = () => {
		navigate('/logout')
	}
	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<div className="flex mx-auto w-full items-center px-2 py-2 bg-gray-100 items-center shadow-xl">
				{worker ? (
					<></>
				) : (
					<div className=" w-full ml-8 my-auto pt-1">
						<SearchBar color="#10BCAD" />
					</div>
				)}
				<div className=" mx-auto w-full">
					<p className="py-1 pl-20 text-primary text-4xl font-bold cursor-pointer">
						<Link to={'/dashboard'}>
							Remote<span className="text-secondary-light">Hub</span>
						</Link>
					</p>
				</div>
				<div className="flex text-md w-full items-end justify-end pt-1 px-2 mx-8 my-auto text-primary font-semibold mr-0 ">
					{user.role === 'worker' ? (
						<>
							<div className="pr-2 py-2 group scale-90 text-lg text-primary hover:text-primary hover:scale-95 cursor-pointer font-semibold">
								<span className="bg-left-bottom bg-gradient-to-r  from-teal-500 to-teal-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
									<Link to={'/setupprofile'}> Set Up Profile</Link>
								</span>
							</div>
							{/* <div className="pr-2 py-2 group scale-90 text-lg text-primary hover:text-primary hover:scale-95 cursor-pointer font-semibold">
								<span className="bg-left-bottom bg-gradient-to-r  from-teal-500 to-teal-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
									<Link to={'/jobs'}> My Jobs</Link>
								</span>
							</div> */}
							<div className="pr-2 py-2 group scale-90 text-lg text-primary hover:text-primary hover:scale-95 cursor-pointer font-semibold">
								<span className="bg-left-bottom bg-gradient-to-r  from-teal-500 to-teal-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
									<Link to={'/earnings'}> Earnings</Link>
								</span>
							</div>
						</>
					) : (
						<>
							{/* <div className="pr-2 py-2 group scale-90 text-lg text-primary hover:text-primary hover:scale-95 cursor-pointer font-semibold">
								<span className="bg-left-bottom bg-gradient-to-r  from-teal-500 to-teal-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
									<Link to={'/profile'}> Profile</Link>
								</span>
							</div> */}
							{/* <div className="pr-2 py-2 group scale-90 text-lg text-secondary-light hover:text-primary hover:scale-95 cursor-pointer font-semibold">
								<span className="bg-left-bottom bg-gradient-to-r  from-teal-500 to-teal-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
									<Link to={'/register'}>Sign Up as Talent.</Link>
								</span>
							</div> */}
							{/* <div className="pr-2 py-2 group scale-90 text-lg text-primary hover:text-primary hover:scale-95 cursor-pointer font-semibold">
								<span className="bg-left-bottom bg-gradient-to-r  from-teal-500 to-teal-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
									<Link to={'/register'}>Advanced Search</Link>
								</span>
							</div> */}
							<div className="pr-2 py-2 group scale-90 text-lg text-primary hover:text-primary hover:scale-95 cursor-pointer font-semibold">
								<span className="bg-left-bottom bg-gradient-to-r  from-teal-500 to-teal-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
									<Link to={'/hirings'}>My Hirings</Link>
								</span>
							</div>
						</>
					)}

					<div className="relative">
						<button
							className="flex items-center mr-2 focus:outline-none"
							onClick={toggleDropdown}
						>
							<img
								className="w-10 h-10  rounded-full"
								src={icon}
								alt="Avatar"
							/>
						</button>

						{isOpen && (
							<div className="absolute right-0 mt-2 w-48 z-10 shadow-lg bg-white divide-y divide-gray-100 rounded-lg">
								<div className="px-4 py-3 text-gray-900 ">
									<div className="text-secondary-light text-md">
										{user.firstName} {user.lastName}
									</div>
									<div className="font-medium text-sm truncate text-gray-500">
										{user.email}
									</div>
								</div>
								<ul className="py-2 px-4 text-md  ">
									<li className="cursor-pointer hover:text-secondary-dark focus:text-secondary-dark py-2">
										<Link to={'/myprofile'}>View Profile</Link>
									</li>
									<li className="cursor-pointer hover:text-secondary-dark focus:text-secondary-dark py-2">
										<Link to={'/settings'}>Settings</Link>
									</li>
									<li className="cursor-pointer hover:text-secondary-dark focus:text-secondary-dark py-2">
										<Link to={'/settings'}>Billing and Payments</Link>
									</li>

									<li className="cursor-pointer hover:text-secondary-dark focus:text-secondary-dark py-2">
										Help and Support
									</li>
								</ul>
								<div
									className="cursor-pointer hover:text-secondary-dark focus:text-secondary-dark py-2 px-4 text-lg"
									onClick={handleNavigation}
								>
									Sign out
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default Header2
