import React from 'react'
import icon from '../../../images/icon.jpg'
import BasicCard from '../Cards/PrimaryCard/BasicCard'

const proData = [
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
const TopTalent = () => {
	return (
		<div className="w-full h-full py-10 px-10">
			<div className="border-2 py-5 px-5 flex-wrap flex-col h-full bg-white rounded-xl">
				<div className="text-3xl text-center font-bold w-full py-2 mx-auto">
					Highly Skilled Talent of{' '}
					<span className="text-secondary-light">RemoteHub</span>
				</div>

				<div className="flex flex-wrap mx-auto">
					{proData.map((item) => (
						<div className="w-1/4 mx-auto">
							<BasicCard data={item} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default TopTalent
