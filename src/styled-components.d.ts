import 'styled-components';

declare module 'styled-components' { 
    export interface DefaultTheme extends Theme { 
        primaryColor: string; 
        highlightColor: string; 
        backgroundColor: string; 
        secondaryColor: string; 
        terciaryColor: string; 
        textColor: string; 
        errorColor: string; 
        color10: string; 
        color20: string; 
        color30: string; 
        color40: string; 
        color50: string; 
        color60: string; 
        color70: string;
    }
}