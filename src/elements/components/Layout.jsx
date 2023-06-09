import React from 'react'
// import ResponsiveAppBar from '../navbar/nabar'
import Footer from './footer'
import Header from './header'
const MainLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}

			<Footer />
		</>
	)
}
export default MainLayout
