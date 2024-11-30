

async function fetch_calendar(token) {

    const url = 'http://220.88.39.23:5000/api/calendar/past_events';
    
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            const errorMessage = await response.text(); 
            console.error("Error message from server:", errorMessage);
            throw new Error(`Failed to fetch calendar events: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching calendar data:", error);
        throw error; 
    }
}

export default fetch_calendar;
