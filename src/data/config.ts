const config = {
	defaultTitle: 'Pavaruth Buranakitsin',
	url:
		process.env.NODE_ENV !== 'development'
			? (process.env.NEXT_PUBLIC_PORTFOLIO_URL as string)
			: 'http://localhost:3040',
	defaultDescription: 'My name is Pavaruth and I am seeking front-end, back-end, or full-stack developer roles.',
	googleAnalyticsID: 'G-PE8QW0ZGTZ',
	NEXT_PUBLIC_PORTFOLIO_URL: process.env.NEXT_PUBLIC_PORTFOLIO_URL as string,
	twitter: '@smakosh',
};

export default config;
