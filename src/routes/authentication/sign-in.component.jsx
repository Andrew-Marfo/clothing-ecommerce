import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        await signInWithGooglePopup();
    }
    return (
        <div className="sign-in">
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}> Sign in with Google </button>
        </div>
    );
}

export default SignIn;