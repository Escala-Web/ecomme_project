import { Link } from "react-router-dom"
import { Container } from "./styles"

interface BreadcrumbProps {
    title?: string
}

export const Breadcrumb = ({title}: BreadcrumbProps) => {
    return (
        <>
            <Container>
                <div className="breadcrumb">
                    <h3>{title}</h3>
                </div>
                <div className="container_breadcrumb">
                    <Link to='/administrativo'>Dashboard</Link>
                    <p>{title}</p>
                </div>
            </Container>
        </>
    )
}