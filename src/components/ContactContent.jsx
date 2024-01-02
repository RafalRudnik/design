import { motion } from 'framer-motion';

const contactData = [
	'Gotowy',
	', ',
	'aby ',
	'przenieść ',
	'swoją ',
	'obecność ',
	'w ',
	'Internecie ',
	'na ',
	'wyższy ',
	'poziom',
	'? ',
	'Skontaktuj ',
	'się ',
	'z ',
	'BNC ',
	'już ',
	'dziś',
	', ',
	'aby ',
	'zyskać ',
	'konsultację. ',
	'Zamieńmy ',
	'Twoją ',
	'wizję ',
	'w ',
	'rzeczywistość!',
];

const fadeIn = {
	initial: {
		opacity: 0,
	},
	animate: (index) => ({
		opacity: 1,
		transition: {
			duration: 0.3,
			delay: 0.15 * index,
		},
	}),
};

function ContactContent() {
	return (
		<div className='container contact'>
			<p>
				{contactData.map((item, index) => (
					<ContactItem item={item} key={index} index={index} />
				))}
			</p>
			<h2>BNC@RAFAL-RUDNIK.COM</h2>
		</div>
	);
}

export default ContactContent;

function ContactItem({ item, index }) {
	return (
		<motion.span
			variants={fadeIn}
			initial='initial'
			whileInView='animate'
			viewport={{ once: true }}
			custom={index}>
			{item}
		</motion.span>
	);
}
