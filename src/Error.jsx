import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Error()
{
    const navigate = useNavigate();
    useEffect(() =>
    {
        setTimeout(() =>
        {
            navigate("/home")
        }, 5000)
    }, [])
    return (
        <>
            <div style={{textAlign:"center"}}>
                <img src="image/error.webp" />
            </div>
        </>
    )
}
export default Error;