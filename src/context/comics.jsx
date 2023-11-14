import React, { createContext, useContext, useEffect, useState } from 'react';

const comicsContext = createContext({});

export const ComicsProvider = ({ children }) => {
    const [isSearching, setIsSearching] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {}, []);

    return (
        <comicsContext.Provider
            value={{
                isSearching,
                setIsSearching,
                search,
                setSearch,
            }}
        >
            {children}
        </comicsContext.Provider>
    );
};

export function useComicsContext() {
    return useContext(comicsContext);
}
