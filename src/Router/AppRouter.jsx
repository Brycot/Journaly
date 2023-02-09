import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../Auth/routes/AuthRoutes';
import { JournalRoutes } from '../Journal/routes/JournalRoutes';

import { useCheckAuth } from '../hooks';

import { CheckingAuth } from '../ui';

export const AppRouter = () => {
    const { status } = useCheckAuth();

    if (status === 'checking') {
        return <CheckingAuth />;
    }

    return (
        <Routes>
            {status === 'authenticated' ? (
                <Route path="/*" element={<JournalRoutes />} />
            ) : (
                <Route path="/auth/*" element={<AuthRoutes />} />
            )}

            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    );
};
