import React, { useState } from 'react';

import { MdStar, MdStarOutline } from 'react-icons/md';
import {
    AiFillDislike,
    AiFillLike,
    AiOutlineDislike,
    AiOutlineLike,
} from 'react-icons/ai';
import {
    Sidebar,
    Quadrinho,
    InfoQuadrinho,
    Botao,
    BotaoLeitura,
} from './styles';

import quadrinho from '../../assets/PerfilQuadrinho/capa-apagao.png';
import like from '../../assets/PerfilQuadrinho/like.png';
import deslike from '../../assets/PerfilQuadrinho/deslike.png';
import estrela from '../../assets/PerfilQuadrinho/estrela.png';
import { AuthorsContainer } from '../comic_profile/synopsis/styles';
import { useClientAuth } from '../../context/client';
import { useComicContext } from '../../context/comic';
import { useFavorite, useReaction } from '../../hooks/comic';

const perfilQuadrinhoEsquerda = ({
    title,
    editor,
    category,
    subcategory,
    authors,
    frontimage,
    paramcomic,
}) => {
    const { auth } = useClientAuth();

    const {
        like_fn,
        dislike_fn,
        remove_like_fn,
        remove_dislike_fn,
        change_like,
        change_dislike,
        likes,
    } = useReaction(paramcomic);

    const { toggle, favorites } = useFavorite(paramcomic);

    const { data, isRefetching, isLoading } = likes;

    return (
        <Sidebar>
            <Quadrinho
                style={{
                    backgroundImage: `url(http://localhost:8000/${frontimage}?token=${auth.token}&origin=http://localhost:5173)`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></Quadrinho>

            <InfoQuadrinho>
                <h3 style={{ fontWeight: 'bold' }}>{title}</h3>
                <h4>
                    {authors?.map((value, index) => (
                        <span key={index}>{value?.name} </span>
                    ))}
                </h4>
                <div style={{ marginTop: '15px' }}>
                    <h4 style={{ fontWeight: 'bold' }}>Conteúdo</h4>
                    <h4>
                        {category} - {subcategory}
                    </h4>
                    <h4 style={{ fontWeight: 'bold', marginTop: '5px' }}>
                        Editora
                    </h4>
                    <h4>{editor}</h4>
                </div>
            </InfoQuadrinho>

            <div style={{ display: 'flex' }}>
                {favorites.isLoading == false ? (
                    favorites.data.favorite_current ? (
                        <Botao
                            style={{
                                marginRight: '40px',
                                width: '110px',
                                backgroundColor: 'white',
                                color: 'black',
                            }}
                            onClick={() => {
                                toggle();
                            }}
                        >
                            <MdStar color={'black'} />
                            Desfavoritar
                        </Botao>
                    ) : (
                        <Botao
                            style={{ marginRight: '40px', width: '110px' }}
                            onClick={() => {
                                toggle();
                            }}
                        >
                            <MdStarOutline color={'white'} />
                            Favoritar
                        </Botao>
                    )
                ) : (
                    <>Loading ...</>
                )}

                {isLoading == false ? (
                    <>
                        {data.react == 'like' ? (
                            <Botao
                                onClick={() => {
                                    remove_like_fn();
                                }}
                                style={{
                                    background: 'white',
                                    padding: '9px 10px',
                                }}
                            >
                                <AiFillLike size={24} color="black" />
                            </Botao>
                        ) : (
                            <Botao
                                style={{
                                    padding: '9px 10px',
                                }}
                                onClick={() => {
                                    if (data.react == 'dislike') {
                                        change_like();
                                    } else if (
                                        data.react == undefined ||
                                        data.react == ''
                                    ) {
                                        like_fn();
                                    }
                                }}
                            >
                                <AiOutlineLike size={24} color="lightgray" />
                            </Botao>
                        )}
                        {data.react == 'dislike' ? (
                            <Botao
                                onClick={() => {
                                    remove_dislike_fn();
                                }}
                                style={{
                                    padding: '9px 10px',
                                    background: 'white',
                                }}
                            >
                                <AiFillDislike size={24} color="black" />
                            </Botao>
                        ) : (
                            <Botao
                                style={{
                                    padding: '9px 10px',
                                }}
                                onClick={() => {
                                    if (data.react == 'like') {
                                        change_dislike();
                                    } else if (
                                        data.react == undefined ||
                                        data.react == ''
                                    ) {
                                        dislike_fn();
                                    }
                                }}
                            >
                                <AiOutlineDislike size={24} color="lightgray" />
                            </Botao>
                        )}
                    </>
                ) : (
                    <>Loading</>
                )}
            </div>

            <BotaoLeitura>Continuar Leitura</BotaoLeitura>
        </Sidebar>
    );
};

export default perfilQuadrinhoEsquerda;
