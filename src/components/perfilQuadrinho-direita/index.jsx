import React from 'react';
import { Sidebar, Title, Sugestao, SugestaoContainer } from './styles';

import Image1 from '../../assets/Sugestoes/sugestao1.png';
import Image2 from '../../assets/Sugestoes/sugestao2.png';
import Image3 from '../../assets/Sugestoes/sugestao3.png';
import { Link } from 'react-router-dom';
import { urlImageServer } from '../imagesource';
import { useClientAuth } from '../../context/client';

const perfilquadrinhoDireita = ({ related }) => {
    const { auth } = useClientAuth();

    if (!related) <>Nenhum exemplar encontrado</>;
    return (
        <Sidebar>
            <Title>Títulos semelhantes</Title>
            <SugestaoContainer>
                {related?.map((comic, index) => (
                    <Link key={index} to={'/perfilQuadrinho/' + comic?.slug}>
                        <Sugestao
                            src={urlImageServer(comic.front_comic, auth.token)}
                            alt={'Sugestão de comic: ' + comic.slug}
                        />
                    </Link>
                ))}
            </SugestaoContainer>
        </Sidebar>
    );
};

export default perfilquadrinhoDireita;
