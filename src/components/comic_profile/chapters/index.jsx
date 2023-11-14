import Chapter from './chapter';
import * as chapters from '../../../database/chapters.json';

import { ChaptersContainer } from './styles';

function number_zero_the_nine(num) {
    if (num < 10) {
        return `0${num}`;
    }
    return `${num}`;
}

function date_format(date_not_formated) {
    const date = new Date(date_not_formated);
    const day = date.getDay();
    const mounth = date.getMonth();
    const year = date.getFullYear();
    return (
        <>
            {number_zero_the_nine(day)}/{number_zero_the_nine(mounth)}/{year}
        </>
    );
}

const Chapters = ({ episodes, paramcomic }) => {
    return (
        <ChaptersContainer>
            {episodes?.map((chapter, index) => (
                <Chapter
                    key={index}
                    cover={
                        'https://ovicio.com.br/wp-content/uploads/apagao_capa.jpg'
                    }
                    chapter={chapter.name}
                    paramcomic={paramcomic}
                    slug={chapter.slug}
                    data={date_format(chapter.created_at)}
                />
            ))}
        </ChaptersContainer>
    );
};

export default Chapters;
