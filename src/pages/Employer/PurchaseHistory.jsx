import React from 'react'
import Footer from '../../elements/components/Footer/footer'
import Header2 from '../../elements/components/Header/Header_2'
import SideMenu from '../../elements/components/SideMenu'
import PurchaseTable from '../../elements/components/Tables/PurchaseTable'
const PurchaseHistory = () => {
	return (
		<>
			<Header2 />

			<div className="w-full flex flex-wrap px-6 py-10 items-center ">
				<div className="w-2/12 flex h-96 ">
					<SideMenu />
				</div>
				<div className="w-10/12 h-full px-4 ">
					<div className="bg-white shadow-xl border  rounded-xl w-full h-full p-8 ">
						<div className="text-3xl text-center py-4 font-bold text-gray-600">
							Purchase History
						</div>
						<div className="w-full h-full py-8">
							<PurchaseTable />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default PurchaseHistory
