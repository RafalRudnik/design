import { motion, useTransform, useScroll } from 'framer-motion';

function AboutWelcome() {
	const { scrollYProgress } = useScroll();
	const x = useTransform(scrollYProgress, [0, 0.4], [0, 140]);

	return (
		<div className='about-welcome'>
			<div className='about-welcome--img'>
				<motion.h3 style={{ x }}>Witamy w BNC</motion.h3>
				<img src='./img/aboutMain.png'></img>
			</div>
			<div className='about-welcome--desc'>
				<motion.p
					initial={{ color: '#646363' }}
					whileInView={{ color: '#f4f1f1' }}
					transition={{ duration: 1, delay: 1 }}>
					Twój partner w zakresie najnowocześniejszego projektowania i tworzenia
					stron internetowych.
				</motion.p>
				<motion.p
					initial={{ color: '#646363' }}
					whileInView={{ color: '#f4f1f1' }}
					transition={{ duration: 1, delay: 1.5 }}>
					W dzisiejszej erze cyfrowej przekonująca obecność w Internecie nie
					podlega negocjacjom.
				</motion.p>
				<motion.p
					initial={{ color: '#646363' }}
					whileInView={{ color: '#f4f1f1' }}
					transition={{ duration: 1, delay: 2 }}>
					Nasz zespół ekspertów zajmuje się tworzeniem atrakcyjnych wizualnie,
					funkcjonalnych stron internetowych, które przynoszą wyniki Twojej
					firmie.
				</motion.p>
			</div>
		</div>
	);
}

export default AboutWelcome;
