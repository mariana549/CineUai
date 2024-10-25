import { useContext } from 'react';
import { DataContext } from '../context/appContext';

export const useData = () => useContext(DataContext);
