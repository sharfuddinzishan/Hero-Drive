import { useState, useEffect } from 'react';

// Get Company Information 
export const useCompany = () => {
    const [getCompany, setCompany] = useState([]);
    useEffect(() => {
        fetch("./herodriving.json")
            .then(response => response.json()
                .then(data => {
                    setCompany(data.Company)
                }))
    }, [])
    return [getCompany, setCompany]
}