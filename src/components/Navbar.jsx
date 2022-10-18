import { Link } from 'react-router-dom';

function Navbar() {
    return (  
        <div className="container-fluid bg-light border-bottom p-3">
            <div className="navbar">
                <div className="row">
                    <div className="col">
                        <Link to={'/'}><button className="btn btn-outline-primary m-1">Home</button></Link>
                        <Link to={'/blogs'}><button className="btn btn-outline-primary m-1">Blogs</button></Link>
                        <Link to={'/add'}><button className="btn btn-outline-primary m-1">Add blog</button></Link>
                        <Link to={'/about'}><button className="btn btn-outline-primary m-1">About</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;