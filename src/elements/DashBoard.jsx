import React, { useState } from 'react'
import TopTalent from './components/Carousels/TopTalent.jsx'
import AllProfessionals from './components/Categories/AllProfessionals'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/footer'
import Header2 from './components/Header/Header_2'
import Settings from './components/Settings/Settings'
const DashBoard = () => {
	const [page, setPage] = useState('main')
	const handler = (data) => {
		setPage(data)
	}
	return (
		<>
			<Header2 state={handler} />
			<div>
				{page === 'main' && (
					<>
						<div className="text-center text-3xl font-semibold mt-5 py-4">
							Good Morning, Umair
						</div>
						<TopTalent />
						<Categories />
						<AllProfessionals />
					</>
				)}
				{page === 'settings' && (
					<div className="flex-col flex-wrap px-16">
						<Settings />
					</div>
				)}
				{page === 'help' && <Settings />}
			</div>

			<Footer />
		</>
	)
}

export default DashBoard
