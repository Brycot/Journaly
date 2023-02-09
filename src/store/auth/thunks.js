import { async } from '@firebase/util';
import {
    loginWithEmailPassword,
    logoutFirebase,
    registerWithEmailPassword,
    singInWithGoogle,
} from '../../firebase/providers';
import { checkingCredentials, login, logout } from './';

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await singInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    };
};

export const startCreatingUserWithEmailAndPassword = ({
    email,
    password,
    displayName,
}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid, photoURL, errorMessage } =
            await registerWithEmailPassword({
                email,
                password,
                displayName,
            });

        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ ok, uid, photoURL, email, displayName }));
    };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await loginWithEmailPassword({ email, password });

        if (!result.ok) return dispatch(logout(result));

        dispatch(login(result));
    };
};

export const startLogout = () => {
    return async (dispatch) => {
        try {
            await logoutFirebase();
            dispatch(logout({}));
        } catch (error) {
            console.log(error);
        }
    };
};
