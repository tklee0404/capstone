import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import fetch_calendar from '../apiService/fetch_calendar';

export default function MatchCalendar() {
    const [matches, setMatches] = useState([]);
    const [selectedMatch, setSelectedMatch] = useState(null);

    const [selectedTeam, setSelectedTeam] = useState();

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("teamSelect"));
        if (storedData && storedData.selectedTeam) {
            setSelectedTeam(storedData.selectedTeam);
        }
    }, []);


    const token = localStorage.getItem('token');
    const [calendarData, setcalendarData] = useState([]);
    useEffect(() => {
        const getInfo = async () => {
            if (token) {
                const fetchedData = await fetch_calendar(token);
                setcalendarData(fetchedData);
            }
        };
        getInfo();
    }, [token]);


    // 将比赛数据转换为 FullCalendar 能用的事件格式
    useEffect(() => {
        const formattedMatches = Object.keys(calendarData).map(key => {
            const match = calendarData[key];
            const matchDate = new Date(match.match_date); // 将比赛日期转换为 Date 对象

            return {
                title: `${match.opponent_team} vs. ${match.this_score}-${match.opponent_score}`, // 比赛对阵信息
                date: matchDate.toISOString().split('T')[0], // 只取日期部分
                extendedProps: {
                    matchDetails: match
                }
            };
        });

        setMatches(formattedMatches);
    }, []);

    // 处理点击日期事件，显示比赛信息
    const handleDateClick = (arg) => {
        const selectedDate = arg.dateStr;
        const match = matches.find(m => m.date === selectedDate);
        if (match) {
            setSelectedMatch(match.extendedProps.matchDetails);
        }
    };

    return (
        <div className="flex flex-col items-center sm:flex-row sm:space-x-8">
            {/* FullCalendar 组件 */}
            <div className="w-full sm:w-[60%]">
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    events={matches}
                    dateClick={handleDateClick}
                />
a
            </div>

            {/* 如果点击了比赛日期，显示比赛详情 */}
            <div>
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
            </div>

        </div>
    );
}
