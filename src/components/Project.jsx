import ProjectSlider from './ProjectSlider';

const dataOne = [
	'./img/Red01.png',
	'./img/Red02.png',
	'./img/Red03.png',
	'./img/Red04.png',
];

const dataTwo = [
	'./img/Lop01.png',
	'./img/Lop02.png',
	'./img/Lop03.png',
	'./img/Lop04.png',
];

function Project() {
	return (
		<div className='project-content'>
			<ProjectSlider data={dataOne}>
				Strona galerii RedCorridor. Wykonana przy użyciu najnowszych technologii
				React.
			</ProjectSlider>
			<ProjectSlider data={dataTwo}>
				Strona psycholożki Agaty Łopato. Również przy użyciu najnowszych
				technologii React.
			</ProjectSlider>
		</div>
	);
}

export default Project;
