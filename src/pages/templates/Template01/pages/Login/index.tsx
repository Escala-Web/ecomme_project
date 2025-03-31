import { Title } from "../../components/Title"
import { Formulario } from "../../styles/Formulario"
import { Container } from "./styles"

export const Login = () => {

    return (
        <>
            <Container>
                <div className="container">
                    <Title title="Acesse sua conta" align="start"/>
                    <Formulario>
                        <div className="form_block">
                            <label htmlFor="email">E-mail</label>
                            <input 
                                placeholder="E-mail"
                                type="email"
                                name="email"
                                id="email"    
                            /> 
                        </div>
                        <div className="form_block mt">
                            <label htmlFor="password">Senha</label>
                            <input 
                                placeholder="Senha"
                                type="password"
                                name="password"
                                id="password"    
                            /> 
                        </div>
                        <div className="form_flex mt">
                            <button className='button contain'>Entrar</button>
                            <button className='button no_contain'>Esqueci minha senha</button>
                        </div>
                    </Formulario>
                </div>
            </Container>
        </>
    )
}