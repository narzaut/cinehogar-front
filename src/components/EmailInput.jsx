import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useWindowSize } from "../hooks/useWindowsSize";
export function EmailInput({ icon, value, placeholder }) {
	const { register, handleSubmit, formState: { errors } } = useForm({ criteriaMode: "all", mode: 'onChange' });
	const [error, setError] = useState('')
	//Conditional css
	const [errorBorder, setErrorBorder] = useState('')
  const window = useWindowSize();

	//Select error message
	useEffect(() => {
		if (errors.emailPostulante) {
			errors.emailPostulante.types.pattern ?
				setError(errors.emailPostulante.types.pattern)
				:
				setError(errors.emailPostulante.message)
			setErrorBorder('focus:border-yellow-300')
		} else {
			setError('')
			setErrorBorder('focus:border-green-400')
		}
	}, [errors.emailPostulante])
	
	// ON SUBMIT
	const onSubmit = async (data, e) => {
		e.preventDefault()
		console.log(data)
	}

	//Validation
	const reg = register(value, { required: { value: true, message: 'Campo requerido' }, pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' } })
	return (
		<form className=' flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
			<div className='py-3	 w-full md:w-96 lg:w-96'>
				<div className='flex  flex-col relative'>
					<i className={"text-gray-700 absolute top-1/2 transform -translate-y-1/2 left-3 " + icon}></i>
					<div className='w-full'>
						<div className='flex'>
							<input
								id={value}
								{...reg}
								className={`w-2/3 py-3 px-8 font-semibold hide-input-cursor   placeholder-gray-400 text-gray-800 border-transparent focus:outline-none border-3 input-color outline-none rounded-l text-base text-center  ${errorBorder}`}
								autoComplete={'off'}
							/>
						</div>
					</div>
					<button className='rounded-r w-1/3 absolute top-1/2 transform -translate-y-1/2 right-0 bg-orange h-full   tracking-wider  flex items-center justify-center cursor-pointer transition hover-bg-green bg-green text-gray-100 font-semibold hover-bg-darker-orange text-shadow' type="submit">{window.width > 480 && <span>Comenzar </span> }<i class="pl-2 fas fa-angle-double-right text-2xl md:text-base lg:text-base"></i></button>
				</div>
				<p className='pt-2 pl-2 text-left text-xs text-yellow-300 font-bold  text-shadow'>{error ? <span><i class="fas fa-exclamation-circle"></i> {error}</span> : <div className='invisible'>hidden</div>}</p>
			</div>
		</form>
	);
}
