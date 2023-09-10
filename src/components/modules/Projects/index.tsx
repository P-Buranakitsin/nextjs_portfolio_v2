import getRepos from 'lib/getRepos';
import Repository from 'components/ui/Repository';
import Link from 'next/link';

const Projects = async () => {
	const data = await getRepos(5, 'ASC');
	return (
		<div className="container py-8" id="projects">
			<h2 className="text-2xl font-bold mb-6">Other Projects</h2>
			<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-2 lg:col-span-3">
				{data
					? data.map(({ node }) => {
						if (!node) return null;
						return <Repository key={node.id} {...node} />;
					})
					: null}
			</div>
			<div className='mt-10 flex justify-center items-center'>
				<Link className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-indigo-100 text-indigo-800 border border-transparent font-semibold  hover:text-white hover:bg-indigo-300 focus:outline-none focus:ring-2 ring-offset-white focus:ring-indigo-500 focus:ring-offset-2 transition-all text-lg dark:focus:ring-offset-gray-800' href={'/projects'}>
					All projects
				</Link>
			</div>
		</div>
	);
};

export default Projects;
