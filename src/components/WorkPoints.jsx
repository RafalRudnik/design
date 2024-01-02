import { motion } from 'framer-motion';

const workData = [
	{
		title: 'Projekt strony internetowej',
		desc: 'Rozumiemy, że każda firma jest wyjątkowa. Nasz zespół tworzy projekty dostosowane do tożsamości Twojej marki, zapewniając wyjątkową obecność w Internecie',
	},
	{
		title: 'Responsywny rozwój',
		desc: 'W świecie zorientowanym na urządzenia mobilne responsywność jest kluczowa. Tworzymy strony internetowe, które płynnie dostosowują się do różnych urządzeń, zapewniając optymalną wygodę użytkowania na smartfonach, tabletach i komputerach stacjonarnych',
	},
	{
		title: 'Optymalizacja SEO',
		desc: 'Piękna strona internetowa jest skuteczna tylko wtedy, gdy ludzie mogą ją znaleźć. Nasi eksperci SEO wdrażają strategie mające na celu zwiększenie widoczności Twojej witryny w wyszukiwarkach, generując ruch organiczny do Twojej witryny',
	},
	{
		title: 'Zarządzanie treścią',
		desc: 'Rozumiemy, że każda firma jest wyjątkowa. Nasz zespół tworzy projekty dostosowane do tożsamości Twojej marki, zapewniając wyjątkową obecność w Internecie.',
	},
];

function WorkPoints() {
	return (
		<ul className='work-points'>
			{workData.map((item, index) => (
				<WorkPoint item={item} key={index} />
			))}
		</ul>
	);
}

export default WorkPoints;

function WorkPoint({ item }) {
	return (
		<li className='work-point'>
			<motion.div
				className='work-point--title'
				initial={{ x: -200, opacity: 0.4 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}>
				<h3>
					{item.title}{' '}
					<span>
						<i className='ti ti-arrow-narrow-right'></i>
					</span>
				</h3>
			</motion.div>
			<motion.div
				className='work-point--desc'
				initial={{ y: 200, opacity: 0.4 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}>
				<p>{item.desc}</p>
			</motion.div>
		</li>
	);
}
