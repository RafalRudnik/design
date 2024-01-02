import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/work',
				element: <Work />,
			},
			{
				path: '/projects',
				element: <Projects />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
]);

function App() {
	useEffect(function () {
		const lenis = new Lenis();

		lenis.on('scroll', (e) => {
			console.log(e);
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
