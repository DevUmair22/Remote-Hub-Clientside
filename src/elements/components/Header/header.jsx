import React from 'react'
import { Link } from 'react-router-dom'
const list = ['Services', ' About', 'Help', ' Affiliates']
const Header = () => {
	return (
		<div className="flex mx-auto w-full px-2 py-2 bg-gray-100 items-center shadow-xl">
			<div className=" w-full mx-auto my-auto pt-1">
				<ul className="flex flex-wrap p-0 my-auto font-medium ">
					<li className="px-2 group scale-90 text-lg text-secondary-light hover:text-primary hover:scale-95 cursor-pointer font-semibold">
						<span className="bg-left-bottom bg-gradient-to-r  from-teal-500 to-teal-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
							<Link to={'/register'}>Become a Seller.</Link>
						</span>
					</li>
					{list.map((item) => (
						<li className="px-1 group scale-90 text-lg text-primary hover:text-teal-900 hover:scale-95 cursor-pointer font-semibold">
							<span className="bg-left-bottom bg-gradient-to-r  from-teal-500 to-teal-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
								<Link to={'/services'}> {item}</Link>
							</span>{' '}
						</li>
					))}
				</ul>
			</div>
			<div className="px-5 mx-auto w-full">
				<p className="flex py-1 text-primary text-4xl font-bold cursor-pointer">
					<Link to={'/'}>
						{' '}
						Remote<span className="text-secondary-light">Hub</span>
					</Link>
				</p>
			</div>
			<div className="flex text-md w-[40%] pt-1 px-2 my-auto text-primary justify-end font-semibold mr-0">
				<button className="px-3 py-2"> Login</button>
				<button className="px-3 py-1 rounded-lg border border-2 border-secondary-light">
					Join
				</button>
			</div>
		</div>
	)
}

export default Header
