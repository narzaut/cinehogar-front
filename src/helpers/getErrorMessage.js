export const getErrorMessage = (response) => {
	if (!response){
		return ('Error. Intente más tarde')
	}
	const { code } = response
	switch (code) {
		case 404:
			return ('El email ingresado no corresponde a un usuario')
		case 401:
			return ('Contraseña incorrecta')

	}
	return ''
}
