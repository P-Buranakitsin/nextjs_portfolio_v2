import clsx from 'clsx';
import NavbarLinks from 'components/ui/theme/Header/NavbarLinks';
import { IHeaderProps } from '..';

type SideBarProps = {
	sidebar?: boolean;
	toggle: () => void;
};

const Sidebar = ({ sidebar, toggle, isHomePage }: SideBarProps & IHeaderProps) => (
	<div
		className={clsx(
			'',
			{
				'absolute inset-0 h-screen w-screen bg-black/30 z-10': sidebar,
				'opacity-0': !sidebar,
			},
		)}
		onClick={toggle}
	>
		<NavbarLinks sidebar={sidebar} isHomePage={isHomePage} />
	</div>
);

export default Sidebar;
