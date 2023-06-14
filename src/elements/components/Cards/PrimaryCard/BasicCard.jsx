import { Rating } from '@mui/material'
import React from 'react'
const BasicCard = () => {
	return (
		<div className="relative h-auto w-100 px-5">
			<div className="border-2 mt-20 rounded-xl">
				<div
					className="absolute -top-14 left-[80px] w-32 h-32 rounded-full border-teal-900 border-4 bg-cover bg-center"
					style={{
						backgroundImage: ' url(https://unsplash.com/photos/2LowviVHZ-E)',
					}}
				></div>
				<div className="mt-20 px-5 text-center">
					<h1 className="text-lg font-bold">Shafqat Alam</h1>
					<h3>Senior Design Architect </h3>
				</div>
				<div className="text-center">
					<Rating name="read-only" value={3} readOnly />
				</div>
				<div className="flex flex-wrap pt-10 pb-5 px-3">
					<div className="text-left text-md font-bold">
						Experience: 7years <br />
						Hourly Rate: 30$ <br />
						Total Jobs: 3
						<br />
					</div>
				</div>
			</div>
		</div>
	)
}

export default BasicCard
