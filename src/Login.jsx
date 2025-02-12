import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./store";

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
            navigate('/home');
        } else
        {
            window.alert("Your credentials are wrong. CHECK ONCE!");
        }
    }
    return (
        <>
            <div id="login">
                <form>
                    <h2>Login</h2>
                    <input type="text" ref={username} placeholder="Username" />
                    <input type="password" ref={password} placeholder="Password" />
                    <button onClick={() => LoginCheck()}>Login</button>
                </form>
            </div>
        </>
    )
}
export default Login;