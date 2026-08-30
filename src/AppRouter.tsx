// import type { PropsWithChildren } from "react"
import { BrowserRouter, Navigate, Route } from "react-router"
import { Login } from "@/public"
import { PrivateGuard } from "@/guard"
import PrivateRouter from './private/PrivateRouter/PrivateRouter';
import type { PropsWithChildren } from "react";
import { NotFound } from './components/NotFound/NotFound';

export const AppRouter = ({ children }: PropsWithChildren) => {
    return (
        <BrowserRouter>
            <NotFound>
                <Route path="/" element={<Navigate to='/login' />} />
                <Route path="login" element={<Login />} />

                <Route element={<PrivateGuard />}>
                    <Route path="/private/*" element={<PrivateRouter />} />
                </Route>

                {children}
            </NotFound>
        </BrowserRouter>
    )
}
