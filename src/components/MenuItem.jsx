import { Link } from 'react-router-dom';
import { useData } from '../context/AppContext';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

function MenuItem({ item }) {
	const link = useRef(null);
	const [linkActive, setLinkActive] = useState(false);

	const { dispatch } = useData();

	function handleNavigate() {
		setLinkActive(true);

		setTimeout(() => {
			dispatch({ type: `${item.dispatch}` });
		}, 600);
	}

	useEffect(function () {
		const menu = link.current;
		gsap.fromTo(
			menu.children,
			{
				y: '-=100',
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.6,
				delay: 0.3,
				stagger: 0.4,
				ease: 'easeInOut',
			}
		);
	}, []);

	return (
		<li className={`nav-item ${linkActive ? 'itemActive' : ''}`} ref={link}>
			<Link
				to={item.dispatch}
				className='nav-item--link'
				onClick={handleNavigate}>
				<h2 className='nav-item--link-title'>{item.name}</h2>
				{item.secName && <h2>{item.secName}</h2>}
			</Link>
		</li>
	);
}

export default MenuItem;
