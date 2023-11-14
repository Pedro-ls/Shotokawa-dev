import React, { useState } from 'react';
import { ErrorStyled } from './styles';
import { MdClose, MdConnectWithoutContact, MdError } from 'react-icons/md';
import ReactModal from 'react-modal';
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

export default function Error({
    title = 'Erro',
    message = 'Mensagem de Erro',
    open = false,
}) {
    const [isOpen, setIsOpen] = useState(open);
    return (
        <ReactModal isOpen={isOpen} style={customStyles}>
            <ErrorStyled.Container
                style={{
                    margin: '4px 2px',
                    minWidth: '460px',
                }}
            >
                <ErrorStyled.Heading>
                    <div>{title}</div>
                    <button
                        style={{
                            paddingInline: '8px',
                            border: '1px solid transparent',
                            borderRadius: '6px',
                            backgroundColor: 'red',
                            color: 'white',
                        }}
                        onClick={() => setIsOpen(false)}
                    >
                        <MdClose />
                    </button>
                </ErrorStyled.Heading>
                <ErrorStyled.Container>
                    <ErrorStyled.Text>{message}</ErrorStyled.Text>
                    <ErrorStyled.Icon>
                        <MdError color="red" size={30} />
                        <MdConnectWithoutContact color="red" size={24} />
                    </ErrorStyled.Icon>
                </ErrorStyled.Container>
            </ErrorStyled.Container>
        </ReactModal>
    );
}
