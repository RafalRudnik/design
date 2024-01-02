import { motion } from 'framer-motion';

function AboutHeader() {
	return (
		<div className='about-header'>
			<img
				className='about-header--img'
				src='./img/coderHero-min.png'
				alt='coder coding'></img>
			<motion.div
				className='about-header--title'
				initial={{ rotateX: 90, y: 0 }}
				animate={{ rotateX: 0, y: '-55%' }}
				transition={{ duration: 0.5, delay: 3 }}>
				<h2>O firmie</h2>
			</motion.div>
		</div>
	);
}

export default AboutHeader;
