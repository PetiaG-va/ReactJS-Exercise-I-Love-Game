import { useNavigate } from "react-router";

export default function Register({
    onRegister
}) {
    const navigate = useNavigate();

    const registerSubmit = (formData) => {
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        // TODO: Validation

        if (!email || !password) {
            return alert('Email and password are required!');
        };

        if (password !== confirmPassword) {
            return alert('Password missmatch');
        };

        try {
            // Register User
            onRegister(email, password);
            
            // Redirect to home page
            navigate('/');
        } catch (error) {
            alert(error.message);
        }


    }

    return (
        <section id="register-page" className="content auth">
            <form id="register" action={registerSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" placeholder="Password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" placeholder="Repeat Password" />

                    <input className="btn submit" type="submit" value="Register" />
                </div>
            </form>
        </section>
    )
}