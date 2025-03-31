import { Link } from "react-router-dom"
import { Title } from "../Title"
import { Container } from "./styles"

export const Destaques = () => {

    return (
        <>
            <Container>
                <Title title="Destaques de hoje" align="start" link="Ver mais"/>
                <div className="container_images">
                    <div className="image">
                        <div className="content">
                            <p className="name_product">Nome do Produto</p>
                            <p className="price">R$ 455,99</p>
                            <Link>Confira</Link>
                        </div>
                    </div>
                    <div className="image">
                        <div className="content">
                            <p className="name_product">Nome do Produto</p>
                            <p className="price">R$ 455,99</p>
                            <Link>Confira</Link>
                        </div>
                    </div>
                    <div className="image">
                        <div className="content">
                            <p className="name_product">Nome do Produto</p>
                            <p className="price">R$ 455,99</p>
                            <Link>Confira</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}