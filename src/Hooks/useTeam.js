import { useState, useEffect } from 'react';

// Get Team Information From JSON 
export const useTeam = () => {
    const [getTeam, setTeam] = useState([]);
    useEffect(() => {
        fetch("./herodriving.json")
            .then(response => response.json()
                .then(data => {
                    setTeam(data.Team)
                }))
    }, [])
    return [getTeam, setTeam]
}