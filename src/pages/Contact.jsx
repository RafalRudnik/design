import { useLocation } from 'react-router-dom';
import { useData } from '../context/AppContext';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactContent from '../components/ContactContent';

function Contact() {
	const { pathname } = useLocation();
	const { dispatch, page } = useData();

	useEffect(
		function () {
			dispatch({ type: 'contact' });
			// dispatch({ type: 'isScrolling', payload: false });
		},
		[pathname, dispatch]
	);

	return (
		<AnimatePresence mode='wait'>
			{page === 'contact' && (
				<motion.section
					className='container-fluid'
					initial={{ y: '100%' }}
					animate={{ y: 0 }}
					exit={{ y: '100%' }}
					transition={{ duration: 0.8, delay: 1 }}>
					<ContactContent />
				</motion.section>
			)}
		</AnimatePresence>
	);
}

export default Contact;
