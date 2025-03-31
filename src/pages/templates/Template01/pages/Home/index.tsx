import { ContainerTemplate } from "../../../../../styles/ContainerGlobal"
import { Banner } from "../../components/Banner"
import { CardCategory } from "../../components/CardCategory"
import { Destaques } from "../../components/Destaques"
import { ProductPopular } from "../../components/ProductPopular"
import { Title } from "../../components/Title"

export const Home = () => {
    return (
        <>
            <Banner />
            <ContainerTemplate>
                <CardCategory />
                <ProductPopular />
                <Destaques />
                <ProductPopular />
            </ContainerTemplate>
        </>
    )
}