import { Container } from "./styles"

export const CardProduct = () => {

    return (
        <Container>
            <div className="media">
                <img src="https://oficinareserva.vtexassets.com/arquivos/ids/720523/camisa-maleavel-azul-marinho-5-01.jpg?v=638784714651130000" alt="image"/>
            </div>
            <div className="content">
                <span>Frente Gratis</span>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <h4>R$ 567,99</h4>
            </div>
        </Container>
    )

}