import 'server-only';
import { RepositoryEdge } from 'generated/graphql';

const getRepos = async (repoShown: number, direction: 'ASC' | 'DESC'): Promise<RepositoryEdge[]> => {
	const res = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		body: JSON.stringify({
			query: `
				query viewer {
					viewer {
						repositories(first: ${repoShown}, orderBy: {field: STARGAZERS, direction: ${direction} }) {
							edges {
								node {
									id
									name
									url
									description
									stargazers {
										totalCount
									}
									forkCount
									languages(first: 3) {
										nodes {
											id
											name
										}
									}
								}
							}
						}
					}
				}
			`,
		}),
		headers: {
			Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
		},
		next: { revalidate: 10 },
	});

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	const data = await res.json();

	return data.data.viewer.repositories.edges;
};

export default getRepos;
