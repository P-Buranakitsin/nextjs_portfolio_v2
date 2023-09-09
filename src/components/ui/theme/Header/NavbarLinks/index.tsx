'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import ToggleTheme from 'components/ui/theme/Header/ToggleTheme';

type NavbarLinksProps = {
	desktop?: boolean;
	sidebar?: boolean;
};

const NavbarLinks = ({ sidebar, desktop }: NavbarLinksProps) => {
	const [hasMounted, setHasMounted] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (pathname !== '/') {
		return <></>
	}

	return (
		<div
			className={clsx({
				'items-center hidden lg:flex': desktop || !sidebar,
				'visible absolute inset-x-0 top-20 z-30 mx-auto w-10/12 rounded-md bg-white dark:bg-zinc-900 lg:hidden flex-col flex p-4': !desktop,
			})}
		>

			<Link
				href={`${pathname}#about`}
				className="text-black lg:mb-0 mr-0 lg:mr-4 dark:text-white lg:dark:text-black min-[2170px]:dark:text-white h-[48px] flex items-center justify-center"
				scroll
			>
				About
			</Link>
			<Link
				href={`${pathname}#projects`}
				className="text-black lg:mb-0 mr-0 lg:mr-4 dark:text-white lg:dark:text-black min-[2170px]:dark:text-white h-[48px] flex items-center justify-center"
				scroll
			>
				Projects
			</Link>
			<Link
				href={`${pathname}#contact`}
				className="text-black lg:mb-0 mr-0 lg:mr-4 dark:text-white lg:dark:text-black min-[2170px]:dark:text-white h-[48px] flex items-center justify-center"
				scroll
			>
				Contact
			</Link>
			{/* {hasMounted && <ToggleTheme />} */}
		</div>
	);
};

export default NavbarLinks;
