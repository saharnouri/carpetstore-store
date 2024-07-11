import Image from 'next/image';
import Link from 'next/link';
import filter from 'public/icons/filter.png';
import Input from '@src/components/base/input';
import ProductCategory from './ProductCategory';
import { routes } from '@src/constants/routes';
import {
	CategoryFilter,
	FilterProducts,
	PriceRange,
	ProductContent,
	Products,
	Search,
	Sidebar,
	Wrapper,
} from './styled';

type CategoryProductType = {
	data: [];
};

const CategoryProduct = ({ data }: CategoryProductType) => {
	const listCategory = [
		{ title: 'تمام ابریشم', link: 'silk' },
		{ title: 'هریس', link: 'heriz' },
		{ title: 'عشایری', link: 'nomadic' },
		{ title: ' انتیک', link: 'antique' },
		
	];

	return (
		<Wrapper>
			<ProductContent>
				<FilterProducts>
					<p>
						نمایش {data.length} از {data.length} محصولات
					</p>
					<Search>
						<Input placeholder={'جست و جو'} borderColor={'2px solid #2b2b71'} />
					</Search>
					<div>
						<span>فیلتر</span>

						<Image src={filter} alt='filter' width={18} height={18} />
					</div>
				</FilterProducts>

				<Products>
					<ProductCategory list={data} />
				</Products>
			</ProductContent>

			<Sidebar>
				
				<div>
				
					<CategoryFilter>
						{listCategory.map((item, index) => (
							<Link href={routes.category(item.link)} key={index}>
								<span key={index}>{item.title}</span>
							</Link>
						))}
					</CategoryFilter>
				</div>
			</Sidebar>
		</Wrapper>
	);
};

export default CategoryProduct;
