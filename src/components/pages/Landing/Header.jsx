import React from 'react';
import { EmailInput } from "../../EmailInput";
import { NavBar } from './NavBar'

export const Header = () => {
	return (
		<div className='flex w-full  flex-col items-center  justify-start 	text-gray-200 h-full'>
			<NavBar />
			<div className=' w-full h-full flex items-center justify-center'>
				<div className='flex  flex-col w-full md:w-2/3 lg:w-2/3 glass mx-4 px-4 lg:px-10 py-10 rounded-lg '>
					<span className='text-2xl lg:text-5xl font-bold  text-shadow pb-6'>La mejor plataforma para ver películas y series!</span>
					<div className='flex flex-col   '>
						<span className='text-2xl lg:text-4xl text-orange text-shadow uppercase tracking-wider' > ¡ Disfrutá !</span>
						<span className='text-xl lg:text-2xl text-shadow'>Cuándo y dónde quieras</span>
						<span className='text-base lg:text-xl pt-10 text-shadow'>Ingresá tu e-mail para crear una cuenta e iniciar la suscripción.</span>
						<EmailInput icon={'fas fa-envelope'} value='emailPostulante'   placeholder='Correo electrónico' />
						<span className='text-sm text-shadow'>Cancelá en cualquier momento</span>

					</div>
				</div>
			</div>
		</div>
	)
}