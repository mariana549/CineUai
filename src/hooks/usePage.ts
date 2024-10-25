import { useContext } from 'react';
import { PageContext } from '../context/appContext';

export const usePage = () => useContext(PageContext);
