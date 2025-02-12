import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Error()
{
    const navigate = useNavigate();

    useEffect(() =>
    {
        setTimeout(() =>
        {
            navigate("/home");
        }, 5000);
    }, [navigate]);

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                <div className="text-center">
                    <img src="image/error.webp" className="img-fluid" alt="Error" />
                    <p className="mt-3">Redirecting to Home...</p>
                </div>
            </div>
        </>
    );
}

export default Error;
