import { useContext } from 'react';
import { menuContext } from '../context/menu';

export function useMenuWorksSub() {
    return useContext(menuContext);
}
