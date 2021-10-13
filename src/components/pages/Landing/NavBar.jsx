import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { useHistory ,useLocation } from 'react-router-dom';
export const NavBar = () => {
	const history = useHistory()
	return (
		<div className='flex flex-col md:flex-row lg:flex-row w-full items-center justify-between md:px-12 darker-glass shadow-2xl md:py-6 '>
			<div className='py-6 md:py-0 select-none flex items-center gap-4 md:gap-6'>
				<img className='h-16' src='assets/logo.png'></img>
				<span className='text-gray-200 font-bold text-2xl text-shadow uppercase tracking-wider border-b-2 rounded-lg px-2 border-orange'>
					<span className='text-3xl text-orange'>C</span>ine
					<span className='pl-1 text-3xl text-orange'>H</span><span>ogar</span>
				</span>
			</div>
			<div className={`${history.location.pathname == '/login' && 'hidden'} w-full md:w-40`}>
				<Link to='/login'>
					<div className={` w-full text-gray-200  text-shadow py-1 md:py-2 px-2 md:px-4 transition bg-orange hover-bg-darker-orange rounded-sm cursor-pointer select-none`}>
						<i className="fas fa-user mr-2 "></i>
						Iniciar sesión
					</div>
				</Link>

			
			</div>
		</div>
	)
}