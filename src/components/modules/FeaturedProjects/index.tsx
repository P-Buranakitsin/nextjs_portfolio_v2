import FeaturedWork from "components/ui/FeaturedWork"

export interface IFeaturedWork {
	url: string
	name: string,
	description: string,
	tools: string[],
	image: string,
}

const FeaturedProjects = async () => {
	const projects: IFeaturedWork[] = [{
		name: 'Freelancerth',
		description: 'A freelancing platform web app built with Next.js along with some of the most popular tools and libraries in 2023, such as Prisma, Tailwind CSS and React Query. This web app was part of the final project at the University of Glasgow.',
		tools: ['TypeScript', 'Next.js', 'Tailwind CSS'],
		url: 'https://freelancerth-staging.vercel.app/',
		image: '/assets/projects/freelancerth.png',
	}, {
		name: 'Ecommerce37',
		description: 'This is an e-commerce website developed using the Django framework. It was created as part of the Internet Technology course at the University of Glasgow. The website demonstrates the practical skills and knowledge gained through the course.',
		tools: ['Python', 'Django', 'Bootstrap'],
		url: 'https://pavaruthb.pythonanywhere.com/',
		image: '/assets/projects/ecommerce37.png',
	}, {
		name: 'ChupChup',
		description: 'Chup Chup is a dynamic voucher selling platform that offers a wide range of vouchers from multiple industries. As a voucher selling platform, Chup Chup focuses on providing customers with discounted deals and savings in various sectors, including restaurants, hotels, and automotive services.',
		tools: ['TypeScript', 'React.js', 'Bootstrap'],
		url: '',
		image: '/assets/projects/chupchup.png'
	}]

	return (
		<div className="container py-8" id="projects">
			<h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
			<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-2 lg:col-span-3">
				{projects.length > 0 ? projects.map((project, index) => {
					return <FeaturedWork {...project} key={index} />
				}) : <></>}
			</div>
		</div>
	)
}

export default FeaturedProjects;