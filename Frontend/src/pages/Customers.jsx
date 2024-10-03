import React, { useContext } from 'react';
import useFetch from '../useFetch';
import { AuthContext } from '../authContext';
import CustCard from '../components/CustCard';
import Navbar from '../components/Navbar';
import "../styles/customers.css";

const Customers = ({ type }) => {
    const { user } = useContext(AuthContext);
    const { data, loading, error } = useFetch(`http://localhost:8080/api/customers/${user._id}`);

    return (
        <div>
            <Navbar />
            <div className="cust-container">
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error fetching customers: {error.message}</p>
                ) : Array.isArray(data) && data.length > 0 ? (
                    data.map((item) => (
                        <CustCard key={item.id} props={{ ...item, type }} />
                    ))
                ) : (
                    <p>No Customers Yet</p>
                )}
            </div>
        </div>
    );
}

export default Customers;
