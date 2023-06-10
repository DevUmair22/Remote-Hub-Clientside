import React from 'react'
const list = ['Services', ' About', 'Help', ' Affiliates']
const Header = () => {
	return (
		<div className="flex flex-wrapmx-0 m-0 px-2 py-4 bg-gray-100 align-items-center shadow-md">
			<div className=" w-full mx-auto">
				<ul className="flex flex-wrap py-1 pt-2 font-medium ">
					<li className="px-2 group scale-90 text-xl text-secondary-light hover:text-primary hover:scale-95 cursor-pointer font-semibold">
						<span className="bg-left-bottom bg-gradient-to-r  from-teal-500 to-teal-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
							Become a Seller.
						</span>
					</li>
					{list.map((item) => (
						<li className="px-2 group scale-90 text-xl text-primary hover:text-teal-900 hover:scale-95 cursor-pointer font-semibold">
							<span className="bg-left-bottom bg-gradient-to-r  from-teal-500 to-teal-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
								{item}
							</span>
						</li>
					))}
				</ul>
			</div>
			<div className="px-5 mx-auto w-full">
				<p className="flex py-1 text-primary text-3xl font-bold cursor-pointer">
					Remote<p className="text-secondary-light">Hub.</p>
				</p>
			</div>
			<div className="mx-auto text-lg w-[40%] font-semibold">
				<button className="px-3 py-2 mx-auto"> Login</button>
				<button className="px-3 py-1 mx-auto rounded-xl border border-2 border-secondary-light">
					Sign Up
				</button>
			</div>
		</div>
	)
}

export default Header
