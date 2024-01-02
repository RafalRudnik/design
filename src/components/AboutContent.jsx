import AboutFooter from './AboutFooter';
import AboutSlide from './AboutSlide';
import AboutTitile from './AboutTitile';
import AboutWelcome from './AboutWelcome';

function AboutContent() {
	return (
		<div className='container about-main'>
			<AboutTitile />
			<AboutWelcome />
			<AboutSlide />
			<AboutFooter />
		</div>
	);
}

export default AboutContent;
