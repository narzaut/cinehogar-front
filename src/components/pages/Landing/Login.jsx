import React from 'react';
import { NavBar } from './NavBar'

export const Login = () => {
	return (
		<div className='font header h-screen glass darker-glass shadow-2xl'>
			<div className='flex w-full  flex-col items-center  justify-start 	text-gray-200 h-full'>
				<NavBar />
				<div className=' w-full h-full flex items-center justify-center'>
					<div className='flex  flex-col w-full md:w-2/3 lg:w-2/3 glass mx-4 px-4 lg:px-10 py-10 rounded-lg '>
						login
					</div>
				</div>
			</div>
		</div>
	)
}