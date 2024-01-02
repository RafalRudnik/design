import { useEffect } from 'react';
import { useData } from '../context/AppContext';

function Footer() {
	const { page, dispatch, isScrolling } = useData();

	useEffect(
		function () {
			function handleScroll() {
				const offset = window.scrollY;

				// Adjust the offset value based on your design
				if (offset > 0.1 * window.innerHeight && page !== '') {
					dispatch({ type: 'isScrolling', payload: true });
				} else if (offset < 0.1 * window.innerHeight && page !== '') {
					dispatch({ type: 'isScrolling', payload: false });
				}
			}

			window.addEventListener('scroll', handleScroll);

			// Clean up the event listener on component unmount
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		},
		[page, dispatch]
	);

	return (
		<footer className='container-fluid'>
			<div className={`footer ${isScrolling ? 'footerOut' : ''}`}>
				<div className='footer-main'>
					<div className='footer-desc'>
						<a
							href='https://rafal-rudnik.com/'
							target='_blank'
							rel='noreferrer'>
							BNC Rafał Rudnik
						</a>
					</div>
					<div className='footer-desc'>
						<p>bnc@rafal-rudnik.com</p>
					</div>
				</div>
				<div className='footer-social footer-desc'>
					<a
						href='https://www.linkedin.com/in/rafał-rudnik-9b2463283/'
						target='_blank'
						rel='noreferrer'>
						<i className='ti ti-brand-linkedin'></i>Linkedin
					</a>
					<a
						href='https://github.com/RafalRudnik'
						target='_blank'
						rel='noreferrer'>
						<i className='ti ti-brand-github-filled'></i>Github
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
