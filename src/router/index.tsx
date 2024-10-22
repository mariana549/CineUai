import { Route, Routes } from "react-router-dom"
import { Home } from "../page/home.tsx"

export function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

