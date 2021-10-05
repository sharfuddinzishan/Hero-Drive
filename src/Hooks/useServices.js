import { useState, useEffect } from 'react';
export const useServices = (route) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        let url
        if (!route) {
            url = "./herodriving.json"
        }
        else {
            url = "../herodriving.json"
        }
        fetch(`${url}`)
            .then(response => response.json())
            .then(data => setServices(data.Services))
    }, [route])
    return [services, setServices]
}
