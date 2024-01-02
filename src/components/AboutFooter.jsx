import { motion } from 'framer-motion';

function AboutFooter() {
	return (
		<div className='about-footer'>
			<div className='about-footer-one'>
				<motion.p
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}>
					Wznieś swój biznes na wyższy poziom dzięki naszym profesjonalnym
					usługom projektowania i tworzenia stron internetowych.{' '}
				</motion.p>
				<div>
					<i className='ti ti-arrow-narrow-left'></i>
				</div>
			</div>
			<div className='about-footer-two'>
				<div>
					<i className='ti ti-arrow-narrow-right'></i>
				</div>
				<motion.p
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}>
					Specjalizujemy się w tworzeniu atrakcyjnych, przyjaznych dla
					użytkownika stron internetowych, które przykuwają uwagę odbiorców.
				</motion.p>
			</div>
			<div className='about-footer-three'>
				<motion.p
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}>
					Od responsywnych projektów po rozwiązania wizjonerskie – wcielamy
					Twoją wizję w życie online.
				</motion.p>
				<div>
					<i className='ti ti-arrow-narrow-left'></i>
				</div>
			</div>
		</div>
	);
}

export default AboutFooter;
