import { Route, Routes } from "react-router-dom"
import { Home } from "../page/home.tsx"
import { DestalhesCard } from "../components/detalhesCard/index.tsx"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:type/:id/:title" element={<DestalhesCard />} />
        </Routes>
    )
}

