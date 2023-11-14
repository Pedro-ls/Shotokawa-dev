import { useState } from 'react';

import { Link } from 'react-router-dom';
import { Button } from '../../components/button/Button.js';

import { Input, InputPassword } from '../../components/input/Input.js';
import Social from '../../components/network/index.jsx';

import {
    LoginContainer,
    LoginHeader,
    Logo,
    LoginForm,
    LoginTitle,
    RememberCredentials,
    RememberCheckbox,
    RememberLabel,
    RememberPassword,
    SloganContainer,
    SloganTitle,
} from './style';

import logo from '../../assets/logo_name.png';

import { Eye, EyeClosed } from '@phosphor-icons/react';
import { useClientAuth } from '../../context/client';
import Error from '../../components/error';

const Login = () => {
    const { login } = useClientAuth();

    const [loginClient, setLoginClient] = useState({ email: '', password: '' });

    const onHandleSubmitLoginClient = async (event) => {
        event.preventDefault();

        await login(loginClient);
    };
    const [password, setPassword] = useState(false);

    const handlePasswordType = () => {
        setPassword({ ...password, type: !password.type });
    };

    return (
        <>
            <LoginHeader>
                <Link to="/">
                    <Logo src={logo} alt="Logo" />
                </Link>

                <Social />
            </LoginHeader>
            <Error />

            <LoginContainer>
                <LoginForm onSubmit={onHandleSubmitLoginClient}>
                    <LoginTitle>Entrar</LoginTitle>
                    <Input
                        type="email"
                        placeholder="E-mail"
                        style={{ marginBottom: '10px' }}
                        value={loginClient.email}
                        onChange={(evt) =>
                            setLoginClient({
                                ...loginClient,
                                email: evt.target.value,
                            })
                        }
                    />
                    <br />

                    <InputPassword>
                        <Input
                            type={password.type ? 'text' : 'password'}
                            placeholder="Senha"
                            value={loginClient.password}
                            onChange={(evt) =>
                                setLoginClient({
                                    ...loginClient,
                                    password: evt.target.value,
                                })
                            }
                        />
                        {password.type ? (
                            <Eye
                                size={20}
                                color="black"
                                onClick={handlePasswordType}
                                style={{
                                    position: 'absolute',
                                    right: '60px',
                                    cursor: 'pointer',
                                }}
                            />
                        ) : (
                            <EyeClosed
                                size={20}
                                color="black"
                                onClick={handlePasswordType}
                                style={{
                                    position: 'absolute',
                                    right: '60px',
                                    cursor: 'pointer',
                                }}
                            />
                        )}
                    </InputPassword>

                    <Button
                        variant="primary"
                        type="submit"
                        style={{
                            marginTop: '40px',
                            font: 'bold 15px Courier New, Courier, monospace',
                        }}
                    >
                        Entrar
                    </Button>

                    <RememberCredentials>
                        <RememberCheckbox
                            type="checkbox"
                            id="remember-checkbox"
                        />
                        <RememberLabel htmlFor="remember-checkbox">
                            Lembrar minhas credenciais
                        </RememberLabel>
                    </RememberCredentials>

                    {/* Redirecionar depois para uma página de recuperação de senha */}

                    <Link
                        to="/login"
                        style={{
                            textDecoration: 'none',
                            marginTop: '10px',
                            marginBottom: '50px',
                        }}
                    >
                        <RememberPassword>Esqueci minha senha</RememberPassword>
                    </Link>
                </LoginForm>

                <SloganContainer>
                    <SloganTitle>
                        Shotokawa Comics: Seu universo em uma página!
                    </SloganTitle>
                    <Link to="/register">
                        <Button
                            variant="primary"
                            type="submit"
                            style={{
                                marginTop: '32px',
                                borderRadius: '19px',
                            }}
                        >
                            Não tem uma conta? Clique aqui
                        </Button>
                    </Link>
                </SloganContainer>
            </LoginContainer>
        </>
    );
};

export default Login;
