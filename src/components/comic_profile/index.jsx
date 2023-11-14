import { useState } from 'react';
import { ButtonsContainer, Center, SwitchButton } from './styles';

import Chapters from './chapters';
import Synopsis from './synopsis';
import News from './news';

const ComicProfile = ({
    description,
    type,
    category,
    subcategory,
    authors,
    editor,
    episodes,
    paramcomic,
}) => {
    const [selectedTab, setSelectedTab] = useState('chapters');

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);

        window.scrollTo(0, 0);
    };

    const isTabSelected = (tabName) => selectedTab === tabName;

    const renderSelectedComponent = () => {
        if (selectedTab === 'chapters')
            return <Chapters episodes={episodes} paramcomic={paramcomic} />;
        else if (selectedTab === 'synopsis')
            return (
                <Synopsis
                    description={description}
                    type={type}
                    editor={editor}
                    category={category}
                    subcategory={subcategory}
                    authors={authors}
                />
            );
        else if (selectedTab === 'news') return <News comic={paramcomic} />;
        else return null;
    };

    return (
        <Center>
            <ButtonsContainer>
                <SwitchButton
                    onClick={() => handleTabClick('chapters')}
                    style={{
                        background: isTabSelected('chapters')
                            ? '#D4900D'
                            : 'none',
                        border: isTabSelected('chapters')
                            ? 'none'
                            : '1px solid #ccc',
                    }}
                >
                    Capítulos
                </SwitchButton>
                <SwitchButton
                    onClick={() => handleTabClick('synopsis')}
                    style={{
                        background: isTabSelected('synopsis')
                            ? '#D4900D'
                            : 'none',
                        border: isTabSelected('synopsis')
                            ? 'none'
                            : '1px solid #ccc',
                    }}
                >
                    Sinopse
                </SwitchButton>
                <SwitchButton
                    onClick={() => handleTabClick('news')}
                    style={{
                        background: isTabSelected('news') ? '#D4900D' : 'none',
                        border: isTabSelected('news')
                            ? 'none'
                            : '1px solid #ccc',
                    }}
                >
                    Notícias
                </SwitchButton>
            </ButtonsContainer>

            {renderSelectedComponent()}
        </Center>
    );
};

export default ComicProfile;
