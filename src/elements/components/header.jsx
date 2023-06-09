import React from 'react'

const Header = () => {
	return (
		<div className="flex flex-wrap mx-0 m-0 px-3 py-1 bg-gray-100 justify-between">
			<div className="px-2">left</div>
			<div className="px-2">
				<h1 className="py-1 text-teal-700 text-3xl font-bold">RemoteHub</h1>
			</div>
			<div className="px-2">
				<button className="px-3 py-2 mx-auto"> Login</button>
				<button className="px-3 py-2 mx-auto rounded-xl border border-teal-500">
					Sign Up
				</button>
			</div>
		</div>
	)
}

export default Header
