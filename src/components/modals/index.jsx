import ReactModal from 'react-modal';
import foto from '../../assets/PerfilQuadrinho/capa-apagao.png';
import { useState } from 'react';
import Rating from '../rating';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '75%',
        border: 'none',
        backgroundColor: 'var(--secondary-color)',
    },
    overlay: {
        backgroundColor: '#00000060',
    },
};

export function ModalDescriptionComic({
    open,
    title,
    description,
    setCloseModal,
}) {
    return (
        <>
            <ReactModal
                onRequestClose={setCloseModal}
                style={customStyles}
                isOpen={open}
                contentLabel={title}
            >
                {description}
            </ReactModal>
        </>
    );
}

export function InfoPreview({
    open,
    title = 'titulo',
    old_min = 12,
    setCloseModal,
    description = 'Description',
    authors,
    category,
    editor,
    sub_category,
    front_image,
}) {
    return (
        <>
            <ReactModal
                onRequestClose={setCloseModal}
                style={customStyles}
                isOpen={open}
                contentLabel={title}
                preventScroll={false}
            >
                <div
                    style={{
                        display: 'flex',
                        margin: '6px',
                    }}
                >
                    <figure
                        style={{
                            margin: '6px',
                            position: 'relative',
                        }}
                    >
                        <img
                            style={{ maxWidth: '300px', minWidth: '240px' }}
                            src={front_image}
                        />
                        <Rating rating={old_min} />
                    </figure>
                    <div
                        style={{
                            margin: '6px',
                            marginBlock: '2px',
                            paddingInline: '26px',
                        }}
                    >
                        <p
                            style={{
                                marginBlock: '10px',
                            }}
                        >
                            {category} - {sub_category}
                        </p>
                        <p
                            style={{
                                marginBlock: '10px',
                            }}
                        >
                            autores:
                            {authors?.map((author, index) => (
                                <span key={index}>{author.name}</span>
                            ))}
                        </p>
                        <p
                            style={{
                                marginBlock: '10px',
                            }}
                        >
                            Editora: {editor}
                        </p>
                        <p
                            style={{
                                marginBlock: '10px',
                            }}
                        >
                            Sinopse: {description}
                        </p>
                    </div>
                </div>
            </ReactModal>
        </>
    );
}
