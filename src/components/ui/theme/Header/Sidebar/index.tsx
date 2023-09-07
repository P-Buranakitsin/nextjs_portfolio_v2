import clsx from 'clsx';
import NavbarLinks from 'components/ui/theme/Header/NavbarLinks';

type SideBarProps = {
	sidebar?: boolean;
	toggle: () => void;
};

const Sidebar = ({ sidebar, toggle }: SideBarProps) => (
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
		<NavbarLinks sidebar={sidebar} />
	</div>
);

export default Sidebar;
