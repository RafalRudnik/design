import { motion } from 'framer-motion';

const letterData = ['S', 'c', 'h', 'e', 'm', 'a', 't', 'y'];

const fadeIn = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: (index) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.04 * index,
			duration: 0.5,
		},
	}),
};

function ProjectsSubtitle() {
	return (
		<div className='projects-sub'>
			<h3>
				{letterData.map((letter, index) => (
					<Letter letter={letter} key={index} index={index} />
				))}
			</h3>
		</div>
	);
}

export default ProjectsSubtitle;

function Letter({ letter, index }) {
	return (
		<motion.span
			variants={fadeIn}
			initial='initial'
			whileInView='animate'
			custom={index}>
			{letter}
		</motion.span>
	);
}
