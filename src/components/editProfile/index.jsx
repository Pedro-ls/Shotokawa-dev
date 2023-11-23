import { styled } from 'styled-components';
import author from '../../assets/author.png';
import { MdEdit, MdPhotoCamera, MdCheck } from 'react-icons/md';
import { useState } from 'react';

export const FormContainerProfile = styled.form`
    overflow: scroll;
    min-height: 100%;
`;
export const ContainerPhotoProfile = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-block: 6px;
`;

export const HoverEditPhoto = styled.div`
    position: absolute;
    opacity: 0;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    height: 240px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    background-color: #2a2a2aa1;
    transition: all ease-in-out 300ms;

    &:hover {
        opacity: 1;
    }
`;
export const PhotoProfile = styled.img`
    width: 100%;
    max-width: 240px;
    border-radius: 100%;
    background-color: #111111;
`;
export const FieldsProfile = styled.section`
    display: flex;
    flex-direction: column;
    line-height: 34px;
`;
export const FieldProfile = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2px 7px;
    padding: 2px;
    border: 1px solid #252525;
`;

export const Input = styled.input`
    border: 1px solid #252525;
    border-radius: 7px;
    padding: 8px 7px;
    background-color: transparent;
    color: #878787;
`;

const InputOldPassword = styled(Input)`
    margin-block: 6px;
    width: 100%;
`;

const InputNewPassword = styled(Input)`
    margin-block: 6px;
    width: 100%;
`;
const InputRepeatPassword = styled(Input)`
    margin-block: 6px;
    width: 100%;
`;

const InputEdit = styled.input`
    background-color: var(--secondary-color);
    border: none;
    text-align: right;
    margin-right: 4px;
    padding-top: 2px;
    outline: none;
    font-size: 17px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
`;

const TextSmallDesc = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
`;

const ButtonChangeProfile = styled.button`
    background-color: var(--primary-color);
    padding: 3px 8px;
    border-color: var(--primary-color);
    margin-block: 12px;
    border-radius: 3px;
`;

const ActionProfile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    margin-top: 6px;
`;

const ValueProfile = styled.div`
    span {
        margin-right: 4px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 17px;
    }
`;

export function EditProfile({
    profile = { name: 'ohdsjasj', email: 'email@gmail.com' },
}) {
    const [clientProfile, setClientProfile] = useState({
        ...profile,
        oldPassword: '',
        newPassword: '',
        repeatPassword: '',
    });
    const [editFieldName, setEditFieldName] = useState(false);
    const [editFieldEmail, setEditFieldEmail] = useState(false);

    return (
        <FormContainerProfile>
            <ContainerPhotoProfile>
                <PhotoProfile src={author} alt="" />
                <HoverEditPhoto>
                    <MdPhotoCamera
                        style={{
                            zIndex: '100px',
                        }}
                    />
                    <input
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            opacity: '0',
                        }}
                        type="file"
                        name=""
                        id=""
                    />
                </HoverEditPhoto>
            </ContainerPhotoProfile>
            <FieldsProfile>
                <FieldProfile>
                    <article>Name</article>
                    {editFieldName ? (
                        <ValueProfile>
                            <InputEdit
                                type="text"
                                onChange={(event) =>
                                    setClientProfile({
                                        ...clientProfile,
                                        name: event.currentTarget.value,
                                    })
                                }
                                value={clientProfile.name}
                            />
                            <MdCheck onClick={() => setEditFieldName(false)} />
                        </ValueProfile>
                    ) : (
                        <ValueProfile>
                            <span>{clientProfile.name}</span>
                            <MdEdit onClick={() => setEditFieldName(true)} />
                        </ValueProfile>
                    )}
                </FieldProfile>
                <FieldProfile>
                    <article>Email</article>
                    {editFieldEmail ? (
                        <ValueProfile>
                            <InputEdit
                                type="text"
                                onChange={(event) =>
                                    setClientProfile({
                                        ...clientProfile,
                                        email: event.currentTarget.value,
                                    })
                                }
                                value={clientProfile.email}
                            />
                            <MdCheck onClick={() => setEditFieldEmail(false)} />
                        </ValueProfile>
                    ) : (
                        <ValueProfile>
                            <span>{clientProfile.email}</span>{' '}
                            <MdEdit onClick={() => setEditFieldEmail(true)} />
                        </ValueProfile>
                    )}
                </FieldProfile>
                ------

                <label htmlFor="">Alteração de senha</label>
                <div>
                    <InputOldPassword
                        type="password"
                        placeholder="Digite a senha antiga"
                        onChange={(event) =>
                            setClientProfile({
                                ...clientProfile,
                                oldPassword: event.currentTarget.value,
                            })
                        }
                        value={clientProfile.oldPassword}
                    />
                    <div>
                        {clientProfile.oldPassword.length > 0 &&
                            clientProfile.oldPassword.length < 8 && (
                                <TextSmallDesc>
                                    Tem que ter mais de 8 caracteres
                                </TextSmallDesc>
                            )}
                    </div>
                    <InputNewPassword
                        type="password"
                        placeholder="Digite a senha nova"
                        onChange={(event) =>
                            setClientProfile({
                                ...clientProfile,
                                newPassword: event.currentTarget.value,
                            })
                        }
                        value={clientProfile.newPassword}
                    />
                    <div>
                        {clientProfile.newPassword.length > 0 &&
                            clientProfile.newPassword.length < 8 && (
                                <TextSmallDesc>
                                    Tem que ter mais de 8 caracteres
                                </TextSmallDesc>
                            )}
                    </div>
                    <InputRepeatPassword
                        type="password"
                        placeholder="Digite a senha repita a senha nova"
                        onChange={(event) =>
                            setClientProfile({
                                ...clientProfile,
                                repeatPassword: event.currentTarget.value,
                            })
                        }
                        value={clientProfile.repeatPassword}
                    />
                    <div>
                        {clientProfile.repeatPassword.length > 0 &&
                            clientProfile.repeatPassword.length < 8 && (
                                <TextSmallDesc>
                                    Tem que ter mais de 8 caracteres
                                </TextSmallDesc>
                            )}
                    </div>
                    {/* verifica se todas as senhas são maiores ou iguais a 8, e se a senha antiga é igual a nova */}
                    <div>
                        {clientProfile.repeatPassword.length >= 8 &&
                            clientProfile.newPassword.length >= 8 &&
                            clientProfile.oldPassword.length >= 8 &&
                            (clientProfile.repeatPassword ==
                            clientProfile.newPassword ? (
                                clientProfile.newPassword != '' ? (
                                    clientProfile.oldPassword ==
                                        clientProfile.newPassword && (
                                        <TextSmallDesc>
                                            Sua nova senha é igual a antiga
                                        </TextSmallDesc>
                                    )
                                ) : (
                                    <></>
                                )
                            ) : (
                                <TextSmallDesc>
                                    Senhas não coincidem
                                </TextSmallDesc>
                            ))}
                    </div>
                </div>
                <ActionProfile>
                    <ButtonChangeProfile>Atualizar</ButtonChangeProfile>
                </ActionProfile>
            </FieldsProfile>
        </FormContainerProfile>
    );
}
