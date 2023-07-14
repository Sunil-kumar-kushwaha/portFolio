import React from "react";
import { useState, useEffect } from "react";


const Home = () => {
    const [data, setData] = useState('');
    useEffect(() => {
      fetch("http://localhost:8080/").then((res) => res.json()).then((bdata) => setData(bdata));
    }, []);

    return (
        <>
        <div>
            {JSON.stringify(data)}  
        </div>
        </>
    )


}

export default Home;