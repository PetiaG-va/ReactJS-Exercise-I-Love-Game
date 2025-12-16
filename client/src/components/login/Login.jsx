import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm.js";
import { useUserContext } from "../../contexts/UserContext.jsx";

export default function Login() {
    const navigate = useNavigate();
    const { loginHandler } = useUserContext();

    const submitHandler = ({ email, password }) => {
        if (!email || !password) {
            return alert('Email and password are required!');
        }

        try {
            loginHandler(email, password);

            navigate('/');

        } catch (error) {
            alert(error.message)
        }
    }

    const {
        register,
        formAction,
    } = useForm(submitHandler, {
        email: '',
        password: '',
    })

    return (
        <section id="login-page">

            <form id="login" onSubmit={formAction}>
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register('email')} placeholder="Your Email" />

                    <label htmlFor="login-password">Password</label>
                    <input type="password" id="login-password" {...register('password')} placeholder="Password" />
                    <input type="submit" className="btn submit" value="Login" />
                </div>
            </form>
        </section>
    )
}