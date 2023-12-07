import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const PurchaseTable = () => {
	const [purchases, setPurchases] = useState([
		{
			_id: '1234567890',
			firstName: 'umair',
			lastName: 'malik',
			email: 'umair@gmail.com',
			role: 'developer',
			wage: '50$',
			status: 'Paid',
			hireDate: '20 october 2023',
			bill: '950$',
		},
	])

	return (
		<div className="px-8">
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
				<table className="w-full text-sm text-left border rtl:text-right text-gray-500 ">
					<thead className="text-md text-gray-700 uppercase  bg-gray-200 ">
						<tr>
							<th scope="col" className="pr-6 pl-10 py-3">
								Name
							</th>
							<th scope="col" className="px-6 py-3">
								Role
							</th>
							<th scope="col" className="px-6 py-3">
								Date Hired
							</th>

							<th scope="col" className="px-6 py-3">
								Wage
							</th>
							<th scope="col" className="px-6 py-3">
								Bill
							</th>
							<th scope="col" className="px-6 py-3">
								Status
							</th>
							<th scope="col" className="pl-16 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{purchases.map((purchase, index) => (
							<tr
								className="bg-white border-b text-gray-900 hover:bg-gray-50 "
								key={index}
							>
								<th
									scope="row"
									className="flex items-center py-4 text-gray-900 whitespace-nowrap "
								>
									<div className="px-6">
										<div className="text-base font-semibold hover:underline cursor-pointer">
											<Link to={`/profile/${purchase._id}`}>
												{' '}
												{purchase.firstName} {purchase.lastName}
											</Link>
										</div>
										<div className="font-normal text-gray-500">
											{purchase.email}
										</div>
									</div>
								</th>
								<td className="px-6 py-4">{purchase.role}</td>
								<td className="px-6 py-4">{purchase.hireDate}</td>

								<td className="px-6 py-4">{purchase.wage}</td>
								<td className="px-6 py-4">{purchase.bill}</td>
								<td className="px-6 py-4">{purchase.status}</td>
								<td className="px-6 py-4 flex">
									<button
										className="bg-green-700 px-3 py-2 rounded-md text-white scale-100 font-semibold active:scale-90 mx-auto cursor-pointer"
										// onClick={() => {
										// 	setAction('Approved')
										// 	handleApproval(request._id)
										// }}
									>
										{' '}
										Re-Hire
									</button>
									<button
										className="bg-orange-600 px-3 py-2 rounded-md text-white scale-100 mx-auto font-semibold active:scale-90 cursor-pointer"
										// onClick={() => {
										// 	setAction('Disapproved')
										// 	handleApproval(request._id)
										// }}
									>
										{' '}
										Report
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default PurchaseTable
