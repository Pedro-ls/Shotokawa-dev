import { NewsContainer } from './styles';

import New from './new';
import { useNotices } from '../../../hooks/comic';
import { urlImageServer } from '../../imagesource';

const News = ({ comic = '' }) => {
    const { notices } = useNotices(comic);

    if (notices?.isLoading && notices?.data == [])
        return <>Nenhuma noticia encontrada</>;
    return (
        <NewsContainer>
            {notices.isLoading == false ? (
                notices?.data?.map((notice, index) => (
                    <New
                        key={index}
                        image={urlImageServer(notice.photo)}
                        headline={notice.description}
                        link={notice.link}
                    />
                ))
            ) : (
                <>Carregango...</>
            )}
        </NewsContainer>
    );
};

export default News;
