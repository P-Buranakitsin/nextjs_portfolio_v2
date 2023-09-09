import getRepos from 'lib/getRepos';
import Repository from 'components/ui/Repository';
import Button from 'components/ui/Button';

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
				<Button text='All projects' page='/projects' />
			</div>
		</div>
	);
};

export default Projects;
