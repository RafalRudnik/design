import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import { useData } from '../context/AppContext';

const data = [
	{
		name: 'Vite',
		icon: <i className='ti ti-brand-vite'></i>,
		delay: 0,
	},
	{
		name: 'React',
		icon: <i className='ti ti-brand-react'></i>,
		delay: 0.1,
	},
	{
		name: 'React Query',
		icon: <i className='ti ti-brand-react-native'></i>,
		delay: 0.2,
	},
	{
		name: 'Javascript',
		icon: <i className='ti ti-brand-javascript'></i>,
		delay: 0.3,
	},
	{
		name: 'HTML',
		icon: <i className='ti ti-brand-html5'></i>,
		delay: 0.4,
	},
	{
		name: 'SCSS',
		icon: <i className='ti ti-brand-sass'></i>,
		delay: 0.5,
	},
	{
		name: 'Tailwind CSS',
		icon: <i className='ti ti-brand-tailwind'></i>,
		delay: 0.6,
	},
	{
		name: 'Framer Motion',
		icon: <i className='ti ti-brand-framer-motion'></i>,
		delay: 0.7,
	},
	{
		name: 'GSAP',
		icon: <i className='ti ti-ease-in-out'></i>,
		delay: 0.8,
	},
	{
		name: 'Swift',
		icon: <i className='ti ti-brand-swift'></i>,
		delay: 0.9,
	},
];

function WorkTech() {
	const tech = useRef(null);
	const [currOpen, setCurrOpen] = useState(null);

	const { scrollYProgress } = useScroll({
		target: tech,
		offset: ['start end', 'start center'],
	});

	const width = useTransform(scrollYProgress, [0.2, 0.8], ['130%', '100%']);
	const borderRadius = useTransform(scrollYProgress, [0.6, 1], ['0%', '16px']);

	return (
		<motion.div
			className='work-tech'
			ref={tech}
			style={{
				width,
				borderRadius: borderRadius,
			}}>
			<motion.div
				className='work-tech--img'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.5 }}>
				<img src='./img/working-min.png' alt='working developer'></img>
			</motion.div>
			<div className='work-tech--content'>
				<motion.h3
					initial={{ scaleY: 0 }}
					whileInView={{ scaleY: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}>
					Technologie
				</motion.h3>
				{data.map((item, index) => (
					<TechItem
						item={item}
						key={index}
						currOpen={currOpen}
						setCurrOpen={setCurrOpen}
						index={index}
					/>
				))}
			</div>
		</motion.div>
	);
}

function TechItem({ item, index, currOpen, setCurrOpen }) {
	const { setIcon, setCursorActive } = useData();

	const isActive = currOpen === index;
	function handleActive() {
		setCurrOpen(isActive ? null : index);
		setIcon(item.icon);
	}

	function handleCursorOut() {
		setIcon(null);
		setCurrOpen(null);
		setCursorActive(false);
	}

	function handleCursorActive() {
		setCursorActive(true);
	}

	return (
		<li onMouseLeave={handleCursorOut} onMouseEnter={handleCursorActive}>
			<motion.p
				initial={{ x: -100 }}
				whileInView={{ x: 0 }}
				transition={{ duration: 1, delay: item.delay }}
				viewport={{ once: true }}
				onMouseOver={handleActive}
				className={isActive ? 'active' : ''}>
				{item.name} {item.icon}
			</motion.p>
		</li>
	);
}

export default WorkTech;
