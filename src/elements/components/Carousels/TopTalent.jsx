import React from 'react'
import BasicCard from '../Cards/PrimaryCard/BasicCard'
const TopTalent = () => {
	return (
		<div className="w-full h-full py-10 px-10">
			<div className="border-2 py-5 px-5 flex-wrap flex-col h-full">
				<div className="text-3xl text-center font-bold w-full py-2 mx-auto">
					Highly Skilled Talent of RemoteHub
				</div>
				<div className="flex flex-wrap mx-auto">
					<div className="w-1/4 mx-auto">
						<BasicCard />
					</div>
					<div className="w-1/4 mx-auto">
						<BasicCard />
					</div>{' '}
					<div className="w-1/4 mx-auto">
						<BasicCard />
					</div>{' '}
					<div className="w-1/4 mx-auto">
						<BasicCard />
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopTalent
