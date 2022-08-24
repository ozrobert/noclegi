import { useEffect, useReducer } from 'react';
import './App.scss';
import Throbber from './components/UI/Throbber';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import SearchBar from './components/UI/SearchBar/SearchBar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './context/ThemeContext';
import AuthContext from './context/AuthContext';
import BestHotel from './components/Hotels/BestHotel/BestHotel';

const backendHotels = [
    {
        id: 1,
        name: 'Pod akacjami',
        city: 'Warszawa',
        rating: 8.3,
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione cumque a rem, eum nulla odit voluptates, deleniti labore sapiente nobis voluptatem voluptate sed eos nisi distinctio sint dolorem.',
        image: '',
    },
    {
        id: 2,
        name: 'Dębowy',
        city: 'Lublin',
        rating: 8.9,
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione cumque a rem, eum nulla odit voluptates, deleniti labore sapiente nobis voluptatem voluptate sed eos nisi distinctio sint dolorem.',
        image: '',
    },
];

const initialState = {
    isAuthenticated: false,
    hotels: [],
    loading: true,
    theme: 'primary',
};

const ACTIONS = {
    LOGIN: 'login',
    LOGOUT: 'logout',
    CHANGE_THEME: 'change-theme',
    GET_HOTELS: 'get-hotels',
    SET_LOADING: 'set-loading',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return { ...state, isAuthenticated: true };
        case 'logout':
            return { ...state, isAuthenticated: false };
        case 'change-theme':
            const theme = state.theme === 'primary' ? 'blue' : 'primary';
            return { ...state, theme };
        case 'get-hotels':
            return {
                ...state,
                hotels: action.hotels ? action.hotels : backendHotels,
            };
        case 'set-loading':
            return { ...state, loading: action.loading };
        default:
            throw new Error(`Action ${action.type} doesn't exist!`);
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getBestHotel = () => {
        if (state.hotels.length < 2) {
            return null;
        } else {
            return state.hotels.reduce((prevHotel, currentHotel) => {
                return prevHotel.rating > currentHotel.rating
                    ? prevHotel
                    : currentHotel;
            });
        }
    };

    const searchHandler = (term) => {
        const newHotels = [...backendHotels].filter((hotel) =>
            hotel.name.toLowerCase().includes(term.trim().toLowerCase())
        );
        dispatch({ type: ACTIONS.GET_HOTELS, hotels: newHotels });
    };

    useEffect(() => {
        // symulacja połączenia z backendem (opóźnienie otrzymania danych)
        setTimeout(() => {
            dispatch({ type: ACTIONS.GET_HOTELS });
            dispatch({ type: ACTIONS.SET_LOADING, loading: false });
        }, 1000);
    }, []);

    const header = (
        <Header>
            <SearchBar onSearch={searchHandler} />
            <ThemeButton />
        </Header>
    );
    const menu = <Menu />;
    const content = state.loading ? (
        <Throbber />
    ) : (
        <>
            <BestHotel getHotel={getBestHotel} />
            <Hotels hotels={state.hotels} />
        </>
    );
    const footer = <Footer />;

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: state.isAuthenticated,
                login: () => dispatch({ type: ACTIONS.LOGIN }),
                logout: () => dispatch({ type: ACTIONS.LOGOUT }),
            }}
        >
            <ThemeContext.Provider
                value={{
                    color: state.theme,
                    changeTheme: () => dispatch({ type: ACTIONS.CHANGE_THEME }),
                }}
            >
                <Layout
                    header={header}
                    menu={menu}
                    content={content}
                    footer={footer}
                />
            </ThemeContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
