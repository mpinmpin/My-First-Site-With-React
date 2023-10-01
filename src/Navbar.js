import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="page-title">
                <Link to="/"><h1>My First Site</h1></Link>
            </div>           
            <div className="links">
                <div className="dropdown">
                    <button class="dropbtn">Simple Apps
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/bmicalculator">BMI Calculator</Link>
                        <Link to="/counter">Simple Counter</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button class="dropbtn">Blogs
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/blogspage">Blogs Page</Link>
                        <Link to="/create">Create New Blog</Link>
                    </div>
                </div>
                <Link to="/about">About</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;