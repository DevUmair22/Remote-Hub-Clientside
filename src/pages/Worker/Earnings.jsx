import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../elements/components/Footer/footer'
import Header2 from '../../elements/components/Header/Header_2'
import SideMenu from '../../elements/components/SideMenu'

const Earnings = () => {
	const data = [
		{
			title: 'Earnings So Far',
			figure: '30$',
		},
		{
			title: 'This Month',
			figure: '0',
		},
		{
			title: 'This Job',
			figure: '1',
		},
	]
	return (
		<>
			<Header2 />

			<div className="w-full flex flex-wrap px-6 py-10 items-center ">
				<div className="w-2/12 flex h-96">
					<SideMenu />
				</div>
				<div className="w-10/12 h-full px-4 ">
					<div className="bg-white shadow-xl border  rounded-xl w-full h-full px-8 py-2">
						<div className="text-3xl text-center py-4 font-bold text-gray-600">
							My Earnings
						</div>
						<div className="w-full h-full py-8 flex flex-wrap">
							{data.map((item, index) => (
								<div className="mx-auto w-1/3 px-4 " key={index}>
									<div className="border border-gray-200 text-center items-center rounded-xl shadow-xl p-4 cursor-pointer active:scale-95 scale-100">
										<p className="text-4xl font-extrabold text-secondary-dark py-5">
											{item.figure}
										</p>
										<p className="text-2xl font-bold text-gray-500">
											{item.title}
										</p>
									</div>
								</div>
							))}
						</div>
						<div className="text-xl flex justify-end text-center py-4 px-4">
							<button
								className="bg-secondary-light px-3 py-2 rounded-md text-white scale-100 font-semibold active:scale-90 cursor-pointer 
                        "
							>
								<Link to={'/withdrawl'}>Request Withdrawl</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Earnings
