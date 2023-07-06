import React from 'react'
import Angular from '../../../images/new-icons/Angular.svg'
import asp from '../../../images/new-icons/Asp.svg'
import bootstrap from '../../../images/new-icons/Bootstrap.svg'
import elementor from '../../../images/new-icons/Elementor.svg'
import javascript from '../../../images/new-icons/Javascript.svg'
import Next from '../../../images/new-icons/Next.svg'
import django from '../../../images/new-icons/Node.svg'
// import python from '../../../images/new-icons/Python.svg'
import shopify from '../../../images/new-icons/S.png'
import stripe from '../../../images/new-icons/Stripe.svg'
import ts from '../../../images/new-icons/Typescript.svg'
import Vue from '../../../images/new-icons/Vue.svg'
import android from '../../../images/new-icons/android.svg'
import ios from '../../../images/new-icons/apple-icon.svg'
import flutter from '../../../images/new-icons/flutter.svg'
import html from '../../../images/new-icons/html.svg'
import ionic from '../../../images/new-icons/ionic.svg'
import kotlin from '../../../images/new-icons/kotlin.svg'
import laravel from '../../../images/new-icons/laravel.svg'
import mongo from '../../../images/new-icons/leaf.png'
import php from '../../../images/new-icons/php.svg'
import react from '../../../images/new-icons/react-native.svg'
import redis from '../../../images/new-icons/redis.png'
import wordpress from '../../../images/new-icons/wordpress.svg'
// import sql from '../../images/new-icons/Sql.svg';
const Tech = () => {
	const serviceData = [
		{
			title: 'ReactJS',
			icon: (
				<img src={react} className="max-w-full h-full mx-auto" alt="icon" />
			),
		},
		{
			title: 'ASP.Net',
			icon: <img src={asp} className="max-w-full h-full mx-auto" alt="icon" />,
		},
		{
			title: 'Laravel',
			icon: (
				<img src={laravel} className="max-w-full h-full mx-auto" alt="icon" />
			),
		},
		{
			title: 'Angular',
			icon: (
				<img src={Angular} className="max-w-full h-full mx-auto" alt="icon" />
			),
		},

		{
			icon: <img src={Vue} className="max-w-full h-full mx-auto" alt="icon" />,
			title: 'VueJs',
		},
		{
			icon: <img src={Next} className="max-w-full h-full mx-auto" alt="icon" />,
			title: 'NextJs',
		},
		{
			icon: (
				<img
					src={shopify}
					className="max-w-full h-full py-1 mx-auto"
					alt="icon"
				/>
			),
			title: 'Shopify',
		},
		{
			icon: <img src={php} className="max-w-full h-full mx-auto" alt="icon" />,
			title: 'PHP',
		},
		{
			icon: (
				<img src={android} className="max-w-full h-full mx-auto" alt="icon" />
			),
			title: 'Android App',
		},
		{
			icon: <img src={ios} className="max-w-full h-full mx-auto" alt="icon" />,
			title: 'iOS App',
		},
		{
			icon: (
				<img src={flutter} className="max-w-full h-full mx-auto" alt="icon" />
			),
			title: 'Flutter',
		},
		{
			icon: (
				<img src={kotlin} className="max-w-full h-full mx-auto" alt="icon" />
			),
			title: 'Kotlin',
		},

		{
			icon: (
				<img src={ionic} className="max-w-full h-full mx-auto" alt="icon" />
			),
			title: 'Ionic',
		},
		{
			icon: (
				<img
					src={javascript}
					className="max-w-full h-full mx-auto"
					alt="icon"
				/>
			),

			title: 'JavaScript',
		},

		{
			icon: (
				<img src={mongo} className="max-w-full h-full  mx-auto" alt="icon" />
			),
			title: 'Mongo DB',
		},
		{
			icon: (
				<img src={wordpress} className="max-w-full h-full mx-auto" alt="icon" />
			),
			title: 'Wordpress',
		},
		{
			icon: (
				<img src={redis} className="max-w-full h-full mx-auto" alt="icon" />
			),
			title: 'Redis',
		},
		{
			title: 'HTML',
			icon: <img src={html} className="max-w-full h-full mx-auto" alt="icon" />,
		},

		{
			title: 'TypeScript',
			icon: (
				<img src={ts} className="max-w-full h-full py-1 mx-auto" alt="icon" />
			),
		},
		{
			title: 'Bootstrap',
			icon: (
				<img
					src={bootstrap}
					className="max-w-full h-full py-1 mx-auto"
					alt="icon"
				/>
			),
		},
		// {
		// 	title: 'CSS',
		// 	icon: <img src={css} className="max-w-full h-full" alt="icon" />,
		// },
		{
			title: 'NodeJs',
			icon: (
				<img
					className="max-w-full h-full px-1 mx-auto"
					src={django}
					alt="icon"
				/>
			),
		},
		{
			title: 'NodeJs',
			icon: (
				<img
					className="max-w-full h-full px-1 mx-auto"
					src={django}
					alt="icon"
				/>
			),
		},
		// {
		// 	title: 'Python',
		// 	icon: (
		// 		<img
		// 			src={python}
		// 			className="max-w-full h-full py-1 pl-1 mx-auto"
		// 			alt="icon"
		// 		/>
		// 	),
		// },
		{
			title: 'Stripe',
			icon: (
				<img src={stripe} className="max-w-full h-full mx-auto" alt="icon" />
			),
		},
		{
			title: 'Elementor',
			icon: (
				<img className="max-w-full h-full mx-auto" src={elementor} alt="icon" />
			),
		},
	]

	return (
		<>
			{' '}
			{/* <div className="row justify-items-center">
				{serviceData.map((item, index) => (
					<div className="col col-6 col-lg-2 col-md-3 mx-auto my-1 py-2">
						<div
							className="flex flex-wrap align-items-center px-1 py-1"
							style={{
								height: '4.5rem',
							}}
						>
							<div
								className=" h-75 col-4 flex justify-items-center py-1 px-1"
								style={{
									border: '1px solid gray ',
									borderRadius: '10px',
									overflow: 'hidden',
								}}
							>
								{item.icon}
							</div>

							<h6 className="m-0 col-8 p-0 pl-1">{item.title}</h6>
						</div>
					</div>
				))}
			</div> */}
			<div className="w-full p-12 h-full">
				<div className="text-center mb-10">
					<h2 className="text-3xl font-bold py-2 m-tb0">
						Technologies That Our Developers Love Working With
					</h2>
					<p className="text-lg px-16 py-2">
						Our pool of languages and frameworks used provide you with the best
						solutions for your business problems
					</p>
				</div>

				<div className="flex flex-wrap justify-center h-full ">
					{serviceData.map((item, index) => (
						<div className="w-2/12 h-20 mx-auto px-2 py-2" key={index}>
							<div className="flex flex-wrap justify-start items-center">
								<div className="w-4/12 h-16 p-2 border-1 border border-gray-400 rounded-xl">
									{item.icon}
								</div>
								<div className="text-lg font-medium px-2">{item.title}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Tech
