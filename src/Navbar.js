import { Link } from 'react-router-dom';

const Navbar = () => {

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
                        <Link to="/calculator">Calculator</Link>
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
                        Light/Dark mode
                    </button>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;