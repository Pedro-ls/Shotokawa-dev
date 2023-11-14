import { NewContainer, NewHeadline, NewHeadlineContainer } from './styles';

const New = ({ image, headline, link }) => {
    const redirect = () => window.open(link, '_blank');

    return (
        <NewContainer
            onClick={redirect}
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <NewHeadlineContainer>
                <NewHeadline>{headline}</NewHeadline>
            </NewHeadlineContainer>
        </NewContainer>
    );
};

export default New;
