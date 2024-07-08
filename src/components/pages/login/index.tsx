import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import logo1 from 'public/images/logo1.png';
import Button from '@src/components/base/button';
import Input from '@src/components/base/input';
import { postAuth } from '@src/api/auth';
import { routes } from '@src/constants/routes';
import { updateGlobalSlice } from '../../../store/globalSlice';
import { Form, FormButton, LoginDescription, LoginWrapper, Logo, Password, Register } from './style';

const LoginPage = () => {
	const dispatch = useDispatch();

	const [inputValues, setInputValues] = useState({
		email: '',
		password: '',
	});
	const router = useRouter();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setInputValues((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const handleSubmitForm = async () => {
		const response = await postAuth(inputValues.email, inputValues.password);

		if (response.status === 201) {
			dispatch(updateGlobalSlice(inputValues));
			router.push(routes.home);
		}
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	useEffect(() => {
		const email = localStorage.getItem('email');
		const password = localStorage.getItem('password');

		if (email && password) {
			router.push(routes.home);
		}
	}, []);

	return (
		<LoginWrapper>
			<Register>
				<Logo>
					<Image src={logo1} alt='logo' />
				</Logo>

				<LoginDescription>
					<p>لطفا ایمیل و رمز عبور خود را وارد کنید</p>
				</LoginDescription>

				<Form onSubmit={handleSubmit}>
					<Input
						width={'335px'}
						height={'50px'}
						placeholder='ایمیل'
						name='email'
						value={inputValues.email}
						onChange={handleChange}
					/>
					<Password>
						<Input
							width={'335px'}
							height={'50px'}
							name='password'
							placeholder='رمز عبور'
							type={'password'}
							value={inputValues.password}
							onChange={handleChange}
						/>
					</Password>

					<FormButton>
						<Button width={'335px'} height={'50px'} onClick={handleSubmitForm}>
							ورود
						</Button>
					</FormButton>
				</Form>
			</Register>
		</LoginWrapper>
	);
};

export default LoginPage;
