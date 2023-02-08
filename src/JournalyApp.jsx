import { AppRouter } from './Router/AppRouter';
import { AppTheme } from './theme';

export const JournalyApp = () => {
    return (
        <>
            <AppTheme>
                <AppRouter />
            </AppTheme>
        </>
    );
};
