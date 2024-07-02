import styled from '@emotion/styled';
import theme from '@styles/theme';

const { black } = theme.colors;

export const HeaderContent = styled.header(() => ({
	width: '100%',
	height: '80px',
	background: ' white',
	boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
	position: 'fixed',
	zIndex: 99,
}));

export const HeaderWrapper = styled.div(() => ({
	...theme.wrapper,
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	flexDirection:'row-reverse',
	backgroundColor:'rgb(215,231,234)',
	boxshadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
}));

export const ListCategories = styled.div(() => ({
	display: 'flex',
	justifyContent: 'center',
	fontSize: 20,
	padding: '0 10px',
	overflow: 'hidden',

	'& a': {
		whiteSpace: 'pre',
		textDecoration: 'none',
		color: black[100],
	},

	'@media (max-width: 1092px)': {
		justifyContent: 'flex-start',
	},

	'@media (max-width: 600px)': {
		display: 'none',
	},
}));

export const Category = styled.span(() => ({
	cursor: 'pointer',
	marginRight: 40,
}));
