import { useState } from "react";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value }); 
        console.log(formFields);
    }

    return (
        <div className="form">
            <h1>Sign up with email and password</h1>
            <form onSubmit={() => { }}>
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