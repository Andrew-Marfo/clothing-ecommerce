import { signInWithGooglePopup, createUserDocumentFromAuth, signUserInWithEmailAndPassword } from '../../../utils/firebase/firebase.utils';
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

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formfield, [name]: value })
        console.log(formfield);
    }

    const resetDefaultFormFields = () => {
        setFormField(defaultFormField);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await signUserInWithEmailAndPassword(email, password);
            console.log(response);
            resetDefaultFormFields();
        } catch (error) {
            switch (error.code) {
                case "auth/invalid-credential":
                    alert("Invalid credentials! Try again");
                    break;
                default:
                    alert(`${error.message}`);
            }
        }
    }

    const logGoogleUser = async () => {
        try {
            const { user } = await signInWithGooglePopup();
            await createUserDocumentFromAuth(user);
        } catch (error) {
            if (error.code === 'auth/popup-closed-by-user') {
                alert('Sign-in process was canceled. Please try again.');
            } else {
                alert('Error during Google sign-in:', error.message);
            }
        }
    }

    return (
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={onSubmitHandler}>
                <FormInput
                    label={"Email"}
                    type="email"
                    required
                    onChange={onChangeHandler}
                    name="email"
                    value={email}
                />
                <FormInput
                    label={'password'}
                    type="password"
                    required
                    onChange={onChangeHandler}
                    name="password"
                    value={password}
                />
                <div className="buttons-container">
                    <Button type={"submit"}>Sign In</Button>
                    <Button type={'button'} onClick={logGoogleUser} buttonType={"google"}>GOOGLE SIGN IN</Button>
                </div>
            </form>

        </div>
    );
}

export default SignInForm;