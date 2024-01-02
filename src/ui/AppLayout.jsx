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

function AppLayout() {
	const { pathname } = useLocation();
	const { dispatch, page, menuOpen } = useData();

	useEffect(
		function () {
			dispatch({ type: 'home' });
			dispatch({ type: 'isScrolling', payload: false });
		},
		[pathname, dispatch]
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
