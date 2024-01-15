import { createContext, useContext, useReducer, useState } from 'react';

const initialState = {
	menuOpen: true,
	page: '',
	isScrolling: false,
	footerScrolling: false,
};
function reducer(state, action) {
	switch (action.type) {
		case 'home':
			return { ...state, page: '', menuOpen: true };
		case 'about':
			return { ...state, page: 'about', menuOpen: false };
		case 'work':
			return { ...state, page: 'work', menuOpen: false };
		case 'projects':
			return { ...state, page: 'projects', menuOpen: false };
		case 'contact':
			return { ...state, page: 'contact', menuOpen: false };
		case 'isScrolling':
			return { ...state, isScrolling: action.payload };
		case 'closeMenu':
			return { ...state, menuOpen: false };
		default:
			throw new Error('unkown action type');
	}
}

const AppContext = createContext();

function DataProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { menuOpen, page, isScrolling } = state;
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [icon, setIcon] = useState(null);
	const [cursorActive, setCursorActive] = useState(false);

	const cursorVariant = 'default';
	const variants = {
		default: {
			x: mousePosition.x - 10,
			y: mousePosition.y - 90,
		},
	};

	return (
		<AppContext.Provider
			value={{
				menuOpen,
				page,
				isScrolling,
				mousePosition,
				setMousePosition,
				variants,
				cursorVariant,
				dispatch,
				icon,
				setIcon,
				cursorActive,
				setCursorActive,
			}}>
			{children}
		</AppContext.Provider>
	);
}

function useData() {
	const context = useContext(AppContext);
	if (context === undefined)
		throw new Error('useData was used outside Provider');
	return context;
}

export { DataProvider, useData };
