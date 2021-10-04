import { useState, useEffect } from 'react';
export const useTeam = (route) => {
    const [getTeam, setTeam] = useState([]);
    let url = "./herodriving.json"
    useEffect(() => {
        fetch(`${url}`)
            .then(response => response.json()
                .then(data => {
                    setTeam(data.Team)
                }))
    }, [])
    return [getTeam, setTeam]
}