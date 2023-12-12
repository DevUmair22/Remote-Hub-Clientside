import React, { useState } from 'react'
import Earnings from '../pages/Worker/Earnings.jsx'
import TopTalent from './components/Carousels/TopTalent.jsx'
import AllProfessionals from './components/Categories/AllProfessionals'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/footer'
import Header2 from './components/Header/Header_2'
import ProfilePage from './components/Profiles_Management/ProfilePage.jsx'
// import Settings from '../pages/Settings.jsx'
import SideMenu from './components/SideMenu.jsx'

export const data = [
	{
		title: 'My Earnings',
		figure: '30$',
	},
	{
		title: 'Completed Jobs',
		figure: '0',
	},
	{
		title: 'Active Jobs',
		figure: '1',
	},
]

const DashBoard = () => {
	// const [tab, setTab] = useState('home')

	const user = JSON.parse(localStorage.getItem('user'))
	const isAdmin = JSON.parse(localStorage.getItem('isAdmin'))
	const worker = user.role === 'worker'
	const employer = user.role === 'employer'
	console.log(user, isAdmin)
	const [page, setPage] = useState('main')
	const pageHandler = (data) => {
		setPage(data)
	}

	// const tabHandler = (data) => {
	// 	setTab(data)
	// 	console.log('Clicked')
	// }

	return (
		<>
			<Header2 state={pageHandler} employer={employer} worker={worker} />
			{isAdmin ? (
				(window.location.href = '/adminPanel')
			) : (
				<div>
					{employer && page === 'main' && (
						<div className="flex flex-wrap justify-center  p-4">
							<div className="h-screen w-full flex flex-wrap ">
								<div className="text-center text-3xl font-semibold mb-4 underline decoration-secondary-light py-2 w-full">
									Welcome, {user.firstName}
								</div>
								<div className="w-full flex flex-wrap">
									<div className="w-3/12 flex h-96 ">
										<SideMenu />
									</div>
									<div className="flex flex-wrap w-9/12 px-2"></div>
								</div>
							</div>
							<div>
								{/* <TopTalent /> */}
								{/* <Categories /> */}
								<AllProfessionals />
							</div>
						</div>
					)}
					{worker && page === 'main' && (
						<div className="flex flex-wrap justify-center p-4">
							<div className="text-center text-3xl font-semibold mb-4 underline decoration-secondary-light py-2 w-full">
								Welcome, {user.firstName}
							</div>
							<div className="w-full flex flex-wrap">
								<div className="w-3/12 flex h-96">
									<SideMenu />
								</div>
								<div className="flex flex-wrap w-9/12 px-2">
									{data.map((item, index) => (
										<div className="mx-auto w-1/3 px-4 " key={index}>
											<div className="border border-gray-200 text-center items-center rounded-xl shadow-xl p-4 cursor-pointer active:scale-95 scale-100">
												<p className="text-3xl font-extrabold text-secondary-dark py-1">
													{item.figure}
												</p>
												<p className="text-2xl font-bold text-gray-500">
													{item.title}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					)}

					{/* {page === 'settings' && (
						<div className="flex-col flex-wrap px-16">
							<Settings />
						</div>
					)} */}
					{/* {page === 'help' && <Settings />} */}
					{page === 'profile' && <ProfilePage />}
					{page === 'earnings' && <Earnings />}
				</div>
			)}

			<Footer />
		</>
	)
}

export default DashBoard
