import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-creative';
import { EffectCreative, Pagination, A11y, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';

function ProjectSlider({ data, children }) {
	const { scrollYProgress } = useScroll();
	const width = useTransform(scrollYProgress, [0, 0.3], ['100vw', '90vw']);
	const y = useTransform(scrollYProgress, [0, 0.3], ['0%', '15%']);

	return (
		<motion.div className='project' style={{ width, y }}>
			<div className='project-slider'>
				<Swiper
					className='project-img'
					grabCursor={true}
					effect={'creative'}
					creativeEffect={{
						prev: {
							shadow: true,
							translate: ['-20%', 0, -1],
						},
						next: {
							translate: ['100%', 0, 0],
						},
					}}
					modules={[EffectCreative, Pagination, A11y, Mousewheel]}
					pagination={{ clickable: true }}
					mousewheel={true}>
					{data.map((img, index) => (
						<SwiperSlide img={img} key={index}>
							<img src={img} alt='image'></img>
						</SwiperSlide>
					))}
				</Swiper>

				<div className='project-desc'>
					<div className='project-desc--txt'>
						<p>{children}</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default ProjectSlider;
