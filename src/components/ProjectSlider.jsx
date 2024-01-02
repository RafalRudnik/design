import { useState } from 'react';
import {
	motion,
	AnimatePresence,
	useScroll,
	useTransform,
} from 'framer-motion';

const slideVariants = {
	hiddenRight: {
		opacity: 0.4,
		x: '100%',
	},
	hiddenLeft: {
		opacity: 0.4,
		x: '-100%',
	},
	visible: {
		opacity: 1,
		x: '0',
		transition: {
			duration: 0.3,
		},
	},
	exitLeft: {
		x: '-100%',
		transition: {
			duration: 0.3,
		},
	},
	exitRight: {
		x: '100%',
		transition: {
			duration: 0.3,
		},
	},
};

function ProjectSlider({ data, children }) {
	const [step, setStep] = useState(0);
	const [direction, setDirection] = useState('left');
	const [currOpen, setCurrOpen] = useState(data[step]);

	const { scrollYProgress } = useScroll();
	const width = useTransform(scrollYProgress, [0, 0.3], ['100vw', '90vw']);
	const y = useTransform(scrollYProgress, [0, 0.3], ['0%', '15%']);

	function handlePrevious() {
		setDirection('left');
		if (step > 0) {
			setStep((step) => step - 1);
			setCurrOpen(data[step - 1]);
		}
	}

	function handleNext() {
		setDirection('right');
		if (step < 3) {
			setStep((step) => step + 1);
			setCurrOpen(data[step + 1]);
		}
	}

	return (
		<motion.div className='project' style={{ width, y }}>
			<div className='project-slider'>
				<div className='project-img'>
					<AnimatePresence>
						<motion.img
							src={currOpen}
							variants={slideVariants}
							initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
							animate='visible'
							// exit={direction === 'right' ? 'exitLeft' : 'exitRight'}
							key={currOpen}></motion.img>
					</AnimatePresence>
				</div>

				<div className='project-desc'>
					<div className='project-buttons'>
						<button
							onClick={handlePrevious}
							disabled={step === 0}
							className={`project-btn ${
								step === 0 ? 'project-btn--disabled' : ''
							}`}>
							<i className='ti ti-arrow-narrow-left'></i>
						</button>
						<button
							onClick={handleNext}
							disabled={step === 3}
							className={`project-btn ${
								step === 3 ? 'project-btn--disabled' : ''
							}`}>
							<i className='ti ti-arrow-narrow-right'></i>
						</button>
					</div>
					<div className='project-desc--txt'>
						<ProjectDots step={step} />
						<p>{children}</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default ProjectSlider;

function ProjectDots({ step }) {
	return (
		<div className='project-dots'>
			<div
				className={`project-dot ${
					step === 0 ? 'project-dot--active' : ''
				}`}></div>
			<div
				className={`project-dot ${
					step === 1 ? 'project-dot--active' : ''
				}`}></div>
			<div
				className={`project-dot ${
					step === 2 ? 'project-dot--active' : ''
				}`}></div>
			<div
				className={`project-dot ${
					step === 3 ? 'project-dot--active' : ''
				}`}></div>
		</div>
	);
}
