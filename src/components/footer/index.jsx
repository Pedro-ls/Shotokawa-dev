import { FooterContainer, Text, TextLink, TextLinkColumn } from './styles';

import Social from '../network';
import logo from '../../assets/logo_name.png';

const Footer = () => {
    return (
        <FooterContainer>
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

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={logo}
                    alt=""
                    style={{
                        height: '7vh',
                        width: '6vw',
                    }}
                />

                <Text>
                    Shotokawa all rights reserved. <br />
                    Shotokawa Comics
                </Text>
            </div>
        </FooterContainer>
    );
};

export default Footer;
