import axios from 'axios'
import React from 'react'
import Swal from 'sweetalert2'

const UserTable = ({ users, setUsers }) => {
	console.log('user', users)
	const token = localStorage.getItem('user-token')
	const endPoint = process.env.REACT_APP_BASE_URL

	const handleDelete = async (id) => {
		console.log('delete', id)
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				try {
					let config = {
						method: 'delete',
						url: `http://${endPoint}:8080/admin/delete/${id}`,
						headers: {
							token: `Bearer ${token}`,
						},
					}

					axios
						.request(config)
						.then((response) => {
							console.log(JSON.stringify(response.data))
							if (response.status === 200) {
								const updatedData = users.filter((u) => u._id !== id)
								console.log(`Deleted user with id: ${id}`)
								setUsers(updatedData)
							}
							Swal.fire({
								title: 'Deleted!',
								text: `Deleted user with id: ${id}`,
								icon: 'success',
							})
						})
						.catch((error) => {
							console.log(error)
							Swal.fire({
								icon: 'error',
								title: 'Oops...',
								text: 'Something went wrong!',
								footer: { error },
							})
						})
				} catch (error) {
					console.error('Error deleting user:', error)
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Something went wrong!',
						footer: { error },
					})
				}
			}
		})
	}

	return (
		<div className="px-8">
			<div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
				<table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 bg-gray-200 ">
						<tr>
							<th scope="col" class="px-6 py-3">
								Name
							</th>
							<th scope="col" class="px-6 py-3">
								Position
							</th>
							{/* <th scope="col" class="px-6 py-3">
								Status
							</th> */}
							<th scope="col" class="pl-16 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{users &&
							users.map((user, index) => (
								<tr
									class="bg-white border-b text-gray-900 hover:bg-gray-50 "
									key={index}
								>
									<th
										scope="row"
										class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
									>
										<div class="ps-3">
											<div class="text-base font-semibold">
												{user.firstName} {user.lastName}
											</div>
											<div class="font-normal text-gray-500">{user.email}</div>
										</div>
									</th>
									<td class="px-10 py-4">{user.role}</td>
									{/* <td class="px-6 py-4">
										<div class="flex items-center">
											<div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{' '}
											Online
										</div>
									</td> */}
									<td class="pl-10 py-4">
										<button
											className="bg-red-700 px-3 py-2 rounded-md text-white scale-100 active:scale-90 cursor-pointer"
											onClick={() => handleDelete(user._id)}
										>
											{' '}
											Delete User
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

export default UserTable
