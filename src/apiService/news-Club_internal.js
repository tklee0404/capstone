

async function fetch_clubinternal(token) {

    //select one of the URL 
    //Then restart the web
    //해당 URL을 선택하고 다시 시작하면 새로운 정보를 볼 수 있습니다.

    const url = 'http://220.88.39.23:5000/api/news/block_internal/club_internal';
    
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
        //const headline = data.map(entry => entry.headline);
        //const newURL = data.map(entry=>entry.url);
        return data;

    } catch (error) {
        console.error("Error fetching calendar data:", error);
        throw error; 
    }
}

export default fetch_clubinternal;
