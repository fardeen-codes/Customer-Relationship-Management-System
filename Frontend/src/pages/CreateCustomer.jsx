// src/pages/CreateCustomer.jsx

import React, { useContext, useState } from "react";
import Navbar from '../components/Navbar'
import axios from "axios";
import { AuthContext } from "../authContext";
import "../styles/createCustomer.css"
import { useNavigate } from "react-router-dom";

const CreateCustomer = () => {

    const [info, setInfo] = useState({});
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInfo(
            (prev) => ({
                ...prev, [e.target.id]: e.target.value
            }
            ));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        const newpost = {
            ...info,
            company: user._id,
        }

        try {
            await axios.post(
                "http://localhost:8080/api/customers",
                newpost)
            navigate('/')
        } catch (err) {
            console.log(err);
        }

    };

    return (
        <div className="createCustContainer">
            <Navbar />
            <div className="cpContainer">
                <div className="formContainer">
                    <div className="inputContainer">
                        <div className="input">
                            <label htmlFor="title">Name</label>
                            <input
                                required
                                onChange={handleChange}
                                type="text"
                                id="name"
                                placeholder="Enter Name"
                            />
                        </div>

                        <div className="input">
                            <label htmlFor="location">Service</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                id="service"
                                placeholder="Enter service type"
                            />
                        </div>

                        <div className="input">
                            <label htmlFor="location">Email</label>
                            <input
                                onChange={handleChange}
                                type="email"
                                id="email"
                                placeholder="Enter email"
                            />
                        </div>

                        <div className="input">
                            <label htmlFor="price">Phone Number</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                id="phone"
                                placeholder="Enter phone number"
                            />
                        </div>

                        <div className="input">
                            <label>Status</label>
                            <select id="status" onChange={handleChange}>
                                <option key={0} value="none">Select Status</option>
                                <option key={1} value="not started">
                                    not started
                                </option>
                                <option key={2} value="ongoing">
                                    ongoing
                                </option>
                                <option key={3} value="completed">
                                    completed
                                </option>
                            </select>
                        </div>

                        <button className="button"
                            onClick={handleClick} type="submit">
                            Add Customer
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateCustomer
