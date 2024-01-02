import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../context/AppContext';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NextSection from '../components/NextSection';
import ProjectsHeader from '../components/ProjectsHeader';
import ProjectsContent from '../components/ProjectsContent';
import Project from '../components/Project';
import ProjectsParalax from '../components/ProjectsParalax';

function Projects() {
	const { page } = useData();
	const { pathname } = useLocation();
	const { dispatch } = useData();
	const link = 'contact';

	useEffect(
		function () {
			dispatch({ type: 'projects' });
			// dispatch({ type: 'isScrolling', payload: false });
		},
		[pathname, dispatch]
	);

	return (
		<AnimatePresence mode='wait'>
			{page === 'projects' && (
				<motion.section
					className='container-fluid projects'
					initial={{ y: '100%' }}
					animate={{ y: 0 }}
					exit={{ y: '100%' }}
					transition={{ duration: 0.8, delay: 1 }}>
					<ProjectsHeader />
					<Project />
					<ProjectsContent />
					<ProjectsParalax />
					<NextSection link={link}>Kontakt</NextSection>
				</motion.section>
			)}
		</AnimatePresence>
	);
}

export default Projects;
