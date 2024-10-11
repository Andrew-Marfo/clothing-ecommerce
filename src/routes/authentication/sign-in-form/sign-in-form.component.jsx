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

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const response = await signUserInWithEmailAndPassword(email, password);
        console.log(response);
    }

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    return (
        <div className="sign-in-form-container">
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
                <Button type={"submit"}>Sign In</Button>
                <br />
            </form>
            <Button onClick={logGoogleUser} buttonType={"google"}>  Sign in with Google </Button>

        </div>
    );
}

export default SignInForm;