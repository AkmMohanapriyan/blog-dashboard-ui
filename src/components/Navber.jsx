import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {

    const [selectedOption, setSelectedOption] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedOption === "admin") {
            navigate("/");
        }
    }, [selectedOption, navigate]);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (

        <>

            <nav className="navbar">

                <div className="Logo">
                    <h1>My Blog Page</h1>
                </div>

                <div className="navDropDown">
                    <select className="form-select" aria-label="Default select example" onChange={handleSelectChange}>
                        <option value="user">Profile</option>
                        <option value="admin">Logout</option>
                    </select>                
                </div>

            </nav>

        </>

    )

}

export default Navbar