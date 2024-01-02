import { Link } from 'react-router-dom';
import { useData } from '../context/AppContext';

function BackBtn() {
	const { dispatch } = useData();

	function handleBackBtn() {
		dispatch({ type: 'home' });
	}

	return (
		<div className='back'>
			<Link to='/' onClick={handleBackBtn} className='back-btn'>
				<i className='ti ti-arrow-narrow-left'></i>
			</Link>
		</div>
	);
}

export default BackBtn;
