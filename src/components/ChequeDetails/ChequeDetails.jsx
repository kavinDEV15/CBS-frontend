import React, { useState, useEffect } from 'react';
import './ChequeDetails.css'; 

const ChequeDetails = () => {
    const [cheque, setCheque] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Your fetch logic here
        // For example:
        const fetchCheque = async () => {
            try {
                const response = await fetch('path-to-your-api');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                setCheque(data);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        };

        fetchCheque();
    }, []); // Don't forget the dependency array

    const checkValidity = () => {
        // Your check validity logic here
        console.log('Checking cheque validity...');
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container">
            <h1>Cheque Details</h1>
            {cheque ? (
                <>
                    <img src={cheque.imageUrl} alt="Cheque" className="image" />
                    <p className="info">Payee: {cheque.payee}</p>
                    <p className="info">Amount: ${cheque.amount}</p>
                    <p className="info">Date: {new Date(cheque.date).toLocaleDateString()}</p>
                    <button onClick={checkValidity} className="button">Check Validity</button>
                </>
            ) : <p>No cheque details to display.</p>}
        </div>
    );
};

export default ChequeDetails;
