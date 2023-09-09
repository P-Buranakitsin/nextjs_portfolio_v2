import AllProjects from "components/modules/AllProjects"
import Image from "next/image"
import Link from "next/link"


const Projects = () => {
	return (
		<>
			<div className="bg-[url('/assets/illustrations/overlay.svg')] bg-contain bg-right-top bg-no-repeat pb-16">
				<div className="container py-16 flex items-center flex-col md:flex-row justify-between pt-[140px]">
					<div className="flex-1 w-full md:w-1/2 mb-8 md:mb-0">
						<h1 className="mb-8 text-3xl md:text-5xl font-bold text-brand-primary dark:text-white typography">All Projects</h1>
					</div>
				</div>
			</div>
			<div className="flex flex-col flex-grow">
				<AllProjects />
			</div>
		</>
	)
}

export default Projects