import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="page-title">
                <Link to="/"><h1>My First Site</h1></Link>
            </div>           
            <div className="links">
                
                <Link to="/">Simple Apps</Link>
                <div className="dropdown">
                    <button class="dropbtn">Blogs
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/blogspage">Blogs Page</Link>
                        <Link to="/create">New Blog</Link>
                    </div>
                </div>
                <Link to="/about">About</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;