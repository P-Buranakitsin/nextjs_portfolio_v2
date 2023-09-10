import Footer from "components/ui/theme/Footer"
import Header from "components/ui/theme/Header"
import Image from "next/image"


const About = () => {
	return (
		<>
			<Header isHomePage={false} />
			<div className="bg-[url('/assets/illustrations/overlay.svg')] bg-contain bg-right-top bg-no-repeat">
				<div className="container py-16 flex items-center flex-col md:flex-row justify-between pt-[140px]">
					<div className="flex-1 w-full md:w-1/2 mb-8 md:mb-0">
						<h1 className="mb-8 text-3xl md:text-5xl font-bold text-brand-primary dark:text-white typography">About Me</h1>
					</div>
				</div>
			</div>
			<div className="flex flex-col flex-grow">
				<div className="container py-8">
					<div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-16">
						<div className="space-y-6 md:col-span-3 lg:col-span-4">
							<p className="text-lg leading-loose">Hi there! I&apos;m<span className="font-bold"> Pavaruth Buranakitsin</span>. My journey began in Aerospace Engineering, and during my senior year, I got hooked on software engineering while working on a MATLAB project. After earning my bachelor’s degree, I spent nearly 2 years as a junior front-end developer, building cool mobile and web apps using React and React Native. Then, I decided to deepen my knowledge and pursued an MSc in Information Technology at the University of Glasgow. </p>
							<p className="text-lg leading-loose">At the University of Glasgow, my software engineering journey was a deep dive into a variety of subjects. I learned key programming concepts such as inheritance, polymorphism, and concurrency in Java, and explored database theory which taught me to normalize database schemas and use SQL for data retrieval. I also got hands-on experience with Agile methodologies and coding best practices in my software engineering course. Additionally, I studied the fundamentals of algorithms and data structures, learning to sort numbers and understanding various data structures. The icing on the cake was a course in Internet Technology where I built a basic full-stack website using the Django framework. It was an enriching and comprehensive learning experience!</p>
							<p className="text-lg leading-loose">I&apos;m a recent IT graduate from the university of Glasgow and currently looking for a new job as a front-end, back-end, or full-stack web developer. With my IT degree and almost 2 years of work experience as a junior front-end web developer, I’m ready and excited for new challenges. </p>
						</div>
						<div className="flex justify-center md:col-span-2 lg:col-span-2">
							<Image
								src={'/assets/about/me.png'}
								alt="me"
								width={512}
								height={512}
								className="rounded-md shadow-xl w-[256px] h-[256px]"
							/>
						</div>
					</div>

				</div>
			</div>
			<Footer />
		</>
	)
}

export default About