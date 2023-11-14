import React, { useEffect, useState } from 'react';
import PerfilquadrinhoDireita from '../../components/perfilQuadrinho-direita';
import ComicProfile from '../../components/comic_profile';
import PerfilQuadrinhoEsquerda from '../../components/perfilQuadrinho-esquerda';

import { useParams } from 'react-router-dom';

import { ComicContainer } from './styles';
import { useComic } from '../../hooks/comic';
import Skeleton from 'react-loading-skeleton';
import { ProfileComicLoading } from '../../components/loadings/comicsLoading';

const PerfilQuadrinho = () => {
    const params = useParams();
    const { getOne } = useComic();

    const { data, isLoading } = getOne(params?.comic);
    if (isLoading) return <ProfileComicLoading />;
    return (
        <React.Fragment>
            <ComicContainer>
                <PerfilQuadrinhoEsquerda
                    title={data?.comic?.name}
                    editor={data?.comic?.editor}
                    category={data?.comic?.category}
                    frontimage={data?.comic?.image}
                    subcategory={data?.comic?.sub_category}
                    authors={data?.comic?.authors}
                    paramcomic={params?.comic}
                />
                <ComicProfile
                    description={data?.comic?.description}
                    title={data?.comic?.name}
                    editor={data?.comic?.editor}
                    type={data?.comic?.type}
                    category={data?.comic?.category}
                    subcategory={data?.comic?.sub_category}
                    authors={data?.comic?.authors}
                    episodes={data?.episodes}
                    paramcomic={params?.comic}
                />
                <PerfilquadrinhoDireita related={data?.comic?.related} />
            </ComicContainer>
        </React.Fragment>
    );
};

export default PerfilQuadrinho;
