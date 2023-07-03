import React from 'react'
import AllProfessionals from '../elements/components/Categories/AllProfessionals.jsx'
import Categories from '../elements/components/Categories/Categories.jsx'
import MainLayout from '../elements/components/Layout/Layout.jsx'
const Services = () => {
	return (
		<>
			<MainLayout>
				<Categories />
				<AllProfessionals />
			</MainLayout>
		</>
	)
}

export default Services
