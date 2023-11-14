import constants from '../../constants';

export const urlImageServer = (src, token) =>
    `${constants.SERVER_URL}/${src}?token=${token}&origin=http://localhost:5173`;

export const ImageSource = (props = { src: '', alt: '', token: '' }) => {
    return (
        <img
            src={`${urlImageServer(props.src, props.token)}`}
            alt={props.alt}
            loading="lazy"
        />
    );
};
