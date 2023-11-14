import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LeituraMenu from './LeituraMenu';
import { EpisodesLoading, ReadingLoading } from '../loadings/comicsLoading';
import './menu.css';

import image1 from '../../assets/Leitura/ep1-apagao.png';
import image2 from '../../assets/Leitura/ep2-apagao.png';
import image3 from '../../assets/Leitura/ep3-apagao.jpg';
import { ImageSource } from '../imagesource';
import { useClientAuth } from '../../context/client';
import { useEpisode, useEpisodes } from '../../hooks/episodes';

const MangaReader = () => {
    const [params] = useSearchParams();
    const navigate = useNavigate({});
    const { auth } = useClientAuth();
    const { getEpisode } = useEpisode();
    const { getEpisodes } = useEpisodes();

    const comicParam = params.get('comic');
    const episodeParam = params.get('episode');

    let episodes = useCallback(getEpisodes(comicParam));
    let episode = useCallback(getEpisode(comicParam, episodeParam));

    return (
        <>
            <div className="manga-reader">
                <div className="background"></div>
                <div
                    className="imagem-principal"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <>
                        {episode.isLoading ? (
                            <ReadingLoading />
                        ) : (
                            episode?.data?.images?.map((value, index) => {
                                return (
                                    <div key={index}>
                                        <ImageSource
                                            src={value.photo}
                                            token={auth.token}
                                        />
                                    </div>
                                );
                            })
                        )}
                    </>
                </div>
                <>
                    {episodes.isLoading ? (
                        <>
                            <EpisodesLoading />
                        </>
                    ) : (
                        <LeituraMenu
                            episodes={
                                episodes.isLoading
                                    ? []
                                    : episodes?.data?.episodes
                            }
                            capituloAtual={params.get('episode')}
                            handleCapituloClick={(slug, next_url) => {
                                navigate(next_url, {
                                    state: true,
                                    relative: true,
                                });
                            }}
                            comic={params.get('comic')}
                        />
                    )}
                </>
            </div>
        </>
    );
};

export default MangaReader;
