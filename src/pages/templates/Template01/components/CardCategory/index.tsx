import { CardProduct } from "../CardProduct";
import { Title } from "../Title";
import { Container } from "./styles";


const data = [
    'Smartphones',
    'Controles',
    'Mouses',
    'Teclados',
    'Monitores',
    'Computadores',
    'Fone'
]

export const CardCategory = () => {

    return (
        <Container>
            <Title align="center" title="Principais Categorias"/>
            
            <div className="container_card">
            {data?.map((cate, index) => (
                <div className="card" key={index}>
                    <p>{cate}</p>
                </div>
            ))}
            </div>
            <div className="content">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
        </Container>
    );

}