import { ThemeProps } from "../types/interfaces";

export const backgroundColor = (props: ThemeProps) => props.theme.Theme.backgroundColor;
export const primaryColor = (props: ThemeProps) => props.theme.Theme.primaryColor;
export const secondaryColor = (props: ThemeProps) => props.theme.Theme.secondaryColor;
export const highlightColor = (props: ThemeProps) => props.theme.Theme.highlightColor;
export const textColor = (props: ThemeProps) => props.theme.Theme.textColor;
export const errorColor = (props: ThemeProps) => props.theme.Theme.errorColor;
export const terciaryColor = (props: ThemeProps) => props.theme.Theme.terciaryColor;
export const color10 = (props: ThemeProps) => props.theme.Theme.color10;
export const color20 = (props: ThemeProps) => props.theme.Theme.color20;
export const color30 = (props: ThemeProps) => props.theme.Theme.color30;
export const color40 = (props: ThemeProps) => props.theme.Theme.color40;
export const color50 = (props: ThemeProps) => props.theme.Theme.color50;
export const color60 = (props: ThemeProps) => props.theme.Theme.color60;
export const color70 = (props: ThemeProps) => props.theme.Theme.color70;
export const colorHeader = (props: ThemeProps) => props.theme.Theme.backgroundColor === '#f9f9f9' ?  '#0ca5c0' : 'transparent';
