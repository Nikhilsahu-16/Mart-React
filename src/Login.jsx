import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";

function Login()
{
    let username = useRef(null);
    let password = useRef(null);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let LoginCheck = () =>
    {
        if (username.current.value === "Priyanshu" && password.current.value === "Prishu@1372")
        {
            dispatch(login(username.current.value));
            navigate('/');
        } else
        {
            window.alert("Your credentials are wrong. CHECK ONCE!");
        }
    };

    return (
        <div id="login" className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <form className="bg-light p-4 border rounded shadow">
                        <h2 className="text-center mb-4">Login</h2>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                ref={username}
                                placeholder="Username"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                ref={password}
                                placeholder="Password"
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary w-100"
                            onClick={LoginCheck}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
