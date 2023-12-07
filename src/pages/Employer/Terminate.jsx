import StarIcon from '@mui/icons-material/Star'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating/Rating'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../elements/components/Footer/footer'
import Header2 from '../../elements/components/Header/Header_2'
const Terminate = () => {
	const [terminate, setTerminate] = useState(false)
	const [rating, setRating] = useState(2)

	const [hover, setHover] = useState(-1)

	const labels = {
		0.5: 'Useless',
		1: 'Useless+',
		1.5: 'Poor',
		2: 'Poor+',
		2.5: 'Ok',
		3: 'Ok+',
		3.5: 'Good',
		4: 'Good+',
		4.5: 'Excellent',
		5: 'Excellent+',
	}

	const getLabelText = (value) => {
		return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`
	}

	return (
		<>
			<Header2 />
			<div className="w-full h-screen flex flex-wrap justify-center items-center">
				{!terminate && (
					<div className="w-1/2 divide-y divide-secondary-dark">
						<p className="text-center text-2xl py-6 font-semibold">
							Are You Sure You Want to Terminate this Worker?
						</p>
						<div className="flex flex-wrap items-center">
							<button className="bg-secondary-light mx-auto focus:scale-90 text-white px-8 h-12 mt-2 rounded-lg text-xl ">
								<Link to={'/dashboard'}>Back</Link>
							</button>
							<button
								className="bg-red-700 focus:scale-90 mx-auto text-white px-8 py-4 mt-2 rounded-lg text-xl "
								onClick={() => setTerminate(true)}
							>
								Terminate
							</button>
						</div>
					</div>
				)}
				{terminate && (
					<div className="w-1/2 divide-y divide-secondary-dark border border-secondary-dark rounded-lg">
						<div className="py-4 text-4xl px-8 text-center text-primary  font-semibold ">
							Review User
						</div>
						<div className=" px-4 flex flex-col py-4 divide-y">
							<div className="text-center w-full flex py-4">
								<p className="px-2 text-xl font-semibold">Rating</p>

								<Rating
									name="hover-feedback"
									value={rating}
									precision={0.5}
									getLabelText={getLabelText}
									onChange={(e) => setRating(e.target.value)}
									className="ml-40"
									onChangeActive={(event, newHover) => {
										setHover(newHover)
									}}
									emptyIcon={
										<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
									}
								/>
								{rating !== null && (
									<Box sx={{ ml: 2 }}>
										{labels[hover !== -1 ? hover : rating]}
									</Box>
								)}
							</div>
							<div className=" w-full  py-4">
								<label className="block mb-1 font-medium text-xl text-primary ">
									Comments
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
							<button className="bg-secondary-dark focus:scale-90 text-white px-4 py-2 rounded-lg font-semibold text-lg ">
								Save Review
							</button>
						</div>
					</div>
				)}
			</div>
			<Footer />
		</>
	)
}

export default Terminate
