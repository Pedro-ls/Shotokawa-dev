import { ChapterContainer } from './styles';

import { Link } from 'react-router-dom';

const Chapter = ({ cover, chapter, data, slug, paramcomic }) => {
    return (
        <Link
            to={`/leitura?episode=${slug}&comic=${paramcomic}`}
            style={{
                textDecoration: 'none',
                color: 'var(--terciary-color)',
                width: '100%',
            }}
        >
            <ChapterContainer>
                {/* <img
                    src={cover}
                    alt=""
                    style={{
                        width: '122px',
                        height: '172px',
                        objectFit: 'cover',
                        borderRadius: '5px',
                    }}
                /> */}
                <div>
                    <h1>{chapter}</h1>
                    <span>{data}</span>
                </div>
            </ChapterContainer>
        </Link>
    );
};

export default Chapter;
