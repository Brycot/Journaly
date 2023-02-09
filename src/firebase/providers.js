import { Password, Rule } from '@mui/icons-material';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from 'firebase/auth';
import { FireBaseAuth } from './config';

const googleProviver = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FireBaseAuth, googleProviver);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);

        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            //user info
            displayName,
            email,
            photoURL,
            uid,
        };
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage,
        };
    }
};

export const registerWithEmailPassword = async ({
    email,
    password,
    displayName,
}) => {
    try {
        const resp = await createUserWithEmailAndPassword(
            FireBaseAuth,
            email,
            password
        );
        const { uid, photoURL } = resp.user;

        await updateProfile(FireBaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName,
        };
    } catch (error) {
        return {
            ok: false,
            errorMessage: 'El correo ya esta en uso',
        };
    }
};

export const loginWithEmailPassword = async ({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword(
            FireBaseAuth,
            email,
            password
        );
        const { displayName, photoURL, uid } = resp.user;

        return {
            ok: true,
            displayName,
            photoURL,
            uid,
            email,
        };
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
        };
    }
};

export const logoutFirebase = async () => {
    return await FireBaseAuth.signOut();
};
