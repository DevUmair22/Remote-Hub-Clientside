import React, { useEffect, useState } from 'react'
import icon from '../../../images/icon.jpg'
import BasicCard from '../Cards/PrimaryCard/BasicCard'

export const proData = [
	{
		name: 'Umair Malik',
		role: 'Front End Developer',
		exp: '4 years',
		rate: '30$',
		jobs: '10',
		img: { icon },
	},
	{
		name: 'Umair Malik',
		role: 'Front End Developer',
		exp: '4 years',
		rate: '30$',
		jobs: '10',
		img: { icon },
	},
	{
		name: 'Umair Malik',
		role: 'Front End Developer',
		exp: '4 years',
		rate: '30$',
		jobs: '10',
		img: { icon },
	},
	{
		name: 'Umair Malik',
		role: 'Front End Developer',
		exp: '4 years',
		rate: '30$',
		jobs: '10',
		img: { icon },
	},
	{
		name: 'Umair Malik',
		role: 'Front End Developer',
		exp: '4 years',
		rate: '30$',
		jobs: '10',
		img: { icon },
	},
	{
		name: 'Umair Malik',
		role: 'Front End Developer',
		exp: '4 years',
		rate: '30$',
		jobs: '10',
		img: { icon },
	},
	{
		name: 'Umair Malik',
		role: 'Front End Developer',
		exp: '4 years',
		rate: '30$',
		jobs: '10',
		img: { icon },
	},
	{
		name: 'Umair Malik',
		role: 'Front End Developer',
		exp: '4 years',
		rate: '30$',
		jobs: '10',
		img: { icon },
	},
]
const AllProfessionals = () => {
	const [data, setData] = useState(null)
	useEffect(() => {
		const fetchData = async () => {
			const token = localStorage.getItem('user-token')
			const endPoint = process.env.REACT_APP_BASE_URL
			try {
				// Make a GET request using fetch
				const headers = new Headers()
				headers.append('token', token)
				headers.append('Content-Type', 'application/json')

				// Create the options object with the method and headers
				const options = {
					method: 'GET',
					headers: headers,
					// You can also include other options like mode, cache, etc.
				}
				const response = await fetch(
					`http://${endPoint}:8080/worker/allWorkers/`,
					options
				)

				// Check if the response status is OK
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`)
				}

				// Parse the JSON data from the response
				const result = await response.json()

				// Update the state with the fetched data
				setData(result)
			} catch (error) {
				console.error('Error fetching data:', error.message)
			}
		}

		// Call the fetchData function
		fetchData()
	}, [])
	console.log('data', data)
	return (
		<div className="px-10 py-10 w-full border border-1 flex flex-wrap">
			{data.map((item) => (
				<div className="w-1/2">
					<BasicCard data={item} />
				</div>
			))}
		</div>
	)
}

export default AllProfessionals
