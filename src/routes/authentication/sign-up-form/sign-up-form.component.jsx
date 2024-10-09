import { useState } from "react";
import { signUpWithEmailAndPassword, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";

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
        if (password == confirmPassword) {
            try {
                const { user } = await signUpWithEmailAndPassword(email, password);
                console.log(user)
                const newUserDoc = user;
                const userDoc = { ...newUserDoc, displayName: displayName };
                await createUserDocumentFromAuth(userDoc);
                resetFormFields();
            } catch (error) {
                if (error.code == 'auth/weak-password') {
                    alert('Weak password')
                } else if (error.code == 'auth/email-already-in-use') {
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
        <div className="form">
            <h1>Sign up with email and password</h1>
            <form onSubmit={onSubmitHandler}>
                <label>DisplayName</label>
                <input type="text" required onChange={onChangeHandler} name="displayName" value={displayName} />

                <label>Email</label>
                <input type="email" required onChange={onChangeHandler} name="email" value={email} />

                <label>Password</label>
                <input type="password" required onChange={onChangeHandler} name="password" value={password} />

                <label>Confirm Password</label>
                <input type="password" required onChange={onChangeHandler} name="confirmPassword" value={confirmPassword} />

                <button type="submit">Submit form</button>
            </form>
        </div>
    );
}

export default SignUpForm;