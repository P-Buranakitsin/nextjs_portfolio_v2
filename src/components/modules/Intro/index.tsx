import Link from 'next/link';
import Image from 'next/image';
import Header from 'components/ui/theme/Header';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { MdOutlineMail } from 'react-icons/md'

const Intro = () => {

	const contactsData = [{
		link: 'https://github.com/P-Buranakitsin',
		Icon: IoLogoGithub,
	}, {
		link: 'https://rb.gy/7nvvb',
		Icon: IoLogoLinkedin
	}, {
		link: 'mailto:pavaruth.buranakitsin@gmail.com',
		Icon: MdOutlineMail
	}]

	const Contacts = () => {
		return contactsData.map((contact, index) => {
			return (
				<Link href={contact.link} target='_blank' className='opacity-100 hover:opacity-100 flex w-fit ' key={index}>
					<contact.Icon size={34} color='rgb(129 140 248)' />
				</Link>
			)
		})
	}

	return (
		<div className="bg-[url('/assets/illustrations/overlay.svg')] bg-contain bg-right-top bg-no-repeat pb-16">
			<div className="container py-16 flex items-center flex-col md:flex-row justify-between pt-[140px]">
				<div className="flex-1 w-full md:w-1/2 mb-8 md:mb-0">
					<h1 className="mb-8 text-3xl md:text-5xl font-bold text-brand-primary dark:text-white typography">Hi There!</h1>
					<h2 className="text-2xl md:text-4xl text-brand-secondary dark:text-slate-200 typography">
						I’m Pavaruth and I’m seeking front-end, back-end, or full-stack web developer roles!
					</h2>
					<div className='my-8 flex flex-row gap-6 items-center'>
						<Contacts />
					</div>
					<div className='flex flex-row flex-wrap gap-6'>
						<Link className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-indigo-100 text-indigo-800 border border-transparent font-semibold  hover:text-white hover:bg-indigo-300 focus:outline-none focus:ring-2 ring-offset-white focus:ring-indigo-500 focus:ring-offset-2 transition-all text-lg dark:focus:ring-offset-gray-800' href={'/about'}>
							About me
						</Link>
						<Link className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-indigo-200 font-semibold text-indigo-800 hover:text-white hover:bg-indigo-300 hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2 transition-all text-lg dark:focus:ring-offset-gray-800' href={'/assets/resume/Pavaruth-Buranakitsin-Resume.pdf'} target='_blank'>
							My resume
						</Link>
					</div>
				</div>
				<div className="flex-1 w-full md:w-1/2">
					<Image
						src="/assets/illustrations/dev.svg"
						alt="I’m John and I’m a JAMStack engineer!"
						width={463}
						height={273}
						priority
					/>
				</div>
			</div>
		</div>
	)
};

export default Intro;
