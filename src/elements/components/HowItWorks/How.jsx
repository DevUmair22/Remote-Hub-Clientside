import React from 'react'
import Slide from 'react-reveal/Slide'
import { Link } from 'react-router-dom'

const How = () => {
	const array = [
		{
			title: 'For Recruiters',
			data: [
				{
					headline: '			Sign Up and complete your profile',
					para: 'How it works for Recruiters and Project ManagersHow it works for Recruiters and Project ManagersHow it works for Recruiters and Project ManagersHow it works for Recruiters and Project ManagersHow it works for Recruiters and Project Manager',
				},
				{
					headline: '			Sign Up and complete your profile',
					para: 'How it works for Recruiters and Project ManagersHow it works for Recruiters and Project ManagersHow it works for Recruiters and Project ManagersHow it works for Recruiters and Project ManagersHow it works for Recruiters and Project Manager',
				},
				{
					headline: '			Sign Up and complete your profile',
					para: 'How it works for Recruiters and Project ManagersHow it works for Recruiters and Project ManagersHow it works for Recruiters and Project ManagersHow it works for Recruiters and Project ManagersHow it works for Recruiters and Project Manager',
				},
			],
		},
		{
			title: 'For Recruiters',
			data: [
				{
					headline: '			Sign Up and complete your profile',
					para: 'How it works for Recruiters and Project ManagersHow it works for Recruiters and Project ManagersHow it works for Recruiters and Project ManagersHow it works for Recruiters and Project ManagersHow it works for Recruiters and Project Manager',
				},
				{
					headline: '			Sign Up and complete your profile',
					para: 'How it works for Recruiters and Project ManagersHow it works for Recruiters and Project ManagersHow it works for Recruiters and Project ManagersHow it works for Recruiters and Project ManagersHow it works for Recruiters and Project Manager',
				},
				{
					headline: '			Sign Up and complete your profile',
					para: 'How it works for Recruiters and Project ManagersHow it works for Recruiters and Project ManagersHow it works for Recruiters and Project ManagersHow it works for Recruiters and Project ManagersHow it works for Recruiters and Project Manager',
				},
			],
		},
	]
	return (
		<div className="w-full h-full p-12 flex bg-gray-100 flex flex-wrap">
			<div className="w-full text-center">
				<div className=" text-4xl font-bold py-4">
					Getting started on Remote<span className="text-teal-500">Hub</span>
				</div>
				<p className="text-md font-medium pb-8 px-60">
					agersHow it works for Recruiters and Project ManagersHow it works for
					Recruiters and Project ManagersHow it works for Recruiters and Project
					Manager
				</p>
			</div>
			{array.map((item, index) => (
				<div key={index}>
					<div className="divide-x-2 divide-teal-950 pt-10">
						<div className="text-left text-3xl font-bold px-10 pb-10 decoration-teal-500 underline text-primary underline-offset-4">
							{item.title}
						</div>
						{item.data.map((itemm, indexx) => (
							<div className="px-10 py-4" key={indexx}>
								<Slide bottom>
									<div className="h-50 border-2 px-10 py-4 bg-white text-gray-600 shadow-xl shadow-gray-400 rounded-xl pb-5 w-full">
										<div className="text-lg text-teal-500 font-bold py-2">
											Step 1
										</div>
										<h1 className="text-4xl font-bold text-teal-950 pb-8">
											{itemm.headline}
										</h1>
										<div className="text-lg font-medium">{itemm.para}</div>
									</div>
								</Slide>
							</div>
						))}
					</div>
					<div className="flex w-full pt-10">
						<Link to={'/register'}>
							<button
								type="submit"
								className="mx-auto rounded-md bg-secondary-light px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-secondary-dark active:bg-teal-900 active:text-white focus:ring-2 focus:ring-teal-900 "
							>
								Register Now
							</button>
						</Link>
					</div>
				</div>
			))}
		</div>
	)
}

export default How
