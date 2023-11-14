import { FacebookLogo, InstagramLogo, TwitterLogo, DiscordLogo } from '@phosphor-icons/react';
import { SocialNetworksContainer } from './styles';

const Social = () => {
    return(
        <SocialNetworksContainer>
            <a href="#" style={{height: "0"}}>
                <FacebookLogo size="2.5vw" color="#1877F2" weight="bold" />
            </a>
            <a href="#" style={{height: "0"}}>
                <InstagramLogo size="2.5vw" color="#E4405F" weight="bold" />
            </a>
            <a href="#" style={{height: "0"}}>
                <TwitterLogo size="2.5vw" color="#1DA1F2" weight="bold" />
            </a>
            <a href="#" style={{height: "0"}}>
                <DiscordLogo size="2.5vw" color="#7289DA" weight="bold" />
            </a>
        </SocialNetworksContainer>
    );
};

export default Social;