import React from "react";
import "./css/navbar.css";
// import NewPostModal from "./Modals/NewPostModal";

function Navbar() {
    //   const [modalOpen, updateModal] = useState(false);
    //   const [isLoading, setIsLoading] = useState(true);  

    return (
        <div>
            <ul className="navinator">
                <li className="navElement">
                    <a href="/dashboard">ATZ Healthcare</a>
                </li>
                <li className="navElement">
                    <a href="/dashboard">Home</a>
                </li>
                <li className="navElement">
                    <a href="/dashboard">Patient Profile</a>
                </li>
                <li style={{ float: "right" }}>
                    <a
                        className="active"
                        onClick={e => console.log("modal opens here")}>
                        Schedule An Appointment
            </a>
                </li>
                <li className="navElement" style={{ float: "right" }}>
                    <a href="/login">Login</a>
                </li>
            </ul>
            {/* <NewPostModal show={modalOpen} updateModal={updateModal} /> */}
        </div>
    );

} //class

export default Navbar;