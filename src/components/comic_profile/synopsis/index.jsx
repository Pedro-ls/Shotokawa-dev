import {
    AuthorsContainer,
    GeneralContainer,
    GeneralInformation,
    Publisher,
    SynopsisContainer,
    Title,
    Text,
    Subtitle,
    Subtext,
} from './styles';

import Author from './author/index';
import constants from '../../../constants';
import { useClientAuth } from '../../../context/client';
import { urlImageServer } from '../../imagesource';

const Synopsis = ({
    description,
    editor,
    type,
    category,
    authors,
    subcategory,
}) => {
    const { auth } = useClientAuth();
    return (
        <GeneralContainer>
            <SynopsisContainer>
                <Title>Sinopse:</Title>
                <Text>{description}</Text>
            </SynopsisContainer>

            <hr style={{ width: '90%' }} />

            <GeneralInformation>
                <Title>Mais Informações:</Title>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                        }}
                    >
                        <Subtitle>
                            Classificação:{' '}
                            <Subtext>
                                {constants.CHOICES_TYPES_OBJECT[type]}/
                                {category}/{subcategory}
                            </Subtext>
                        </Subtitle>
                        <Subtitle>
                            Editora: <Subtext>{editor}</Subtext>
                        </Subtitle>
                        <Subtitle>
                            Avaliação: <Subtext></Subtext>
                        </Subtitle>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                        }}
                    >
                        <Subtitle>
                            Escrita:{' '}
                            {authors.map((value, index) => {
                                if (value.function == 'WR')
                                    return (
                                        <Subtext key={index}>
                                            {value.name}
                                        </Subtext>
                                    );
                            })}
                        </Subtitle>
                        <Subtitle>
                            Desenho:{' '}
                            {authors.map((value, index) => {
                                if (value.function == 'PT')
                                    return (
                                        <Subtext key={index}>
                                            {value.name}
                                        </Subtext>
                                    );
                            })}
                        </Subtitle>
                    </div>
                </div>
            </GeneralInformation>

            <Publisher src="src/assets/publisher.png" />

            <hr style={{ width: '90%' }} />

            <AuthorsContainer>
                {authors?.map((value, index) => {
                    return (
                        <Author
                            key={index}
                            name={value.name}
                            photo={urlImageServer(value.photo, auth?.token)}
                        />
                    );
                })}
            </AuthorsContainer>
        </GeneralContainer>
    );
};

export default Synopsis;
