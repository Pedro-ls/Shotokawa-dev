import { createContext, useContext, useState } from 'react';

const comicContext = createContext({});

export function ComicProvider({ children }) {
    const [comic, setComic] = useState({});
    return (
        <comicContext.Provider value={{ comic, setComic }}>
            {children}
        </comicContext.Provider>
    );
}

export function useComicContext() {
    return useContext(comicContext);
}
