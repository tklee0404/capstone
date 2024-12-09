import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import fetch_calendar from '../apiService/fetch_calendar';

export default function MatchCalendar() {
    const [matches, setMatches] = useState([]);
    const [selectedMatch, setSelectedMatch] = useState(null); 
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token'); 


    useEffect(() => {
        const fetchData = async () => {
            if (!token) return;
            setLoading(true); 
            try {
                const fetchedData = await fetch_calendar(token); 
                const formattedMatches = Object.keys(fetchedData).map(key => {
                    const match = fetchedData[key];
                    const matchDate = new Date(match.match_date);
                    return {
                        title: `${match.opponent_team} vs. ${match.this_score}-${match.opponent_score}`,
                        date: matchDate.toISOString().split('T')[0],
                        extendedProps: {
                            matchDetails: match,
                        },
                    };
                });
                setMatches(formattedMatches); 
            } catch (error) {
                console.error("Error fetching calendar data:", error);
            } finally {
                setLoading(false); 
            }
        };

        fetchData();
    }, [token]); 


    const handleDateClick = (arg) => {
        const selectedDate = arg.dateStr; 
        const match = matches.find(m => m.date === selectedDate);
        if (match) {
            setSelectedMatch(match.extendedProps.matchDetails); 
        }
    };

    return (
        <div className="flex flex-col items-center sm:flex-row sm:space-x-8">
            {loading ? (
                <div className="text-center">
                    <p>Loading calendar data...</p>
                </div>
            ) : (
                <>
       
                    <div className="w-full sm:w-[60%]">
                        <FullCalendar
                            plugins={[dayGridPlugin, interactionPlugin]}
                            initialView="dayGridMonth"
                            events={matches} 
                            dateClick={handleDateClick} 
                        />
                    </div>

                    {selectedMatch && (
                        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '400px' }}>
                            <h4>Match Details</h4>
                            <p><strong>Location:</strong> {selectedMatch.location}</p>
                            <p><strong>Opponent:</strong> {selectedMatch.opponent_team}</p>
                            <p><strong>Your Score:</strong> {selectedMatch.this_score}</p>
                            <p><strong>Opponent Score:</strong> {selectedMatch.opponent_score}</p>
                            <p><strong>Match Date:</strong> {selectedMatch.match_date}</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
