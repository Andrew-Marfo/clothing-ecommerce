import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUpForm from './sign-up-form/sign-up-form.component';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }
    return (
        <div className="sign-in">
            <h2>Sign In Page</h2>
            <button onClick={logGoogleUser}> Sign in with Google </button>
            <SignUpForm />
        </div>
    );
}

export default SignIn;