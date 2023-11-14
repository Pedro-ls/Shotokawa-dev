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
    SloganContainer,
    SloganTitle,
} from '../Login/style.js';

import logo from '../../assets/logo_name.png';
import * as yup from 'yup';
import { Eye, EyeClosed } from '@phosphor-icons/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { endpoinsClient } from '../../services/client.js';

const schema = yup.object().shape({
    name: yup
        .string()
        .required('nome é um campo obrigatorio')
        .nonNullable('campo não pode ser vazio'),
    email: yup
        .string()
        .email('Esse email não é valido')
        .required('email é um campo obrigatorio')
        .nonNullable('campo não pode ser vazio'),
    password: yup
        .string()
        .min(8, 'sua senha é muito pequena')
        .max(32, 'sua senha tem mais digitos do que é permitido')
        .required('senha é um campo obrigatorio')
        .nonNullable('campo não pode ser vazio'),
    confirm_password: yup
        .string()

        .min(8, 'sua senha é muito pequena')
        .max(32, 'sua senha tem mais digitos do que é permitido')
        .required('senha é um campo obrigatorio')
        .nonNullable('campo não pode ser vazio')
        .oneOf([yup.ref('password'), null], 'Senhas não coincidem'),
});

const Register = () => {
    const [password, setPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [confirmPassword, setConfirmPassword] = useState(false);

    const handlePasswordType = () => {
        setPassword({ ...password, type: !password.type });
    };

    const handleConfirmPasswordType = () => {
        setConfirmPassword({ ...confirmPassword, type: !confirmPassword.type });
    };

    const onSubmitHandler = (data) => {
        const res = endpoinsClient.register(data);

        if (res) {
            alert('Cliente Cadastrado com sucesso');
            reset();
        } else {
            alert('Erro no Cadastro do cliente');
        }
    };

    return (
        <>
            <LoginHeader>
                <Link to="/">
                    <Logo src={logo} alt="Logo" />
                </Link>

                <Social />
            </LoginHeader>

            <LoginContainer>
                <LoginForm onSubmit={handleSubmit(onSubmitHandler)}>
                    <LoginTitle style={{ marginLeft: '20px' }}>
                        {' '}
                        Cadastrar
                    </LoginTitle>

                    <Input
                        type="name"
                        placeholder="Nome"
                        style={{ marginBottom: '20px' }}
                        {...register('name')}
                    />
                    <p>{errors.name?.message}</p>

                    <Input
                        type="email"
                        placeholder="E-mail"
                        style={{ marginBottom: '20px' }}
                        {...register('email')}
                    />
                    <p>{errors.email?.message}</p>
                    <InputPassword style={{ marginBottom: '20px' }}>
                        <Input
                            type={password.type ? 'text' : 'password'}
                            placeholder="Senha"
                            {...register('password')}
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
                    <p>{errors.password?.message}</p>

                    <InputPassword style={{ marginBottom: '20px' }}>
                        <Input
                            type={confirmPassword.type ? 'text' : 'password'}
                            placeholder="Confirmar senha"
                            {...register('confirm_password')}
                        />
                        {confirmPassword.type ? (
                            <Eye
                                size={20}
                                color="black"
                                onClick={handleConfirmPasswordType}
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
                                onClick={handleConfirmPasswordType}
                                style={{
                                    position: 'absolute',
                                    right: '60px',
                                    cursor: 'pointer',
                                }}
                            />
                        )}
                    </InputPassword>
                    <p>{errors.confirm_password?.message}</p>
                    <Button
                        variant="primary"
                        type="submit"
                        style={{
                            marginTop: '40px',
                            font: 'bold 15px Courier New, Courier, monospace',
                        }}
                    >
                        Inscrever-se
                    </Button>

                    <RememberCredentials style={{ marginBottom: '30px' }}>
                        <RememberCheckbox
                            type="checkbox"
                            id="remember-checkbox"
                        />
                        <RememberLabel htmlFor="remember-checkbox">
                            Lembrar minhas credenciais
                        </RememberLabel>
                    </RememberCredentials>
                </LoginForm>

                <SloganContainer>
                    <SloganTitle>
                        Shotokawa Comics: Seu universo em uma página!
                    </SloganTitle>
                    <Link to="/login">
                        <Button
                            variant="primary"
                            type="submit"
                            style={{
                                marginTop: '32px',
                                borderRadius: '19px',
                            }}
                        >
                            Já tem uma conta? Clique aqui
                        </Button>
                    </Link>
                </SloganContainer>
            </LoginContainer>
        </>
    );
};

export default Register;
