import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../context/AppContext';
import MenuItem from './MenuItem';

const menuData = [
	{
		name: 'O firmie',
		dispatch: 'about',
	},
	{
		name: 'Sprawdź',
		secName: 'co robimy',
		dispatch: 'work',
	},
	{
		name: 'Przykładowe',
		secName: 'projekty',
		dispatch: 'projects',
	},
	{
		name: 'Bądzimy',
		secName: 'w kontakcie',
		dispatch: 'contact',
	},
];

function Menu() {
	const { menuOpen, page } = useData();

	return (
		<AnimatePresence mode='wait'>
			{menuOpen && page === '' && (
				<motion.ul
					className='nav'
					exit={{ opacity: 0, rotateY: -90, x: 500 }}
					transition={{ duration: 1, delay: 0.6 }}>
					{menuData.map((item, index) => (
						<MenuItem item={item} key={index} />
					))}
				</motion.ul>
			)}
		</AnimatePresence>
	);
}

export default Menu;
