import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
	return (
		<footer className="bg-background mx-0 mt-2 h-auto">
			<div className="w-full mx-auto px-4 pt-4 pb-0">
				<div className="flex flex-wrap ">
					{array.map((item, index) => (
						<div
							key={index}
							className="h-full mx-auto w-[3/12] p-4 pl-5 rounded-xl divide-y-2 divide-gray-300"
						>
							{' '}
							<div>
								<h1
									href="#"
									className=" text-lg text-primary font-bold p-0 md:mr-6"
								>
									{item.title}
								</h1>
							</div>
							<div>
								{' '}
								<ul className="flex-col text-left flex-wrap m-0 py-1 text-[1rem] font-medium text-gray-500  px-0">
									{item.list.map((item, index) => (
										<li
											key={index}
											className="py-2 group text-gray-500 text-[1.1rem] transition-all duration-300 ease-in-out"
										>
											<span className="bg-left-bottom bg-gradient-to-r from-teal-500 to-teal-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
												{item}
											</span>{' '}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>

				<div className=" flex flex-wrap h-full w-full border  px-4 py-6">
					<div className="w-[4/12] pl-5">
						{' '}
						<span className="self-center text-primary text-3xl font-semibold whitespace-nowrap ">
							Remote<span className="text-secondary-light">Hub</span>
						</span>
					</div>
					<div className="w-[8/12] mx-auto gap-x-3 flex flex-wrap mr-0">
						<div className="rounded-xl py-2 px-2 bg-background border border-gray-300">
							{' '}
							<FontAwesomeIcon
								icon="fa-brands fa-twitter"
								size="xl"
								className="text-cyan-400"
							/>
						</div>
						<div className="rounded-xl py-2 px-2 bg-background border border-gray-300">
							<FontAwesomeIcon
								icon="fa-brands fa-github"
								size="xl"
								className="text-primary "
							/>
						</div>

						<div className="rounded-xl py-2 px-2 bg-background border border-gray-300">
							<FontAwesomeIcon
								icon="fa-brands fa-linkedin"
								size="xl"
								className="text-sky-700 "
							/>
						</div>
						<div className="rounded-xl py-2 px-2 bg-background border border-gray-300">
							<FontAwesomeIcon
								icon="fa-brands fa-google-plus-g"
								size="xl"
								className="text-red-500 "
							/>
						</div>
					</div>
				</div>
				<hr className=" border-gray-200 sm:mx-auto" />
				<span className="block text-sm text-secondary-dark sm:text-center py-5 ">
					© 2023 RemoteHub | All Rights Reserved.
				</span>
			</div>
		</footer>
	)
}

const array = [
	{
		title: 'Company',
		list: [
			'About Us',
			'Platform Reviews',
			'Privacy Policy',
			'Terms of Service',
			'Partnerships',
		],
	},
	{
		title: ' Support',
		list: [
			'Help & Support',
			'Selling on RemoteHub',
			'Buying on RemoteHub',
			'Report Seller/Buyer',
			'Payments and Charges',
		],
	},
	{
		title: 'Community',
		list: [
			'Customer Success Stories',
			'Best IT Professionals 2023',
			'Become a Seller',
			'Community standards',
			'Affiliate Program',
		],
	},
	{
		title: 'More from RemoteHub',
		list: [
			'RemoteHub Premium ',
			'Payment and Invoicing',
			'Top Rated IT Professionals',
			'Cost Effectiveness',
			'Time Logger',
		],
	},
]

export default Footer
