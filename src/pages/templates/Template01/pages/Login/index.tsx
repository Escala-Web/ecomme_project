import React, { useState } from "react"
import { Title } from "../../components/Title"
import { Formulario } from "../../styles/Formulario"
import { Container } from "./styles"
import { useAdmin } from "../../../../../hooks/admin/useAdmin"
import { ForgetPassword } from "../../components/Login/ForgetPassword"

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAdmin();

    const handleSubmit = (event: React.FormEvent) => {

        event.preventDefault();

        login.mutate({
            email,
            password
        })
    }

    return (
        <>
            <Container>
                <div className="container">
                    <Title title="Acesse sua conta" align="start"/>
                    <Formulario onSubmit={handleSubmit}>
                        <div className="form_block">
                            <label htmlFor="email">E-mail</label>
                            <input 
                                placeholder="E-mail"
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}    
                            /> 
                        </div>
                        <div className="form_block mt">
                            <label htmlFor="password">Senha</label>
                            <input 
                                placeholder="Senha"
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}     
                            /> 
                        </div>
                        <div className="form_flex mt">
                            <button type="submit" className='button contain'>{login.isPending ? 'Entrando...' : 'Entrar'}</button>
                            <ForgetPassword />
                        </div>
                    </Formulario>
                </div>
            </Container>
        </>
    )
}