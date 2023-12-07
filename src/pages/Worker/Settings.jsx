import Footer from '../../elements/components/Footer/footer'
import Header2 from '../../elements/components/Header/Header_2'
import Billing from '../../elements/components/Settings/Billing'
import Security from '../../elements/components/Settings/Security'
import SellerProfile from '../../elements/components/Settings/SellerProfile'
import UserProfile from '../../elements/components/Settings/UserProfile'

const Settings = () => {
	const user = JSON.parse(localStorage.getItem('user'))
	const isAdmin = JSON.parse(localStorage.getItem('isAdmin'))
	const worker = user.role === 'worker'
	const employer = user.role === 'employer'

	const scrollToSection = (event, sectionId) => {
		event.preventDefault()

		const section = document.getElementById(sectionId)
		section.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<>
			<Header2 employer={employer} worker={worker} />
			<div className="mx-14">
				<ul className="flex justify-center flex-wrap px-10 pt-8 pb-2 w-full ">
					<li className="pr-2 py-2 group scale-90 text-xl text-primary hover:text-primary hover:scale-95 cursor-pointer font-semibold">
						<span className="bg-left-bottom bg-gradient-to-r  from-teal-500 to-teal-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
							<a
								href="#account"
								onClick={(event) => scrollToSection(event, 'account')}
							>
								Account
							</a>
						</span>
					</li>
					<li className="pr-2 py-2 group scale-90 text-xl text-primary hover:text-primary hover:scale-95 cursor-pointer font-semibold">
						<span className="bg-left-bottom bg-gradient-to-r  from-teal-500 to-teal-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
							<a
								href="#security"
								onClick={(event) => scrollToSection(event, 'security')}
							>
								Security
							</a>
						</span>
					</li>
					<li className="pr-2 py-2 group scale-90 text-xl text-primary hover:text-primary hover:scale-95 cursor-pointer font-semibold">
						<span className="bg-left-bottom bg-gradient-to-r  from-teal-500 to-teal-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
							<a
								href="#billing"
								onClick={(event) => scrollToSection(event, 'billing')}
							>
								Billing and Payments
							</a>
						</span>
					</li>
					{worker && (
						<li className="pr-2 py-2 group scale-90 text-xl text-primary hover:text-primary hover:scale-95 cursor-pointer font-semibold">
							<span className="bg-left-bottom bg-gradient-to-r  from-teal-500 to-teal-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
								<a
									href="#sellerprofile"
									onClick={(event) => scrollToSection(event, 'sellerprofile')}
								>
									Seller Profile
								</a>
							</span>
						</li>
					)}
				</ul>
				<div className="py-4 px-4 border mb-8 divide-y">
					<div id="account">
						<UserProfile user={user} />
					</div>

					<div id="security">
						<Security />
					</div>
					<div id="sellerprofile">{worker && <SellerProfile />} </div>
					<div id="billing" className="divide-y">
						<Billing />
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Settings
