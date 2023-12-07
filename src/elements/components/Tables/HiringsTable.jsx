import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HiringsTable = () => {
	const [workers, setWorkers] = useState([
		{
			firstName: 'umair',
			lastName: 'malik',
			role: 'developer',
			wage: '50$',
			status: 'Hired',
			hireDate: '20 october 2023',
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
								Status
							</th>
							<th scope="col" className="px-6 py-3">
								Wage
							</th>
							<th scope="col" className="pl-16 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{workers.map((worker, index) => (
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
											<Link to={`/profile/${worker._id}`}>
												{worker.firstName} {worker.lastName}
											</Link>
										</div>
										<div className="font-normal text-gray-500">
											{worker.email}
										</div>
									</div>
								</th>
								<td className="px-6 py-4">{worker.role}</td>
								<td className="px-6 py-4">{worker.hireDate}</td>
								<td className="px-6 py-4">{worker.status}</td>
								<td className="px-6 py-4">{worker.wage}</td>

								<td className="px-6 py-4">
									<button
										className="bg-red-700 px-3 py-2 rounded-md text-white scale-100 active:scale-90 cursor-pointer"
										// onClick={() => handleDelete(worker._id)}
									>
										{' '}
										Terminate worker
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

export default HiringsTable
