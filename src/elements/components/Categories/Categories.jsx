import React from 'react'

const categories = [
	'Software Architect',
	'Project Manager',
	'Quality Assurance',
	'Web Developer',
	'Software Developer',
	'Software Engineer',
	'DevOps Engineer',
	'Computer Programmer',
	'Computer Scientist',
	'Data Scientist',
	// 'IT Director',
	'Network Engineer',
	'System Analyst',
	'User Experience Designer',
	'DataBase Administrator',
	'Web Designer',
	'Project Manager',
	// 'IT Security Specialist',
]

const Categories = () => {
	return (
		<div className="w-full h-full px-10 py-10">
			<div className="border-2 py-5 px-5 flex-wrap flex-col h-full shadow-xl rounded-md">
				<div className="text-3xl text-center font-bold w-full py-2 mx-auto">
					All Categories By Profession
				</div>
				<div className="flex flex-wrap my-4 w-full mx-auto">
					{categories.map((item) => (
						<div className="p-4 w-[23%] border rounded-xl shadow-md border-2 mx-auto my-2 group scale-90 text-lg text-center text-primary hover:text-teal-900 hover:scale-95 cursor-pointer font-semibold">
							<span className="bg-left-bottom bg-gradient-to-r  from-teal-500 to-teal-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
								{item}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Categories
