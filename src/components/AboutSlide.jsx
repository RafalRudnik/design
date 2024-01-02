import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sliderData = [
	{
		id: 1,
		url: './img/knowagle.png',
		reasonTitle: 'Bogata wiedza',
		reason:
			'Wiedza specjalistyczna zapewniająca profesjonalną i atrakcyjną wizualnie stronę internetową',
	},
	{
		id: 2,
		url: './img/technology.png',
		reasonTitle: 'Bieżące trendy',
		reason:
			'Najnowsze technologie sprawią, że Twoja witryna będzie nowoczesna, konkurencyjna i zoptymalizowana pod kątem wydajności',
	},
	{
		id: 3,
		url: './img/handshake.png',
		reasonTitle: 'Niezawodne wsparcie',
		reason:
			'Dzięki profesjonalnemu wsparciu, Twoja witryna internetowa pozostanie funkcjonalna i bezpieczna.',
	},
	{
		id: 4,
		url: './img/individual.png',
		reasonTitle: 'Indywidualizm',
		reason:
			'Zindywidualizowana obecność w Internecie, skutecznie reprezentuje Twoją markę i angażuje odbiorców',
	},
];

function AboutSlide() {
	const [isSticky, setIsSticky] = useState(false);
	const [isAbsolute, setIsAbsolute] = useState(false);

	function handleScroll() {
		const offset = window.scrollY;

		// Adjust the offset value based on your design
		if (offset >= 0.8 * window.innerHeight) {
			setIsSticky(true);
		} else if (offset >= 3.8 * window.innerHeight) {
			setIsSticky(false);
			setIsAbsolute(true);
		} else {
			setIsSticky(false);
			setIsAbsolute(false);
		}
	}

	useEffect(function () {
		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className='about-slide'>
			<div className='about-slide--left'>
				{sliderData.map((item, index) => (
					<AboutSlideItem item={item} key={index} />
				))}
			</div>
			<div
				className={`about-slide--right ${
					isSticky
						? 'about-slide-sticky'
						: isAbsolute
						? 'about-slide-absolute'
						: ''
				}`}>
				<div className='about-slide--title'>
					<h2>Dlaczego warto?</h2>
				</div>
			</div>
		</div>
	);
}

export default AboutSlide;

function AboutSlideItem({ item }) {
	return (
		<div className='about-slide-item'>
			<motion.div
				className='about-slide-item--box'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.2 }}>
				<h3>
					<span>{`0${item.id}`} </span>
					{item.reasonTitle}
				</h3>
				<div className='about-slide-item--desc'>
					<img src={item.url}></img>
					<p>{item.reason}</p>
				</div>
			</motion.div>
		</div>
	);
}
