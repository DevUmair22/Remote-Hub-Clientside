import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../elements/components/Footer/footer'
import Header2 from '../../elements/components/Header/Header_2'
const ReportUser = () => {
	return (
		<>
			<Header2 />

			<div className="w-full h-screen flex flex-wrap justify-center items-center">
				<div className="pl-8 w-full ">
					<button className=" bg-secondary-light hover:bg-secondary-dark w-1/12 border rounded-md px-4 text-white font-semibold py-1 cursor-pointer scale-100 active:scale-90">
						<Link to={'/dashboard'}>return</Link>
					</button>
				</div>
				<div className="w-1/2 divide-y divide-secondary-dark border border-secondary-dark rounded-lg shadow-2xl">
					<div className="py-4 text-4xl px-8 text-center text-primary font-semibold ">
						Report User
					</div>
					<div className=" px-4 flex flex-col py-4 divide-y">
						<div className=" w-full  py-4">
							<label className="block mb-1 font-medium text-xl text-primary ">
								Subject
							</label>
							<textarea
								type="text"
								className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
								placeholder="Add the subject of your report here...."
								rows="1"
								cols="50"
							></textarea>
						</div>
						<div className=" w-full  py-4">
							<label className="block mb-1 font-medium text-xl text-primary ">
								Description
							</label>
							<textarea
								type="text"
								className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-light focus:ring-1 focus:outline-none focus:border-secondary-light block w-full p-2.5 "
								placeholder="Add Your comments about the Worker here...."
								rows="4"
								cols="50"
							></textarea>
						</div>
					</div>
					<div className="flex justify-end py-2 px-4">
						<button className="bg-secondary-dark focus:scale-90 text-white px-4 py-2  rounded-lg font-semibold text-lg ">
							Submit
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default ReportUser
