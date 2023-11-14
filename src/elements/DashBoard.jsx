import React, { useState } from 'react'
import TopTalent from './components/Carousels/TopTalent.jsx'
import AllProfessionals from './components/Categories/AllProfessionals'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/footer'
import Header2 from './components/Header/Header_2'
import ProfilePage from './components/Profiles_Management/ProfilePage.jsx'
import Settings from './components/Settings/Settings'
const DashBoard = () => {
	const [page, setPage] = useState('main')
	const user = JSON.parse(localStorage.getItem('user'))
	const isAdmin = JSON.parse(localStorage.getItem('isAdmin'))
	const worker = user.role === 'worker'
	const employer = user.role === 'employer'
	console.log(user, isAdmin)
	const handler = (data) => {
		setPage(data)
	}
	return (
		<>
			<Header2 state={handler} />
			{isAdmin ? (
				(window.location.href = '/adminPanel')
			) : (
				<div>
					{employer && page === 'main' && (
						<>
							<div className="text-center text-3xl font-semibold mt-5 py-4">
								Good Morning, {user.firstName}
							</div>
							<TopTalent />
							<Categories />
							<AllProfessionals />
						</>
					)}
					{worker && page === 'main' && (
						<>
							<div className="text-center text-3xl font-semibold mt-5 py-4">
								Good Morning, {user.firstName}
							</div>
						</>
					)}
					{page === 'settings' && (
						<div className="flex-col flex-wrap px-16">
							<Settings />
						</div>
					)}
					{page === 'help' && <Settings />}
					{page === 'profile' && <ProfilePage />}
					{/* {isAdmin&&<AdminPanel/>} */}
				</div>
			)}

			<Footer />
		</>
	)
}

export default DashBoard
