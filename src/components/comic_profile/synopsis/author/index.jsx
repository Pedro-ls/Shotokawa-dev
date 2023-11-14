import { AuthorContainer, AuthorName, AuthorPhoto } from "./styles";

const Author = ({ name, photo }) => {
    return (
        <AuthorContainer>
            <AuthorName>
                {name}
            </AuthorName>
            <AuthorPhoto src={photo} alt={name} />
        </AuthorContainer>
    );
}

export default Author;