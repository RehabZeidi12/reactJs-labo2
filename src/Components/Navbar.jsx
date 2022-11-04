import React from "react";
import { Link } from "react-router-dom"


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar navbar-dark bg-dark navbar-expand-lg">

                <div className="navbar-brand" href="#">Bienvenue</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/Ajout" className="nav-link" >Ajout</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Ajout2" className="nav-link" >Ajout2</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/list" className="nav-link" >list</Link>
                        </li>
                    </ul></div>
            </nav>)
    }
}
export default Navbar;