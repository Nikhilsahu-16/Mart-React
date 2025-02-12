import React, { useEffect, useState } from 'react';

function Timer()
{
    const [timer, setTimer] = useState(0);

    useEffect(() =>
    {
        // Set up the interval only once when the component mounts
        const interval = setInterval(() =>
        {
            setTimer((prevTime) => prevTime + 1);
        }, 1000);

        // Clean up the interval once the timer reaches 10
        if (timer === 10)
        {
            clearInterval(interval);
        }

        // Cleanup function when the component unmounts
        return () => clearInterval(interval);
    }, [timer]); // Empty dependency array ensures this effect runs only once

    return (
        <>
            <div>Timer: {timer}</div>
            {timer === 10 && <h1>Exam over!</h1>}
        </>
    );
}

export default Timer;
