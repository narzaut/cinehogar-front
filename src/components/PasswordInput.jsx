import React, {useEffect, useState} from "react";

export function PasswordInput({icon, type, errors, register, value, placeholder, required }) {
	const [error, setError] = useState('')
	//Conditional css
	let errorBorder;
	errors ? errorBorder = ' focus:border-red-400' : errorBorder = ' focus-border-green'

	//Select error message
	useEffect(() => {
		if (errors){
			errors.types.pattern ?
				setError(errors.types.pattern)
			:
				setError(errors.message)
		} else {
			setError('')
		}	
	}, [errors])

	//Validation based on prop 'type'
		const reg = register(value, {required: {value:required, message:'Campo requerido'}, pattern: {value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, message:'Contraseña inválida'}})

	return (
		<div className='py-3 '>
			<label className='flex flex-col hidden' htmlFor={value}>{placeholder}</label>

			<div className='flex  flex-col relative'>
				<i className={"text-gray-700 absolute top-1/2 transform -translate-y-1/2 left-3 " + icon}></i>
				<div className=''>
					<div className='flex'>
						<input
							id={value}
							{...reg}
							className={`py-1 px-8 font-semibold hide-input-cursor  placeholder-gray-400 text-gray-800 border-transparent focus:outline-none border-4 input-color outline-none rounded text-base text-center  ${errorBorder}`}
							autoComplete={'off'}
							type='password'
						/>
					</div>
					
				</div>
			</div>
			<p className='pt-1 pl-1 text-xs text-red-500 font-bold '>{error ? <span><i className="fas fa-exclamation-circle"></i> {error}</span>  : ''}</p>
		</div>
  );
}
