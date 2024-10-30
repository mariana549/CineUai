import { DefaultTheme } from 'styled-components';

export const backgroundColor = (props: {theme: DefaultTheme}) => props.theme.Theme.backgroundColor;
export const primaryColor = (props: {theme: DefaultTheme}) => props.theme.Theme.primaryColor;
export const secondaryColor = (props: {theme: DefaultTheme}) => props.theme.Theme.secondaryColor;
export const highlightColor = (props: {theme: DefaultTheme}) => props.theme.Theme.highlightColor;
export const textColor = (props: {theme: DefaultTheme}) => props.theme.Theme.textColor;
export const errorColor = (props: {theme: DefaultTheme}) => props.theme.Theme.errorColor;
export const terciaryColor = (props: {theme: DefaultTheme}) => props.theme.Theme.terciaryColor;
export const color10 = (props: {theme: DefaultTheme}) => props.theme.Theme.color10;
export const color20 = (props: {theme: DefaultTheme}) => props.theme.Theme.color20;
export const color30 = (props: {theme: DefaultTheme}) => props.theme.Theme.color30;
export const color40 = (props: {theme: DefaultTheme}) => props.theme.Theme.color40;
export const color50 = (props: {theme: DefaultTheme}) => props.theme.Theme.color50;
export const color60 = (props: {theme: DefaultTheme}) => props.theme.Theme.color60;
export const color70 = (props: {theme: DefaultTheme}) => props.theme.Theme.color70;
export const colorHeader = (props: {theme: DefaultTheme}) => props.theme.Theme.backgroundColor === '#f9f9f9' ?  '#0ca5c0' : 'transparent';
