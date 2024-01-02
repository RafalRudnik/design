import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../context/AppContext';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AboutHeader from '../components/AboutHeader';
import AboutContent from '../components/AboutContent';
import NextSection from '../components/NextSection';

function About() {
	const { page } = useData();
	const { pathname } = useLocation();
	const { dispatch } = useData();
	const link = 'work';

	useEffect(
		function () {
			dispatch({ type: 'about' });
		},
		[pathname, dispatch]
	);

	return (
		<AnimatePresence mode='wait'>
			{page === 'about' && (
				<motion.section
					className='container-fluid about'
					initial={{ y: '100%' }}
					animate={{ y: 0 }}
					// exit={{ y: '100%' }}
					transition={{ duration: 0.8, delay: 1 }}>
					<AboutHeader />
					<AboutContent />
					<NextSection link={link}>Czym się zajmujemy</NextSection>
				</motion.section>
			)}
		</AnimatePresence>
	);
}

export default About;

// page === 'about';
// 	return <section className='container-fluid about'></section>;

{
	/* <AnimatePresence mode='wait'>
	{page === 'about' && (
		<motion.section
			className='container-fluid about'
			initial={{ y: '100%' }}
			animate={{ y: 0 }}
			exit={{ y: '100%' }}
			transition={{ duration: 0.7, delay: 1 }}>
			<AboutHeader />
			<AboutContent />
		</motion.section>
	)}
</AnimatePresence>; */
}

// if (page === 'about')
// 		return (
// 			<section className='container-fluid about'>
// 				<AboutHeader />
// 				<AboutContent />
// 			</section>
// 		);
