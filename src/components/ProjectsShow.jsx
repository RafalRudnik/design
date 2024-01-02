import { motion } from 'framer-motion';

const dataImg = [
	{
		title: 'text',
		img: './img/library.png',
	},
	{
		title: 'text',
		img: './img/Foreset.png',
		class: 'projects-show--reverse',
	},
	{
		title: 'text',
		img: './img/library.png',
	},
	{
		title: 'text',
		img: './img/Glasses.png',
		class: 'projects-show--reverse',
	},
];

function ProjectsShow() {
	return (
		<div className='projects-show'>
			{dataImg.map((item, index) => (
				<ProjectsShowImg item={item} key={index} />
			))}
		</div>
	);
}

export default ProjectsShow;

function ProjectsShowImg({ item }) {
	return (
		<div className={`projects-show--img ${item.class}`}>
			<p>{item.title}</p>
			<motion.img
				initial={{ translateZ: '-160px', rotateY: '87deg' }}
				whileInView={{ translateZ: 0, rotateY: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				src={item.img}
				alt={item.title}></motion.img>
		</div>
	);
}
