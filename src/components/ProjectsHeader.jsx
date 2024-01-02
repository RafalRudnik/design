import { motion } from 'framer-motion';

function ProjectsHeader() {
	return (
		<div className='about-header projects-header'>
			<div className='projects-header--title'>
				<p>koduj</p>
				<p>twórz</p>
				<p>rozwój</p>
			</div>
			<motion.div
				className='about-header--title'
				initial={{ rotateX: 90, y: 0 }}
				animate={{ rotateX: 0, y: '-55%' }}
				transition={{ duration: 0.5, delay: 3 }}>
				<h2>Projekty</h2>
			</motion.div>
		</div>
	);
}

export default ProjectsHeader;

{
	/* <div className='about-header'>
	<img
		className='about-header--img'
		src='./img/City-min.png'
		alt='coder coding'></img>
	<motion.div
		className='about-header--title'
		initial={{ rotateX: 90, y: 0 }}
		animate={{ rotateX: 0, y: '-55%' }}
		transition={{ duration: 0.5, delay: 3 }}>
		<h2>Projekty</h2>
	</motion.div>
</div>; */
}
