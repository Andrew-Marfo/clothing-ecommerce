import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils';
import FormInput from '../../../components/form-input/form-input.component';
import Button from '../../../components/button/button.component';
import { useState } from 'react';

import './sign-in-form.styles.scss';

const defaultFormField = {
    email: "",
    password: "",
}

const SignInForm = () => {

    const [formfield, setFormField] = useState(defaultFormField);

    const { email, password } = formfield;

    const signInWithEmailAndPassword = async () => {
        console.log("Signed in")
    }

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    return (
        <div className="sign-in-form-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={() => { }}>
                <FormInput
                    label={"Email"}
                    type="email"
                    required
                    onChange={() => { }}
                    name="email"
                    value={email}
                />
                <FormInput
                    label={'password'}
                    type="email"
                    required
                    onChange={() => { }}
                    name="email"
                    value={password}
                />
                <Button onClick={signInWithEmailAndPassword} type={"submit"}>Sign In</Button>
                <br />
            </form>
            <Button onClick={logGoogleUser} buttonType={"google"}>  Sign in with Google </Button>

        </div>
    );
}

export default SignInForm;