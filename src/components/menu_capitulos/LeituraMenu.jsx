import React, { useEffect, useState } from 'react';
import icon_menu from '../../assets/Leitura/icon-menu.png';
import icon_config from '../../assets/Leitura/icon-config.png';

const LeituraMenu = ({
    capituloAtual,
    handleCapituloClick,
    episodes,
    comic,
}) => {
    const [capituloMenuVisible, setCapituloMenuVisible] = useState(true);

    useEffect(() => {
        const capituloMenu = document.querySelector('.capitulo-menu');
        capituloMenu.style.display = capituloMenuVisible ? 'flex' : 'none';
    }, [capituloMenuVisible]);

    const toggleCapituloMenu = () => {
        setCapituloMenuVisible(!capituloMenuVisible); // Alterna o estado
    };

    // ------ Menu de Leitura

    const [leituraMenuVisible, setLeituraMenuVisible] = useState(true);
    const [mouseAtBottom, setMouseAtBottom] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const windowHeight = window.innerHeight;
            const mouseY = event.clientY;

            if (windowHeight - mouseY < 10) {
                setMouseAtBottom(true);
                if (!leituraMenuVisible) {
                    setLeituraMenuVisible(true); // Mostrar o menu quando o cursor estiver próximo à borda inferior
                }
            } else {
                setMouseAtBottom(false);
            }
        };

        const timer = setTimeout(() => {
            setLeituraMenuVisible(false); // Esconder o menu após 6 segundos
        }, 6000);

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [leituraMenuVisible]);

    return (
        <>
            <div className="capitulo-menu">
                <ul>
                    {episodes?.map((imagem, index) => {
                        return (
                            <li
                                key={index}
                                className={
                                    imagem.slug === capituloAtual ? 'ativo' : ''
                                }
                                onClick={() => {
                                    handleCapituloClick(
                                        imagem.slug,
                                        `/leitura?comic=${comic}&episode=${imagem.slug}`
                                    );
                                }}
                            >
                                Capítulo: {index + 1}
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div
                className="leitura-menu"
                style={{
                    display: leituraMenuVisible ? 'flex' : 'none',
                    marginLeft: '50px',
                }}
            >
                <span> Capítulo: {capituloAtual}</span>
                <div className="icons">
                    <img
                        className="icon_menu"
                        src={icon_menu}
                        alt="Menu"
                        onClick={toggleCapituloMenu}
                    />
                    <img
                        className="icon_config"
                        src={icon_config}
                        alt="Config"
                    />
                </div>
            </div>
        </>
    );
};

export default LeituraMenu;
