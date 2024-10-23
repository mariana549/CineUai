import { Route, Routes } from "react-router-dom"
import { Home } from "../page/home.tsx"
import { DestalhesCard } from "../components/detalhesCard/index.tsx"
import { useState } from "react"

export function AppRoutes() {
    const [dadosDetalhesCard, setDadosDetalhesCard] = useState()
console.log(dadosDetalhesCard, "o")
    return (
        <Routes>
            <Route path="/" element={<Home setDadosDetalhesCard={setDadosDetalhesCard} />} />
            <Route path="/:movie/:title" element={<DestalhesCard  dadosDetalhesCard={dadosDetalhesCard} />} />
        </Routes>
    )
}

