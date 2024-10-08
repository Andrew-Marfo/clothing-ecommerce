const SignUpForm = () => {
    return (
        <div className="form">
            <h1>Sign up with email and password</h1>
            <form>
                <label>DisplayName</label>
                <input type="text" />

                <label>Email</label>
                <input type="email" />

                <label>Password</label>
                <input type="password" />

                <label>Password</label>
                <input type="password" />
            </form>
        </div>
    );
}

export default SignUpForm;