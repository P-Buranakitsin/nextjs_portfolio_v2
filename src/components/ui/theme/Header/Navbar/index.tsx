import Link from 'next/link';
import NavbarLinks from 'components/ui/theme/Header/NavbarLinks';
import { IoArrowBackOutline } from 'react-icons/io5'
import { usePathname } from 'next/navigation';
import { IHeaderProps } from '..';

const Navbar = ({ isHomePage }: IHeaderProps) => {
	const pathname = usePathname();
	return (
		<div className="container flex items-center justify-between p-6">
			<Link href="/" className="typography dark:text-white text-black flex flex-row gap-2 items-center">
				{pathname !== "/" && <IoArrowBackOutline />}Pavaruth Buranakitsin
			</Link>
			<NavbarLinks desktop isHomePage={isHomePage} />
		</div>
	)
};

export default Navbar;
