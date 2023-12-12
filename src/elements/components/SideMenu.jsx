import React from 'react'
import { Link } from 'react-router-dom'
const SideMenu = () => {
	const user = JSON.parse(localStorage.getItem('user'))
	const worker = user.role === 'worker'

	const employerNavigation = [
		{
			title: 'My Hirings',
			link: '/hirings',
		},
		{
			title: 'Purchase History',
			link: '/purchasehistory',
		},
	]
	const workerNavigation = [
		{
			title: 'My Jobs--|',
			link: '/jobs',
		},
		{
			title: 'View Profile',
			link: '/myprofile',
		},
		{
			title: 'My Earnings',
			link: '/earnings',
		},
		{
			title: 'Request Withdrawl',
			link: '/withdrawl',
		},
	]
	return (
		<div className="flex">
			<div className=" border rounded-lg my-auto shadow-xl bg-gray-50 px-4 w-full py-10">
				<ul className="divide-y px-4">
					{worker
						? workerNavigation.map((item, index) => (
								<li
									className="cursor-pointer font-semibold text-xl py-4 hover:text-secondary-dark hover:bg-gray-100 text-gray-800"
									key={index}
								>
									<Link to={item.link}>{item.title}</Link>
								</li>
						  ))
						: employerNavigation.map((item, index) => (
								<li
									className="cursor-pointer font-semibold text-xl py-4 hover:text-secondary-dark hover:bg-gray-100 text-gray-800"
									key={index}
								>
									<Link to={item.link}>{item.title}</Link>
								</li>
						  ))}
				</ul>
			</div>
		</div>
	)
}

export default SideMenu
