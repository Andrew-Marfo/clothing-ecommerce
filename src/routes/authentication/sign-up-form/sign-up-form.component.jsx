import { useState, useContext } from "react";

import { signUpWithEmailAndPassword, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";
import { UserContext } from '../../../contexts/user.context';
import FormInput from "../../../components/form-input/form-input.component";
import Button from '../../../components/button/button.component';

import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (password === confirmPassword) {
            try {
                const { user } = await signUpWithEmailAndPassword(email, password);
                const newUserDoc = user;
                const userDoc = { ...newUserDoc, displayName: displayName };
                setCurrentUser(userDoc);
                await createUserDocumentFromAuth(userDoc);
                resetFormFields();
            } catch (error) {
                if (error.code === 'auth/weak-password') {
                    alert('Weak password')
                } else if (error.code === 'auth/email-already-in-use') {
                    alert('Email is already in use')
                } else {
                    alert('An error occured', error.message);
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