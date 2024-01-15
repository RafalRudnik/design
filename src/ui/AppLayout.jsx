import { Outlet, useLocation } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Menu from '../components/Menu';
import { useData } from '../context/AppContext';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import LogoMobile from '../components/LogoMobile';
import BackBtn from './BackBtn';
import Problems from '../components/Problems';
import { motion } from 'framer-motion';

function AppLayout() {
	const { pathname } = useLocation();
	const { dispatch, page } = useData();
	const { setMousePosition, cursorVariant, variants, icon, cursorActive } =
		useData();

	useEffect(
		function () {
			dispatch({ type: 'home' });
			dispatch({ type: 'isScrolling', payload: false });
		},
		[pathname, dispatch]
	);

	useEffect(
		function () {
			const mouseMove = (e) => {
				setMousePosition({
					x: e.clientX,
					y: e.clientY,
				});
			};
			window.addEventListener('mousemove', mouseMove);

			return () => {
				window.removeEventListener('mousemove', mouseMove);
			};
		},
		[setMousePosition]
	);

	return (
		<div className='container-fluid main'>
			<Menu />
			<Logo />
			<LogoMobile />
			{page === '' && <Problems />}
			{page !== '' && <BackBtn />}
			<main className='container-fluid'>
				<Outlet />
				<ScrollToTop />
			</main>
			<Footer />
			<motion.div
				className={`cursor ${cursorActive ? 'cursorActive' : ''}`}
				animate={cursorVariant}
				variants={variants}>
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}>
					{icon}
				</motion.div>
			</motion.div>
		</div>
	);
}

export default AppLayout;

/* <AnimatePresence mode='wait'>
				<motion.main
					className='container-fluid'
					key={useLocation().pathname}
					initial={{ y: '100%' }}
					animate={{ y: 0 }}
					exit={{ y: '100%' }}
					transition={{ duration: 1, delay: 1 }}>
					
					{outlet}
					<ScrollToTop />
				</motion.main>
</AnimatePresence> */
