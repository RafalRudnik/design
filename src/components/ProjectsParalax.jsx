import styles from './ProjectsParalax.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';

const images = [
	'1.png',
	'2.png',
	'3.png',
	'4.png',
	'5.png',
	'6.png',
	'7.png',
	'8.png',
	'9.png',
	'10.png',
	'11.png',
	'12.png',
];

function ProjectsParalax() {
	const gallery = useRef(null);
	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	const { scrollYProgress } = useScroll({
		target: gallery,
		offset: ['start end', 'end start'],
	});
	const { height } = dimension;
	const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
	const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
	const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

	useEffect(() => {
		const resize = () => {
			setDimension({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener('resize', resize);
		resize();

		return () => {
			window.removeEventListener('resize', resize);
		};
	}, []);

	return (
		<div className={styles.mainGallery}>
			<div className={styles.spacer}>
				<motion.p
					initial={{ rotate: '90deg' }}
					whileInView={{ rotate: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					viewport={{ once: true }}>
					<i className='ti ti-arrow-down-circle'></i>
				</motion.p>
			</div>
			<div className={styles.gallery} ref={gallery}>
				<div className={styles.galleryWrapper}>
					<Column images={[images[0], images[1], images[2]]} y={y} />
					<Column images={[images[3], images[4], images[5]]} y={y2} />
					<Column images={[images[6], images[7], images[8]]} y={y3} />
					<Column images={[images[9], images[10], images[11]]} y={y4} />
				</div>
			</div>
			<div className={styles.spacer}>
				<motion.p
					initial={{ rotate: '90deg' }}
					whileInView={{ rotate: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}>
					<i className='ti ti-arrow-down-right-circle'></i>
				</motion.p>
			</div>
		</div>
	);
}

export default ProjectsParalax;

function Column({ images, y }) {
	return (
		<motion.div className={styles.column} style={{ y }}>
			{images.map((src, i) => {
				return (
					<div key={i} className={styles.imageContainer}>
						<img src={`./img/${src}`} alt='image' />
					</div>
				);
			})}
		</motion.div>
	);
}
