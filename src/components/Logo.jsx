import { useData } from '../context/AppContext';
import { useEffect, useState } from 'react';

function Logo() {
	const { page, isScrolling, dispatch } = useData();
	// const [isScrolling, setIsScrolling] = useState(false);

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
		<div className={`logo ${isScrolling ? 'logoActive' : ''}`}>
			<h1>BNC</h1>
			<h2>WEB</h2>
			<h2>DESIGN</h2>
		</div>
	);
}

export default Logo;

{
	/* <div className={`logo ${page !== '' ? 'logoActive' : ''}`}>
	<h1>BNC</h1>
	<h2>WEB</h2>
	<h2>DESIGN</h2>
</div>; */
}
