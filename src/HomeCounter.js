import { useState } from "react";

const Home = () => {

    const [counter, setCounter] = useState(0)
    
    const handleClick = () => {
        setCounter(counter + 1);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>You have clicked: {counter} times</p>
            <button onClick={handleClick}>click here</button>
        </div>
     );
}
 
export default Home;