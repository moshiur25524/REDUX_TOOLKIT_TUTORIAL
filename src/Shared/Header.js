import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Books</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to='/counter'>Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to='/posts'>Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to='/books'>Show Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to='/addBooks'>Add Book</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;