import { useState } from "react";
import { ContainerSearch } from "./styles"

export const Search = () => {

    const [search, setSearch] = useState('');


    return (
        <>
            <ContainerSearch>
                <div className="container_search">
                    <input 
                        placeholder="O que você está procurando?"
                        type="text"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        name="search"
                    />
                    <button>Buscar</button>
                </div>
                
            </ContainerSearch>
        </>
    )
}