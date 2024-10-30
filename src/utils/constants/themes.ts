import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
    primaryColor: '#0ca5c0',
    highlightColor: '#0e88a0',     
    backgroundColor: '#f9f9f9',    
    secondaryColor: '#333',
    terciaryColor: '#ddd',
    textColor: '#555',             
    errorColor: '#ffeded',         
    color10: '#5a5a5a20',
    color20: '#ddd',
    color30: '#fff',
    color40: '#0ca5c0',
    color50: '#e0f7fa',
    color60: '#5a5a5a50',
    color70: '#f9f9f9'
};

const darkTheme: DefaultTheme = {
    primaryColor: '#0ca5c0',
    highlightColor: '#0e88a0',     
    backgroundColor: '#050413',    
    secondaryColor: '#cccccc',
    terciaryColor: '#0ca5c0',
    textColor: '#e0e0e0',          
    errorColor: '#ffbaba',         
    color10: '#036774c3',
    color20: '#041a35',
    color30: "transparent",
    color40: '#e0f7fa',
    color50: '#0ca5c0',
    color60: 'transparent', 
    color70: '#f9f9f9e9'
};

export const Themes = {
  light: lightTheme,
  dark: darkTheme,
};