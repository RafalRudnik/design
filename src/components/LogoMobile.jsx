import { Link } from 'react-router-dom';
import { useData } from '../context/AppContext';

function LogoMobile() {
	const { dispatch } = useData();

	function handleHomeLink() {
		dispatch({ type: 'home' });
	}

	return (
		<Link className='logoMobile' onClick={handleHomeLink}>
			<h1>BNC</h1>
			<h2>WEB</h2>
			<h2>DESIGN</h2>
		</Link>
	);
}

export default LogoMobile;
