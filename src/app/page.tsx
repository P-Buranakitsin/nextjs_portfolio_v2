import Intro from 'components/modules/Intro';
import Projects from 'components/modules/Projects';
import Skills from 'components/modules/Skills';
import Contact from 'components/modules/Contact';
import AllProviders from 'components/AllProviders';
import Footer from 'components/ui/theme/Footer';
import Scripts from 'components/Scripts';
import FeaturedProjects from 'components/modules/FeaturedProjects';

const HomePage = () => (
	<>
		<Scripts />
		<AllProviders>
			<Intro />
			<FeaturedProjects />
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</AllProviders>
	</>
);

export default HomePage;
