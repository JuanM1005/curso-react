import { Navigate, Route } from "react-router"
import { Dashboard } from '@/private';
import { NotFound } from "@/components/NotFound/NotFound";

const PrivateRouter = () => {
    return (
        <NotFound>
            <Route>
                <Route index element={<Navigate to='/dashboard' replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </NotFound>
    )
}

export default PrivateRouter