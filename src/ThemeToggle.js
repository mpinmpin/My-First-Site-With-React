import { useState } from "react";

const ThemeToggle = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!isDarkMode);
    };
    
    return ( 
        <div>
            <button className="button-global" onClick={toggleTheme}>Toggle Theme</button>
            {isDarkMode ? <div className="dark-mode">Dark Mode</div> : <div>Light Mode</div>}
        </div>
     );
}
 
export default ThemeToggle;