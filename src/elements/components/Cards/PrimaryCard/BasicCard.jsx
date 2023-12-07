import Rating from '@mui/material/Rating/Rating'
import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../../../../images/icon.jpg'

const BasicCard = ({ data }) => {
	return (
		<div className="h-auto w-100 px-5 ">
			<div className="flex-col border-2 shadow-xl mt-20 rounded-xl">
				<div>
					<img
						className="mx-auto mt-[-4rem] w-36 h-36 rounded-full border-green-700 p-1 border-4 bg-cover bg-center"
						src={icon}
						height="200px"
						width="200px"
						alt="icon"
					/>
				</div>
				<div className="mt-2 px-5 text-center">
					<h1 className="text-lg font-bold">{data.name}</h1>
					<h3>{data.role} </h3>
				</div>
				<div className="text-center">
					<Rating name="read-only" value={3} readOnly />
				</div>
				<div className="flex flex-wrap pt-10  px-6">
					<div className="text-left text-md font-bold">
						Experience: {data.exp} <br />
						Hourly Rate: {data.rate}
						<br />
						Total Jobs: {data.jobs}
						<br />
					</div>
				</div>
				<div className="flex w-full py-10">
					<button
						type="submit"
						className="mx-auto rounded-md bg-secondary-light px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-secondary-dark active:bg-teal-900 active:text-white focus:ring-2 focus:ring-teal-900 "
					>
						<Link to={`/profile/${data.id}`}>View Full Profile</Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default BasicCard
