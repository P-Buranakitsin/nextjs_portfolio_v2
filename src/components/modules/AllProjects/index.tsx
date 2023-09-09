import Repository from "components/ui/Repository";
import getRepos from "lib/getRepos"

const AllProjects = async () => {
	const data = await getRepos(50, 'DESC')
	return (
		<div className="container py-8" id="projects">
			<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-2 lg:col-span-3">
				{data
					? data.map(({ node }) => {
						if (!node) return null;
						return <Repository key={node.id} {...node} />;
					})
					: null}
			</div>
		</div>
	)
}

export default AllProjects