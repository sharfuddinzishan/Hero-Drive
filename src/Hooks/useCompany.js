import { useState, useEffect } from 'react';
export const useCompany = (route) => {
    const [getCompany, setCompany] = useState([]);
    let url = "./herodriving.json"
    useEffect(() => {
        fetch(`${url}`)
            .then(response => response.json()
                .then(data => {
                    setCompany(data.Company)
                }))
    }, [])
    return [getCompany, setCompany]
}