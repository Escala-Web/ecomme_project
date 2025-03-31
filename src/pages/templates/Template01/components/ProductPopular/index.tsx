import { Link } from "react-router-dom"
import { Title } from "../Title"
import { CardProduct } from "../CardProduct"
import { Container } from "./styles"

export const ProductPopular = () => {

    return (
        <>
            <Container>
                <div className="container_image">
                    Image
                </div>
                <div className="container_product_principal">
                    <div className="container_header">
                        <Title align="start" title="Produtos populares" />
                        <Link to='/produtos'>Ver mais</Link>
                    </div>
                    <div className="container_product">
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                    </div>
                </div>
            </Container>
        </>
    )
}