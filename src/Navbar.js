// import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
// import './css/light-mode.css'
// import './css/dark-mode.css'
// import './css/light-mode.css'

const Navbar = () => {
    // const [isDarkMode, setIsDarkMode] = useState(false);

    // useEffect(() => {
    //     (async () => {
    //         const mode = isDarkMode ? 'dark-mode.css' : 'light-mode.css';
    //         try {
    //             const module = await import(`./css/${mode}`);
    //             console.log(`Successfully imported ${mode}`);
    //             console.log('isDarkMode is ' + isDarkMode);
    //         } catch (error) {
    //             console.error('Error importing CSS file:', error);
    //         }
    //     })();
    // }, [isDarkMode]);
    
    // useEffect(() => {
    //     const mode = isDarkMode ? 'dark-mode.css' : 'light-mode.css';
    //     import(`./css/${mode}`) 
    //       .then(() => {
    //         console.log(`Successfully imported ${mode}`);
    //         console.log('isDarkMode is ' + isDarkMode);
    //       })
    //       .catch((error) => {
    //         console.error('Error importing CSS file:', error);
    //       });
    // }, [isDarkMode]);

    const toggleMode = () => {
        const theme = document.getElementById('theme');
        const currentTheme = theme.getAttribute('href');

        if (currentTheme === 'light-mode.css') {
            theme.setAttribute('href', 'dark-mode.css');
            localStorage.setItem('theme', 'dark');
        } else {
            theme.setAttribute('href', 'light-mode.css');
            localStorage.setItem('theme', 'light');
        }
    };

    // Check local storage for saved theme and apply it
    document.addEventListener('DOMContentLoaded', function () {
        const savedTheme = localStorage.getItem('theme');
        const theme = document.getElementById('theme');
        
        if (savedTheme === 'dark') {
            theme.setAttribute('href', 'dark-mode.css');
        } else {
            theme.setAttribute('href', 'light-mode.css');
        }
    });

    return ( 
        <nav className="navbar">
            <div className="page-title">
                <Link to="/"><h1>My First Site</h1></Link>
            </div>           
            <div className="links">
                <div className="dropdown">
                    <button className="dropbtn">Simple Apps
                    </button>
                    <div className="dropdown-content">
                        <Link to="/bmicalculator">BMI Calculator</Link>
                        <Link to="/counter">Simple Counter</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Blogs
                    </button>
                    <div className="dropdown-content">
                        <Link to="/blogspage">Blogs Page</Link>
                        <Link to="/create">Create New Blog</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to="/about">About</Link>
                </div>
                <div className="dropdown">
                    <button className='button-global' onClick={toggleMode}>
                        {/* {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'} */}Light/Dark mode
                    </button>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;