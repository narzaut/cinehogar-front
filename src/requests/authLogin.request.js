
export const login = async ( email, password ) => {
	const url='//localhost:3030/v1/auth/login';
	let response ;
	try{
		await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})	
		})
		.then(response => {
			return response.json()
		})
		.then(json => {
			response = json
		})
	} catch{
		response = null
	}
	
	return response
}