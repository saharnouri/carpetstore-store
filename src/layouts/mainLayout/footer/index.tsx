import Image from 'next/image';
import Link from 'next/link';
import envelop from 'public/icons/envelop.svg';
import mobile from 'public/icons/mobile.svg';
import {
	DivContent,
	DivContentUs,
	DivLogo,
	FooterContent,
	FooterTitle,
	FooterWrapper,
	PContent,
	SpanContentUs,
	DivContentWrapper,
} from './styled';

const Footer = () => {
	return (
		<FooterContent>
			<FooterWrapper>
				<DivLogo>
					<Link href='/'>
						
					</Link>
				</DivLogo>

				<DivContent>
					<DivContentWrapper>
						<FooterTitle>درباره ما</FooterTitle>
						<PContent>
						تافته فروشگاه آنلاین تخصصی فرش دستباف است که به پشتوانه تجارب ارزنده کارشناسان مجرب این حرفه و دانش و تخصص متخصصین تجارت الکترونیک و بر پایه اصول کلیدی تنوع بالا، محتوای دقیق و مشتری مداری موفق شده است تا روز به روز فعالیت خود را توسعه بخشیده و به عنوان یک وب سایت فروشگاهی بین المللی فعالیت نماید. در تافته فرش شهرهای مختلف ایران که از گذشته مراکز مهم قالیبافی هستند ارائه میگردد.
						</PContent>
					</DivContentWrapper>

					<DivContentWrapper>
						<FooterTitle>ارتباط با ما</FooterTitle>

						<DivContentUs>
							<Image src={envelop} width={25} height={25} alt='envelop' />
							<SpanContentUs>tafteh@gmail.com</SpanContentUs>
						</DivContentUs>

						<DivContentUs>
							<Image src={mobile} width={25} height={25} alt='mobile' />
							<SpanContentUs>09102416098</SpanContentUs>
						</DivContentUs>
					</DivContentWrapper>
				</DivContent>
			</FooterWrapper>
		</FooterContent>
	);
};
export default Footer;
