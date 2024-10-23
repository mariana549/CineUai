import { useEffect, useState } from "react";
import { getDetails } from "../../functions/funcoes";


export function DestalhesCard({dadosDetalhesCard}) {
    const [dados, setDados] = useState();

    console.log(dadosDetalhesCard)

    useEffect(() => {
        getDetails(setDados, dadosDetalhesCard)
    }, [])
    
    console.log(dados)

    return (
        <main>
            <h1>{dadosDetalhesCard}</h1>
        </main>
    )
}