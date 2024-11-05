import { DefaultTheme } from "styled-components";

export const backgroundColor = (props: { theme: DefaultTheme }) =>
  props.theme.backgroundColor;
export const primaryColor = (props: { theme: DefaultTheme }) =>
  props.theme.primaryColor;
export const secondaryColor = (props: { theme: DefaultTheme }) =>
  props.theme.secondaryColor;
export const highlightColor = (props: { theme: DefaultTheme }) =>
  props.theme.highlightColor;
export const textColor = (props: { theme: DefaultTheme }) =>
  props.theme.textColor;
export const errorColor = (props: { theme: DefaultTheme }) =>
  props.theme.errorColor;
export const terciaryColor = (props: { theme: DefaultTheme }) =>
  props.theme.terciaryColor;
export const color10 = (props: { theme: DefaultTheme }) => props.theme.color10;
export const color20 = (props: { theme: DefaultTheme }) => props.theme.color20;
export const color30 = (props: { theme: DefaultTheme }) => props.theme.color30;
export const color40 = (props: { theme: DefaultTheme }) => props.theme.color40;
export const color50 = (props: { theme: DefaultTheme }) => props.theme.color50;
export const color60 = (props: { theme: DefaultTheme }) => props.theme.color60;
export const color70 = (props: { theme: DefaultTheme }) => props.theme.color70;
export const colorHeader = (props: { theme: DefaultTheme }) =>
  props.theme.backgroundColor === "#f9f9f9" ? "#0ca5c0" : "transparent";
