import clsx from 'clsx';
import { IHeaderProps } from '..';

type HamburgerProps = {
	sidebar?: boolean;
	toggle: (value: boolean) => void;
};

const Hamburger = ({ sidebar, toggle, isHomePage }: HamburgerProps & IHeaderProps) => (
	<div
		className={clsx('z-20 top-[1.6rem] right-[1.8rem] cursor-pointer burger-transition absolute block lg:hidden')}
		onClick={() => toggle(!sidebar)}
	>
		<div
			className={clsx('w-6 h-0.5 mb-1.5 burger-bar-transition bg-brand-primary', {
				'translate-y-2 -rotate-[135deg] dark:bg-white': sidebar,
			})}
		/>
		<div
			className={clsx('w-6 h-0.5 mb-1.5 bg-brand-primary burger-bar-transition', {
				'scale-0': sidebar,
			})}
		/>
		<div
			className={clsx('w-6 h-0.5 mb-1.5 bg-brand-primary burger-bar-transition', {
				'bg-brand-primary dark:bg-white -translate-y-[7px] -rotate-45': sidebar,
			})}
		/>
	</div>
);

export default Hamburger;
