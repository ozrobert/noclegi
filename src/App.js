import { useEffect, useState } from 'react';
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

function App() {
    // *** INNY SPOSÓB ZAPISU STANU ***
    // const [sate, setState] = useState({
    //     hotels: [],
    //     loading: true,
    //     theme: 'primary',
    //     isAuthenticated: false,
    // });

    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState('primary');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const searchHandler = (term) => {
        const newHotels = [...backendHotels].filter((hotel) =>
            hotel.name.toLowerCase().includes(term.trim().toLowerCase())
        );
        setHotels(newHotels);
    };

    const changeTheme = () => {
        setTheme(theme === 'primary' ? 'blue' : 'primary');
    };

    useEffect(() => {
        // symulacja połączenia z backendem (opóźnienie otrzymania danych)
        setTimeout(() => {
            setHotels(backendHotels);
            setLoading(false);
        }, 1000);
    }, []);

    const header = (
        <Header>
            <SearchBar onSearch={searchHandler} />
            <ThemeButton />
        </Header>
    );
    const menu = <Menu />;
    const content = loading ? <Throbber /> : <Hotels hotels={hotels} />;
    const footer = <Footer />;

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                login: () => setIsAuthenticated(true),
                logout: () => setIsAuthenticated(false),
            }}
        >
            <ThemeContext.Provider
                value={{
                    color: theme,
                    changeTheme,
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
