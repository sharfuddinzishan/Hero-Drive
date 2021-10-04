import { useState, useEffect } from 'react';
export const useServices = (route) => {
    const [services, setServices] = useState([]);
    let url = "./herodriving.json"
    if (!route) {
        url = "./herodriving.json"
    }
    else {
        url = "../herodriving.json"
    }
    useEffect(() => {
        fetch(`${url}`)
            .then(response => response.json()
                .then(data => {
                    setServices(data.Services)
                }))
    }, [])
    return [services, setServices]
}