import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined'
import React from 'react'
import icon from '../../../images/icon.jpg'
const Profile = () => {
	return (
		<>
			<div className="h-full flex flex-wrap w-full p-5 text-primary">
				<div className="w-4/12 h-screen mx-auto pr-4 ">
					<div className="h-full border-2 shadow-xl rounded-xl py-8 px-4   ">
						dgshdjh
					</div>
				</div>
				<div className=" w-8/12 h-full mx-auto">
					<div className="flex-col py-8 px-4 rounded-xl border-2 shadow-sm">
						<div className="flex py-2">
							<div className="w-8/12 pl-4 pt-8 divide-y">
								<h1 className="text-5xl pb-1 text-secondary-light font-bold">
									Malik Moin Abbas
								</h1>
								<h3 className="text-xl p-1 font--semibold text-primary">
									Full Stack Developer
								</h3>
							</div>{' '}
							<div className="w-4/12">
								{' '}
								<img
									className="mx-auto rounded-full border-secondary-light p-1 border-4 bg-cover bg-center shadow-xl"
									src={icon}
									height="180px"
									width="180px"
									alt="icon"
								/>
							</div>
						</div>
						<div className="flex-col flex-wrap border-2 h-full pb-4 rounded-md shadow-md">
							<h3 className="text-xl font-semibold text-center text-primary py-2 underline underline-secondary-light">
								About Me
							</h3>
							<p className="px-4 text-sm font-medium text-primary">
								lorem is a text and ipsum is it messagelorem is a text and ipsum
								is it message lorem is a text and ipsum is it message lorem is a
								text and ipsum is it message lorem is a text and ipsum is it
								message lorem is a text and ipsum is it message is it message
								lorem is a text and ipsum is it message lorem is a text and
								ipsum is it message lorem is a text and ipsum is it message
								lorem is a text and ipsum is it message
							</p>
						</div>
						<div>
							<RoomOutlinedIcon />
							From Islamabad, Pakistan
						</div>
					</div>
					<div className="flex-col py-8 my-2 px-8 rounded-xl border-2 divide-y divide-secondary-light">
						<h1 className="text-3xl font-semibold text-primary">
							Work Experience
						</h1>
						<div className="px-4 py-6">
							<h1 className="text-lg font-semibold pl-2">Merik Solutions</h1>
							<p className="text-sm text-secondary-light pl-2 font-medium">
								{' '}
								2yrs-5months
							</p>

							<div className="px-8 pt-6">
								<h1 className="text-lg font-semibold ">Backend Developer</h1>
								<p className="text-sm font-medium text-secondary-light">
									Jan 2022 - Present
								</p>
								<div>
									<p className="py-3 text-sm">
										<b>Skills Involved: </b>Scrum · Agile Methodologies ·
										Customer Relationship Management (CRM) · Microsoft Teams ·
										Telecommunications · English · Jira · Slack · Google
										Workplace Scrum · Agile Methodologies · Customer
										Relationship Management (CRM) · Microsoft Teams ·
										Telecommunications · English · Jira · Slack · Google
										Workplace
									</p>
									<p className="py-3 text-sm">
										<b>Role: </b>
										My role is to blah blah blah blah blah blah blah blah blah
										blah blahMy role is to blah blah blah blah blah blah blah
										blah blah blah blahMy role is to blah blah blah blah blah
										blah blah blah blah blah blah
									</p>
								</div>
							</div>
						</div>
						<div className="px-4 py-6">
							<h1 className="text-lg font-semibold pl-2">Merik Solutions</h1>
							<p className="text-sm text-secondary-light pl-2 font-medium">
								{' '}
								2yrs-5months
							</p>

							<div className="px-8 pt-6">
								<h1 className="text-lg font-semibold ">Backend Developer</h1>
								<p className="text-sm font-medium text-secondary-light">
									Jan 2022 - Present
								</p>
								<div>
									<p className="py-3 text-sm">
										<b>Skills Involved: </b>Scrum · Agile Methodologies ·
										Customer Relationship Management (CRM) · Microsoft Teams ·
										Telecommunications · English · Jira · Slack · Google
										Workplace Scrum · Agile Methodologies · Customer
										Relationship Management (CRM) · Microsoft Teams ·
										Telecommunications · English · Jira · Slack · Google
										Workplace
									</p>
									<p className="py-3 text-sm">
										<b>Role: </b>
										My role is to blah blah blah blah blah blah blah blah blah
										blah blahMy role is to blah blah blah blah blah blah blah
										blah blah blah blahMy role is to blah blah blah blah blah
										blah blah blah blah blah blah
									</p>
								</div>
							</div>
						</div>
						<div className="px-4 py-6">
							<h1 className="text-lg font-semibold pl-2">Merik Solutions</h1>
							<p className="text-sm text-secondary-light pl-2 font-medium">
								{' '}
								2yrs-5months
							</p>

							<div className="px-8 pt-6">
								<h1 className="text-lg font-semibold ">Backend Developer</h1>
								<p className="text-sm font-medium text-secondary-light">
									Jan 2022 - Present
								</p>
								<div>
									<p className="py-3 text-sm">
										<b>Skills Involved: </b>Scrum · Agile Methodologies ·
										Customer Relationship Management (CRM) · Microsoft Teams ·
										Telecommunications · English · Jira · Slack · Google
										Workplace Scrum · Agile Methodologies · Customer
										Relationship Management (CRM) · Microsoft Teams ·
										Telecommunications · English · Jira · Slack · Google
										Workplace
									</p>
									<p className="py-3 text-sm">
										<b>Role: </b>
										My role is to blah blah blah blah blah blah blah blah blah
										blah blahMy role is to blah blah blah blah blah blah blah
										blah blah blah blahMy role is to blah blah blah blah blah
										blah blah blah blah blah blah
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="mt-2 px-5 text-center">
						<h1 className="text-lg font-bold">{data.name}</h1>
						<h3>{data.role} </h3>
					</div>
					<div className="text-center">
						<Rating name="read-only" value={3} readOnly />
					</div>
					<div className="flex flex-wrap pt-10  px-6">
						<div className="text-left text-md font-bold">
							Experience: {data.exp} <br />
							Hourly Rate: {data.rate}
							<br />
							Total Jobs: {data.jobs}
							<br />
						</div>
					</div>
					<div className="flex w-full py-10">
						<button
							type="submit"
							className="mx-auto rounded-md bg-secondary-light px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-secondary-dark active:bg-teal-900 active:text-white focus:ring-2 focus:ring-teal-900 "
						>
							View Full Profile
						</button>
					</div> */}
				</div>
			</div>
		</>
	)
}

export default Profile
