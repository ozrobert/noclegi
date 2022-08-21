import { createContext } from 'react';

const ThemeContext = createContext({
    color: 'primary',
    changeTheme: () => {},
});

ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;
