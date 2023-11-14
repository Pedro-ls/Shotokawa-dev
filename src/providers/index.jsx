import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ClientAuthContext } from '../context/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ComicsProvider } from '../context/comics';
import { MenuProvider } from '../context/menu';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SkeletonTheme } from 'react-loading-skeleton';

const queryClient = new QueryClient();

export const Providers = ({ children }) => {
    return (
        <BrowserRouter>
            <ClientAuthContext>
                <ComicsProvider>
                    <MenuProvider>
                        <QueryClientProvider client={queryClient}>
                            <SkeletonTheme baseColor="#110f10">
                                {children}
                            </SkeletonTheme>
                            <ReactQueryDevtools initialIsOpen={false} />
                        </QueryClientProvider>
                    </MenuProvider>
                </ComicsProvider>
            </ClientAuthContext>
        </BrowserRouter>
    );
};
