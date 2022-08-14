import './App.scss';
import Throbber from './components/UI/Throbber';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import { Component } from 'react';
import SearchBar from './components/UI/SearchBar/SearchBar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './context/ThemeContext';

class App extends Component {
    static contextType = ThemeContext;

    hotels = [
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

    state = {
        hotels: [],
        loading: true,
        theme: 'primary',
    };

    searchHandler = (term) => {
        const hotels = [...this.hotels].filter((hotel) =>
            hotel.name.toLowerCase().includes(term.trim().toLowerCase())
        );
        this.setState({ hotels });
    };

    changeTheme = () => {
        const newTheme = this.state.theme === 'primary' ? 'blue' : 'primary';
        this.setState({ theme: newTheme });
    };

    render() {
        const header = (
            <Header>
                <SearchBar onSearch={this.searchHandler} />
                <ThemeButton onChange={this.changeTheme} />
            </Header>
        );

        const menu = <Menu />;

        const content = this.state.loading ? (
            <Throbber />
        ) : (
            <Hotels hotels={this.state.hotels} />
        );

        const footer = <Footer />;

        return (
            <ThemeContext.Provider value={this.state.theme}>
                <Layout
                    header={header}
                    menu={menu}
                    content={content}
                    footer={footer}
                />
            </ThemeContext.Provider>
        );
    }

    componentDidMount() {
        // symulacja połączenia z backendem (opóźnienie otrzymania danych)
        setTimeout(() => {
            this.setState({ hotels: this.hotels, loading: false });
        }, 1000);
    }
}

export default App;
