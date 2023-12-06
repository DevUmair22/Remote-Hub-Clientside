import Footer from '../elements/components/Footer/footer'
import Header2 from '../elements/components/Header/Header_2'
import Billing from '../elements/components/Settings/Billing'
import Security from '../elements/components/Settings/Security'
import SellerProfile from '../elements/components/Settings/SellerProfile'
import UserProfile from '../elements/components/Settings/UserProfile'

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
				<ul className="flex justify-center flex-wrap px-10 py-10 w-full h-8">
					<li className="px-4 font-semibold text-lg text-primary hover:text-secondary-dark hover:underline">
						<a
							href="#account"
							onClick={(event) => scrollToSection(event, 'account')}
						>
							Account
						</a>
					</li>
					<li className="px-4 font-semibold text-lg text-primary hover:text-secondary-dark hover:underline">
						<a
							href="#security"
							onClick={(event) => scrollToSection(event, 'security')}
						>
							Security
						</a>
					</li>
					<li className="px-4 font-semibold text-lg text-primary hover:text-secondary-dark hover:underline">
						<a
							href="#billing"
							onClick={(event) => scrollToSection(event, 'billing')}
						>
							Billing and Payments
						</a>
					</li>
					<li className="px-4 font-semibold text-lg text-primary hover:text-secondary-dark hover:underline">
						<a
							href="#sellerprofile"
							onClick={(event) => scrollToSection(event, 'sellerprofile')}
						>
							Seller Profile
						</a>
					</li>
				</ul>
				<div className="py-4 px-4 border mb-8 divide-y">
					<div id="account">
						<UserProfile user={user} />
					</div>

					<div id="security">
						<Security />
					</div>
					<div id="sellerprofile">
						<SellerProfile />
					</div>
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
