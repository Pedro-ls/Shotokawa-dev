import { createContext, useState } from 'react';

export const menuContext = createContext({
    work: '',
});

export function MenuProvider({ children }) {
    const [work, setWork] = useState();
    const [showCategorySearch, setShowCategorySearch] = useState({
        param: {
            work: '',
            genre: '',
        },
        active: false,
    });

    return (
        <menuContext.Provider
            value={{
                work,
                setWork,
                showCategorySearch,
                setShowCategorySearch,
            }}
        >
            {children}
        </menuContext.Provider>
    );
}
