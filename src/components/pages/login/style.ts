import styled from '@emotion/styled';

export const LoginWrapper = styled.div(() => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	minHeight: '100vh',
}));

export const Form = styled.form(() => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	direction:'rtl',
}));

export const Register = styled.div(() => ({
	'@media (max-width: 600px)': {
		border: 'none',
		padding: '0',
	},
	border: '3px solid #2b2b71',
	height: 440,
	borderRadius: 100,
	padding: 30,
	boxShadow:'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px',
}));

export const Logo = styled.div(() => ({
	display: 'flex',
	justifyContent: 'center',
}));

export const LoginDescription = styled.div(() => ({
	fontSize: 18,
	marginTop: 35,
	marginBottom: 35,
	textAlign:'right',
	color:'#2b2b71',
}));

export const Password = styled.div(() => ({
	marginTop: 25,
}));

export const FormButton = styled.div(() => ({
	marginTop: 25,
	
	
}));


