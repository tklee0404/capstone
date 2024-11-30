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

  
  const [token, setLocalToken] = useState(localStorage.getItem('token') || '');
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
   <div class="w-full overflow-x-auto">
  <table class="table-striped-columns table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-nowrap">John Doe</td>
        <td>johndoe@example.com</td>
        <td><span class="badge badge-soft badge-success text-xs">Professional</span></td>
        
      </tr>
     
    </tbody>
  </table>
</div>
  );
}
