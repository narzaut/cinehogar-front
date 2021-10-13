import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";

import { NavBar } from './Landing/NavBar'
import { UserInput }from "../UserInput";
import { PasswordInput } from "../PasswordInput";
import { getErrorMessage } from '../../helpers/getErrorMessage';
import { login } from '../../requests/authLogin.request'
import { GlobalContext } from '../../context/GlobalState';

export const Login = () => {
	const { register, handleSubmit, formState: { errors } } = useForm({ criteriaMode: "all",  mode: 'onChange' });
	const [submitMessage, setSubmitMessage] = useState('')
	const { userState } = useContext(GlobalContext)
	const [user, setUser] = userState
	const onSubmit = async (data, e) => {
		e.preventDefault();
		//Attempt to login
		const response = await login(data.usernameCliente, data.passwordCliente)
		//Set error message if error
		setSubmitMessage(getErrorMessage(response))
		if (!response || !response.user) return
		const { user, tokens } = response;
		localStorage.setItem('refresh_token', tokens.refresh.token)
		localStorage.setItem('access_token', tokens.access.token)
		setUser(user)
	}
	return (
		<div className='font header h-screen glass darker-glass shadow-2xl'>
			<div className='flex w-full  flex-col items-center  justify-start 	text-gray-200 h-full'>
				<NavBar />
				<div className=' w-full h-full flex items-center justify-center'>
					<div className='flex  flex-col w-full md:w-2/3 lg:w-2/3 glass mx-4 px-4 lg:px-10 py-10 rounded-lg '>
						<form className='flex flex-col items-center justify-center' onSubmit={ handleSubmit(onSubmit)}>
							<span> login </span>
							<UserInput icon={'fas fa-user'} key={'asd'} value='usernameCliente' errors={errors.usernameCliente}  placeholder='Nombre' register={register} required={true}/>
							<PasswordInput icon={'fas fa-key'} key={'asd1'} value='passwordCliente' errors={errors.passwordCliente}  placeholder='Nombre' register={register} required={true}/>
							<button type='submit'>x</button>
							{ submitMessage && <p>{ submitMessage }</p> }
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}