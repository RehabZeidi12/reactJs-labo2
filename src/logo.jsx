import React from "react";
import Image from "./assets/reactlogo.png"
class Logo extends React.Component {
    render() {
        return (
            <div className="container">

                <a href="https://fr.reactjs.org/"> <img src={Image} alt="Logo"></img></a>
            </div >
        )
    }
}
export default Logo