import React from 'react'
import { Link } from 'react-router-dom'
const SideMenu = () => {
	const navigation = [
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
		<div>
			<div className=" border rounded-lg shadow-xl bg-gray-50 px-4 w-full py-10">
				<ul className="divide-y px-4">
					{navigation.map((item, index) => (
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
