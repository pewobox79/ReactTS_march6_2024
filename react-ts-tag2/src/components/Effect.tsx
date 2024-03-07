import { useEffect, useState } from "react"

const Effect = () => {

    const [number, setNumber] = useState(0);

    useEffect(() => {

        
        const interval = setInterval(() => {
            //setNumber(prev => prev + 1)
        }, 500) 

        //cleanup interval
        return () => clearInterval(interval)

    }, [])




    return (
        <>
            <h2>UseEffect Exercise</h2>
            <h4>{number}</h4>
            <button onClick={() => setNumber(prev => prev + 1)}>add</button>
        </>
    )
}

export default Effect
