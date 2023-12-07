import React from 'react'
import Footer from '../../elements/components/Footer/footer'
import Header2 from '../../elements/components/Header/Header_2'
import SideMenu from '../../elements/components/SideMenu'

const Withdrawl = () => {
	return (
		<>
			<Header2 />

			<div className="w-full flex flex-wrap px-6 py-10 items-center ">
				<div className="w-2/12 flex h-96">
					<SideMenu />
				</div>
				<div className="w-10/12 h-full px-4 ">
					<div className="bg-white shadow-xl border  rounded-xl w-full h-full p-8 ">
						<div className="text-3xl text-center py-4 font-bold text-gray-600">
							Withdrawl Request
						</div>
						<div className="w-full h-full py-8">
							<div className="flex ">
								<p className="text-xl font-semibold text-gray-500 py-4">
									Balance Amount :{' '}
									<span className="text-2xl text-gray-800 border p-1 bg-gray-100 font-semibold ">
										5000
									</span>
								</p>
							</div>
							<div className="py-4">
								<span className="text-xl font-semibold text-gray-700 py-4">
									Enter Withdrawl Amount :{' '}
								</span>
								<input
									type="number"
									className="border rounded-md outline-none p-1 focus:border-secondary-light mx-4"
								/>
								<button
									className="bg-secondary-light px-3 py-2 rounded-md text-white scale-100 font-semibold active:scale-90 cursor-pointer float-right
                        "
								>
									Send Request
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Withdrawl
