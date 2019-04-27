import React from 'react';


class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid" >
                    <div className="navbar-header">
                        <a href="/" className="navbar-brand">Naukri</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/">Home</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="/" className="fa fa-sign-out" aria-hidden="true">Signin</a></li>
                        <li><a href="/" className="fa fa-sign-in" aria-hidden="true">Logout</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;