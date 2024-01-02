import { createContext, useContext, useReducer } from 'react';

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

	return (
		<AppContext.Provider value={{ menuOpen, page, isScrolling, dispatch }}>
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
