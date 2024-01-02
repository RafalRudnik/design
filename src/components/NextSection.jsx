import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollToTop from '../components/ScrollToTop';
import { useData } from '../context/AppContext';

function NextSection({ link, children }) {
	const { dispatch } = useData();

	function handleNextSection() {
		dispatch({ type: 'closeMenu' });
		setTimeout(() => {
			dispatch({ type: `${link}` });
		}, 100);
	}

	return (
		<motion.div
			className='nextSection'
			initial={{ scaleY: 0.2 }}
			whileInView={{ scaleY: 1 }}
			transition={{ duration: 0.6 }}>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.6 }}>
				<Link
					to={`/${link}`}
					className='nextSection--link'
					onClick={handleNextSection}>
					{children}
				</Link>
				<ScrollToTop />
			</motion.div>
		</motion.div>
	);
}

export default NextSection;
