import TopTalent from '../elements/components/Carousels/TopTalent.jsx'
import NewsLetter from '../elements/components/FixedElements/NewsLetter.jsx'
import Tech from '../elements/components/FixedElements/Tech.jsx'
import HeroSection from '../elements/components/HeroSection/HeroSection.jsx'
import How from '../elements/components/HowItWorks/How.jsx'
import MainLayout from '../elements/components/Layout/Layout.jsx'
const Home = () => {
	return (
		<MainLayout>
			{' '}
			<div className="m-0 p-0 w-full ">
				<HeroSection />
				<TopTalent />
				<Tech />
				<How />

				<NewsLetter />
			</div>
		</MainLayout>
	)
}

export default Home
