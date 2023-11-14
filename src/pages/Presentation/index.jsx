import { useState } from 'react';

import { Button } from '../../components/button/Button.js';
import { Input } from '../../components/input/Input.js';

import { Link } from 'react-router-dom';

import cover from '../../assets/cover.png';
import magazine from '../../assets/magazine.png';
import setup from '../../assets/setup.png';
import logo from '../../assets/logo_name.png';

import {
    Wrapper,
    Title,
    Subtitle,
    Text,
    ScrollButton,
    FigureTextContainer,
    FigureText,
    TextLink,
    TextLinkColumn,
    LoginButton,
    ImageContainer,
    FiguresContainer,
    Footer
} from './styles.js'

import { ArrowDown, Target, Clock, Users, LightbulbFilament } from '@phosphor-icons/react';

import Social from '../../components/network';



const Presentation = () => {
    const handleScroll = () => {
        const content = document.getElementById('content');
        content.scrollIntoView({ behavior: 'smooth' });
    };

    const [selectedComponent, setSelectedComponent] = useState(0);

    const handleFigureClick = (index) => {
        setSelectedComponent(index);
    };

    return (
        <>
            <Wrapper style={{
                backgroundImage: `url(${cover})`,
            }}>
                <Link to="/login">
                    <LoginButton variant="secondary">
                        Login
                    </LoginButton>
                </Link>

                <Title style={{width: "60%"}}>
                    Shotokawa Comics: Seu universo em um
                    único Lugar!
                </Title>

                <ScrollButton onClick={() => handleScroll()}>
                    <ArrowDown size="3vw" color="#ffffff" weight="bold" />
                </ScrollButton>
            </Wrapper>

            <Wrapper id='content' style={{
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                backgroundImage: `url(${magazine})`,
            }}>

                <Subtitle>
                    Bem-vindo à <span style={{color: "var(--primary-color)"}}>
                        Shotokawa Comics
                                </span>
                </Subtitle>

                <Text style={{width: "55%"}}>
                    a casa do maior catálogo de mangás, manhwas e manhuas
                    do mundo! Apaixone-se por histórias incríveis, explore
                    universos diversos e mergulhe em aventuras épicas,
                    tudo em uma única plataforma! Valorizamos o
                    conteúdo oficial e a experiência de leitura
                    de qualidade.
                </Text>

                <Text>
                    <span style={{color: "var(--primary-color)"}}>
                        Shotokawa Comics
                    </span> - Onde a magia dos quadrinhos ganha vida!
                </Text>
                
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px"
                }}>
                    <Text style={{fontSize: "1.2vw"}}>
                        Cadastre seu E-mail e tenha acesso a novidades
                        sobre a Plataforma!
                    </Text>

                    <div style={{
                        display: "flex",
                        height: "4.5vh",
                        justifyContent: "space-between"
                    }}>
                        <Input placeholder='Insira seu E-mail' style={{
                            width: "76%",
                            fontSize: "1vw"
                        }}/>
                        <Button variant="primary" type='submit' style={{
                            width: "23%",
                            fontSize: "1vw",
                            padding: "0"
                        }}>
                            Enviar
                        </Button>
                    </div>
                </div>
            </Wrapper>

            <Wrapper style={{flexDirection: "row"}}>
                <ImageContainer style={{backgroundImage: `url(${setup})`}} />

                <FiguresContainer>
                    <FigureTextContainer selected={selectedComponent === 0} onClick={() => handleFigureClick(0)}>

                        <Target size="3vw" color={selectedComponent === 0 ? '#ffffff' : '#666666'} weight="bold" style={{
                            position: "absolute",
                            left: "57%",
                        }}/>

                        <Text>Nossa missão</Text>

                        <FigureText>
                            A Shotokawa Comics é uma plataforma online que proporciona acesso legal e ético a mangás,
                            manhwas e manhuas, através de um serviço de assinatura, promovendo a qualidade do
                            conteúdo e apoiando os criadores na indústria dos quadrinhos.
                        </FigureText>
                    </FigureTextContainer>

                    <FigureTextContainer selected={selectedComponent === 1} onClick={() => handleFigureClick(1)}>
                        <Clock size="3vw" color={selectedComponent === 1 ? '#ffffff' : '#666666'} weight="bold" style={{
                                position: "absolute",
                                left: "57%",
                            }}/>

                        <Text>Nossa história</Text>

                        <FigureText>
                            A Shotokawa Comics nasceu do desejo de oferecer uma plataforma legal e ética para os amantes
                            de mangás, manhwas e manhuas. Identificando a necessidade de uma alternativa aos sites
                            piratas, criamos um espaço amigável e repleto de conteúdo oficial para apoiar os
                            criadores e encantar os fãs de quadrinhos.
                        </FigureText>
                    </FigureTextContainer>

                    <FigureTextContainer selected={selectedComponent === 2} onClick={() => handleFigureClick(2)}>
                        <Users size="3vw" color={selectedComponent === 2 ? '#ffffff' : '#666666'} weight="bold" style={{
                                position: "absolute",
                                left: "57%",
                            }}/>

                        <Text>Comunidade</Text>

                            <FigureText>
                                A comunidade Shotokawa Comics é um grupo diversificado de apaixonados por quadrinhos que
                                valorizam o conteúdo oficial e apreciam a diversidade de histórias. Unidos em seu amor
                                pelos mangás, manhwas e manhuas, os membros se conectam para discutir histórias
                                favoritas e celebrar a arte dos quadrinhos.
                            </FigureText>
                    </FigureTextContainer>

                    <FigureTextContainer selected={selectedComponent === 3} onClick={() => handleFigureClick(3)}>
                        <LightbulbFilament size="3vw" color={selectedComponent === 3 ? '#ffffff' : '#666666'} weight="bold" style={{
                                position: "absolute",
                                left: "57%",
                            }}/>

                        <Text>Nosso foco</Text>

                            <FigureText>
                                O foco da Shotokawa Comics é proporcionar uma plataforma online segura e fácil de usar que
                                ofereça um vasto catálogo de mangás, manhwas e manhuas de alta qualidade. Estamos
                                empenhados em apoiar os criadores através de parcerias estratégicas, promover a
                                legalidade na indústria dos quadrinhos e fornecer uma experiência de usuário
                                superior para os amantes de quadrinhos.
                            </FigureText>
                    </FigureTextContainer>
                </FiguresContainer>
            </Wrapper>

            <Footer>
                <Social />
                <table>
                    <tbody>
                        <tr>
                            <TextLinkColumn>
                                <TextLink href="">Termos</TextLink>
                            </TextLinkColumn>
                            <TextLinkColumn>
                                <TextLink href="">Política de Privacidade</TextLink>
                            </TextLinkColumn>
                            <TextLinkColumn>
                                <TextLink href="">Contate-nos</TextLink>
                            </TextLinkColumn>
                            <TextLinkColumn>
                                <TextLink href="">Parcerias</TextLink>
                            </TextLinkColumn>
                            <TextLinkColumn>
                                <TextLink href="">Sobre nós</TextLink>
                            </TextLinkColumn>
                        </tr>
                    </tbody>
                </table>

                <div style={{display: "flex", alignItems: "center"}}>
                    <img src={logo} alt="" style={{
                        height: "7vh",
                        width: "6vw",
                    }}/>
                    
                    <Text style={{
                        fontSize: "1vw",
                        fontFamily: "var(--secondary-font)"
                    }}>
                        Shotokawa all rights reserved. <br />
                          Shotokawa Comics
                    </Text>
                </div>
            </Footer>
        </>
    );
}

export default Presentation;