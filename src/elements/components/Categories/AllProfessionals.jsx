import React from 'react'
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
	return (
		<div className="px-10 py-10 w-full h-full border border-1 flex flex-wrap">
			{proData.map((item) => (
				<div className="w-1/2">
					<BasicCard data={item} />
				</div>
			))}
		</div>
	)
}

export default AllProfessionals
