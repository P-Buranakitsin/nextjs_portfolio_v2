'use client';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';

const Header = () => {
	const [sidebar, toggle] = useState(false);
	const [bgColor, setBgColor] = useState('bg-transparent');

	const handleScroll = () => {
		const position = window.pageYOffset;
		if (position > 50) {
			setBgColor('bg-white/30 backdrop-blur-md');
		} else {
			setBgColor('bg-transparent');
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={`w-full bg-transparent fixed ${bgColor}`}>
			<div
				className={clsx('bg-black/70 w-full h-full transition-all duration-300 ease-in-out', {
					'block z-10': sidebar,
					hidden: !sidebar,
				})}
				onClick={() => toggle(!sidebar)}
			/>
			<Navbar />
			<Hamburger sidebar={sidebar} toggle={toggle} />
			<Sidebar sidebar={sidebar} toggle={() => toggle(!sidebar)} />
		</div>
	);
};

export default Header;
