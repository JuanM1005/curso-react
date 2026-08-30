import type { PropsWithChildren } from "react"
import { Route, Routes } from "react-router"

export const NotFound = ({ children }: PropsWithChildren) => {
    return (
        <Routes>
            {children}
            <Route path="*" element={<h1>No encontrado</h1>} />
        </Routes>
    )
}
