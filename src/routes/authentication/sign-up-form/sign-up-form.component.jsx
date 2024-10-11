import { useState } from "react";
import { signUpWithEmailAndPassword, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";
import FormInput from "../../../components/form-input/form-input.component";
import './sign-up-form.styles.scss';
import Button from '../../../components/button/button.component';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
        console.log(formFields);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (password === confirmPassword) {
            try {
                const { user } = await signUpWithEmailAndPassword(email, password);
                console.log(user)
                const newUserDoc = user;
                const userDoc = { ...newUserDoc, displayName: displayName };
                await createUserDocumentFromAuth(userDoc);
                resetFormFields();
            } catch (error) {
                if (error.code === 'auth/weak-password') {
                    alert('Weak password')
                } else if (error.code === 'auth/email-already-in-use') {
                    alert('Email is already in use')
                } else {
                    console.log('An error occured', error.message);
                }
            }
        } else {
            alert('password do not match');
            return;
        }

    }


    return (
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={onSubmitHandler}>
                {/* Display Name */}
                <FormInput
                    label={'Display Name'}
                    type="text"
                    required onChange={onChangeHandler}
                    name="displayName"
                    value={displayName}
                />

                {/* Email */}
                <FormInput
                    label={"Email"}
                    type="email"
                    required
                    onChange={onChangeHandler}
                    name="email"
                    value={email}
                />

                {/* Password */}
                <FormInput
                    label={"Password"}
                    type="password"
                    required
                    onChange={onChangeHandler}
                    name="password"
                    value={password}
                />

                {/* Confirm Password */}
                <FormInput
                    label={"Confirm Password"}
                    type="password"
                    required
                    onChange={onChangeHandler}
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <Button type="submit">
                    Submit form
                </Button>
            </form>
        </div>
    );
}

export default SignUpForm;