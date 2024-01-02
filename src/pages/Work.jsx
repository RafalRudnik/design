import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../context/AppContext';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import WorkHeader from '../components/WorkHeader';
import NextSection from '../components/NextSection';
import WorkContent from '../components/WorkContent';
import WorkBanner from '../components/WorkBanner';

function Work() {
	const { page } = useData();
	const { pathname } = useLocation();
	const { dispatch } = useData();
	const link = 'projects';

	useEffect(
		function () {
			dispatch({ type: 'work' });
			// dispatch({ type: 'isScrolling', payload: false });
		},
		[pathname, dispatch]
	);
	return (
		<AnimatePresence mode='wait'>
			{page === 'work' && (
				<motion.section
					className='container-fluid work'
					initial={{ y: '100%' }}
					animate={{ y: 0 }}
					exit={{ y: '100%' }}
					transition={{ duration: 0.8, delay: 1 }}>
					<WorkHeader />
					<WorkBanner baseVelocity={-0.4}>
						Twoja strona może być inna... Twoja strona może być inna...
					</WorkBanner>
					<WorkBanner baseVelocity={0.3}>
						Twoja strona może być inna... Twoja strona może być inna...
					</WorkBanner>
					<WorkContent />
					<NextSection link={link}>Przykładowe projekty</NextSection>
				</motion.section>
			)}
		</AnimatePresence>
	);
}

export default Work;
