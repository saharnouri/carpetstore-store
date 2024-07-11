import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@src/components/base/button';
import { routes } from '@src/constants/routes';
import { postCartChange } from '@src/api/cart';
import score from 'public/icons/score.png';
import share from 'public/icons/share.png';
import interest from 'public/icons/interest.png';
import { updateGlobalSlice } from '../../../store/globalSlice';
import {
	AlbumImage,
	Description,
	Amount,
	Product,
	Wrapper,
	Price,
	ButtonBuy,
	IconProduct,
	Share,
	ProductName,
	ProductPrice,
} from './styled';

const ProductContent = ({ data }: any) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const email = useSelector((state: any) => state.globalSlice.data.email);
	const password = useSelector((state: any) => state.globalSlice.data.password);

	const handleBuy = async () => {
		if (!email && !password) {
			router.push(routes.login);
			return;
		}

		const response = await postCartChange(data.id, 1);

		if (response.status === 200) {
			dispatch(updateGlobalSlice({ cartTotal: response.cartTotal }));

			router.push(routes.cart);
		}
	};

	return (
		<>
			<Wrapper>
				<div>
					<AlbumImage>
						<Image src={data.images[0]} alt='image' width={300} height={300} />
					</AlbumImage>

					<Product>
						<ProductName>{data.title}</ProductName>

						<Image src={score} alt='score' />

						<Description>{data.content}</Description>

						<ProductPrice>
							<Price>price:</Price>
							<Amount>{`تومان ${data.price}`}</Amount>
						</ProductPrice>

						<ButtonBuy>
							<Button width={'335px'} height={'50px'} onClick={handleBuy}>
								Buy now
							</Button>
						</ButtonBuy>
					</Product>
				</div>
			</Wrapper>
		</>
	);
};

export default ProductContent;
