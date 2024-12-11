import React, { useEffect, useState } from "react";
import News_card from "./News_card.js";
import News_card_total from "./news_card_total.js";


//Link the API Part
import fetch_token from "../apiService/fetch_token.js";
import fetch_injury from "../apiService/news-injury.js";
import fetch_trade from "../apiService/news-trade.js";
import fetch_clubinternal from "../apiService/news-Club_internal.js";
import fetch_Player_idv from "../apiService/news-player_idv.js";
import fetch_Match_result from "../apiService/news-match_result.js";
import fetch_match_plan from "../apiService/news-match_plan.js";
import fetch_Issue from "../apiService/news-Issue.js";
import fetch_Squad from "../apiService/news-Squad.js"
import fetch_Interview from "../apiService/news-Interview.js";


export default function CardExample() {
    const [activeTab, setActiveTab] = useState("club_internal");

    const [selectedTeam, setSelectedTeam] = useState();

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("teamSelect"));
        if (storedData && storedData.selectedTeam) {
            setSelectedTeam(storedData.selectedTeam);
        }
    }, []);


    // Set API information
    const username = "test";
    //const team = selectedTeam; // When ALL api information already done .change team to this one
    //const team = "울산";
    const [token, setToken] = useState('');  //token
    const [Local_token, setLocalToken] = useState(localStorage.getItem('token') || '');
    const [Local_name, setLocalName] = useState(localStorage.getItem('username') || '');
    const [Local_team, setLocalTeam] = useState(localStorage.getItem('team') || '');

    const [tradeData, settradeData] = useState([]);
    const [injuryData, setinjuryData] = useState([]);
    const [club_internal, setclubinternal] = useState([]);
    const [player_idv, setPlayer_idv] = useState([]);
    const [Match_result, setmatch_result] = useState([]);
    const [match_plan, setMatch_plan] = useState([]);
    const [Issue, setIssue] = useState([]);
    const [Squad, setSquad] = useState([]);
    const [Interview, setInterview] = useState([]);

    //Get token
    useEffect(() => {
        const getTokenInfo = async () => {
            if (username !== Local_name || selectedTeam !== Local_team) {
                const fetchedToken = await fetch_token(username, selectedTeam);
                setToken(fetchedToken);
                setLocalToken(fetchedToken);
                setLocalName(username);
                setLocalTeam(selectedTeam);

                localStorage.setItem('token', fetchedToken);
                localStorage.setItem('username', username);
                localStorage.setItem('team', selectedTeam);
            } else {
                setToken(Local_token);   //token value
            }
        };
        getTokenInfo();
    }, [username, selectedTeam, Local_name, Local_team, Local_token]);

    //------------------------------------------------------------------------------------------------------------------------------------------------------
    //to yang_hang : Categry : Injury : 부상  
    useEffect(() => {
        const getInfo = async () => {
            if (token) {
                const fetchedData = await fetch_injury(token);
                setinjuryData(fetchedData);
            }
        };
        getInfo();
    }, [token]);

    //to yang_hang : Categry : Club_internal : 구단 관련
    useEffect(() => {
        const getInfo = async () => {
            if (token) {
                const fetchedData = await fetch_clubinternal(token);
                setclubinternal(fetchedData);
            }
        };
        getInfo();
    }, [token]);


    //to yang_hang : Categry : Player_idv : 선수
    useEffect(() => {
        const getInfo = async () => {
            if (token) {
                const fetchedData = await fetch_Player_idv(token);
                setPlayer_idv(fetchedData);
            }
        };
        getInfo();
    }, [token]);


    //to yang_hang : Categry : Match_result : 경기 결과
    useEffect(() => {
        const getInfo = async () => {
            if (token) {
                const fetchedData = await fetch_Match_result(token);
                setmatch_result(fetchedData);
            }
        };
        getInfo();
    }, [token]);


    //to yang_hang : Categry : Match_plan : 경기 전
    useEffect(() => {
        const getInfo = async () => {
            if (token) {
                const fetchedData = await fetch_match_plan(token);
                setMatch_plan(fetchedData);
            }
        };
        getInfo();
    }, [token]);

    //to yang_hang : Categry : Issue : 논란
    useEffect(() => {
        const getInfo = async () => {
            if (token) {
                const fetchedData = await fetch_Issue(token);
                setIssue(fetchedData);
            }
        };
        getInfo();
    }, [token]);


    //to yang_hang : Categry : Trade : 이적
    useEffect(() => {
        const getInfo = async () => {
            if (token) {
                const fetchedtradeData = await fetch_trade(token);
                settradeData(fetchedtradeData);
            }
        };
        getInfo();
    }, [token]);

    //to yang_hang : Categry : Squad : 선발 라인업
    useEffect(() => {
        const getInfo = async () => {
            if (token) {
                const fetchedData = await fetch_Squad(token);
                setSquad(fetchedData);
            }
        };
        getInfo();
    }, [token]);


    //to yang_hang : Categry : Interview : 인터뷰
    useEffect(() => {
        const getInfo = async () => {
            if (token) {
                const fetchedData = await fetch_Interview(token);
                setInterview(fetchedData);
            }
        };
        getInfo();
    }, [token]);



    return (
        <div>

            <div className="tabs-container flex overflow-x-auto sm:overflow-visible">
                <nav
                    className="tabs tabs-bordered"
                    aria-label="Tabs"
                    role="tablist"
                    aria-orientation="horizontal"
                >
                    <button
                        type="button"
                        className={`tab w-full whitespace-nowrap ${activeTab === "club_internal" ? "tab-active" : ""}`}
                        id="tabs-basic-filled-item-1"
                        role="tab"
                        aria-selected={activeTab === "club_internal"}
                        onClick={() => setActiveTab("club_internal")}
                    >
                        구단
                    </button>
                    <button
                        type="button"
                        className={`tab w-full whitespace-nowrap ${activeTab === "player_idv" ? "tab-active" : ""}`}
                        id="tabs-basic-filled-item-2"
                        role="tab"
                        aria-selected={activeTab === "player_idv"}
                        onClick={() => setActiveTab("player_idv")}
                    >
                        선수 개인
                    </button>
                    <button
                        type="button"
                        className={`tab w-full whitespace-nowrap ${activeTab === "Match_result" ? "tab-active" : ""}`}
                        id="tabs-basic-filled-item-3"
                        role="tab"
                        aria-selected={activeTab === "Match_result"}
                        onClick={() => setActiveTab("Match_result")}
                    >
                        경기 후
                    </button>
                    <button
                        type="button"
                        className={`tab w-full whitespace-nowrap ${activeTab === "match_plan" ? "tab-active" : ""}`}
                        id="tabs-basic-filled-item-1"
                        role="tab"
                        aria-selected={activeTab === "match_plan"}
                        onClick={() => setActiveTab("match_plan")}
                    >
                        경기 전
                    </button>
                    <button
                        type="button"
                        className={`tab w-full whitespace-nowrap ${activeTab === "Issue" ? "tab-active" : ""}`}
                        id="tabs-basic-filled-item-1"
                        role="tab"
                        aria-selected={activeTab === "Issue"}
                        onClick={() => setActiveTab("Issue")}
                    >
                        논란
                    </button>
                    <button
                        type="button"
                        className={`tab w-full whitespace-nowrap ${activeTab === "tradeData" ? "tab-active" : ""}`}
                        id="tabs-basic-filled-item-1"
                        role="tab"
                        aria-selected={activeTab === "tradeData"}
                        onClick={() => setActiveTab("tradeData")}
                    >
                        이적
                    </button>
                    <button
                        type="button"
                        className={`tab w-full whitespace-nowrap ${activeTab === "Squad" ? "tab-active" : ""}`}
                        id="tabs-basic-filled-item-1"
                        role="tab"
                        aria-selected={activeTab === "Squad"}
                        onClick={() => setActiveTab("Squad")}
                    >
                        선발
                    </button>
                    <button
                        type="button"
                        className={`tab w-full whitespace-nowrap ${activeTab === "Interview" ? "tab-active" : ""}`}
                        id="tabs-basic-filled-item-1"
                        role="tab"
                        aria-selected={activeTab === "Interview"}
                        onClick={() => setActiveTab("Interview")}
                    >
                        인터뷰
                    </button>


                </nav>
            </div>





            <div className="mt-3">
                {activeTab === "club_internal" && (
                    <div id="tabs-basic-filled-1" role="tabpanel" aria-labelledby="tabs-basic-filled-item-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
                            {club_internal.length > 0 ? (
                                club_internal.map((item, index) => (
                                    <News_card
                                        key={index}
                                        title={item.headline}
                                        describe={item.contents}
                                        url={item.url}
                                    />
                                ))
                            ) : (
                                <p>Loading...</p>
                            )}

                        </div>
                    </div>
                )}
                {activeTab === "player_idv" && (
                    <div id="tabs-basic-filled-2" role="tabpanel" aria-labelledby="tabs-basic-filled-item-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
                            {player_idv && player_idv.length > 0 ? (
                                player_idv.map((item, index) => (
                                    <News_card
                                        key={index}
                                        title={item.headline}
                                        describe={item.contents}
                                        url={item.url}
                                    />
                                ))
                            ) : (
                                <p>Loading...</p>
                            )}

                        </div>
                    </div>
                )}
                {activeTab === "Match_result" && (
                    <div id="tabs-basic-filled-2" role="tabpanel" aria-labelledby="tabs-basic-filled-item-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
                            {Match_result && Match_result.length > 0 ? (
                                Match_result.map((item, index) => (
                                    <News_card
                                        key={index}
                                        title={item.headline}
                                        describe={item.contents}
                                        url={item.url}
                                    />
                                ))
                            ) : (
                                <p>Loading...</p>
                            )}

                        </div>
                    </div>
                )}
                {activeTab === "match_plan" && (
                    <div id="tabs-basic-filled-2" role="tabpanel" aria-labelledby="tabs-basic-filled-item-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
                            {match_plan && match_plan.length > 0 ? (
                                match_plan.map((item, index) => (
                                    <News_card
                                        key={index}
                                        title={item.headline}
                                        describe={item.contents}
                                        url={item.url}
                                    />
                                ))
                            ) : (
                                <p>Loading...</p>
                            )}

                        </div>
                    </div>
                )}
                {activeTab === "Issue" && (
                    <div id="tabs-basic-filled-2" role="tabpanel" aria-labelledby="tabs-basic-filled-item-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
                            {Issue && Issue.length > 0 ? (
                                Issue.map((item, index) => (
                                    <News_card
                                        key={index}
                                        title={item.headline}
                                        describe={item.contents}
                                        url={item.url}
                                    />
                                ))
                            ) : (
                                <p>Loading...</p>
                            )}

                        </div>
                    </div>
                )}
                {activeTab === "tradeData" && (
                    <div id="tabs-basic-filled-2" role="tabpanel" aria-labelledby="tabs-basic-filled-item-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
                            {tradeData && tradeData.length > 0 ? (
                                tradeData.map((item, index) => (
                                    <News_card
                                        key={index}
                                        title={item.headline}
                                        describe={item.contents}
                                        url={item.url}
                                    />
                                ))
                            ) : (
                                <p>Loading...</p>
                            )}

                        </div>
                    </div>
                )}
                {activeTab === "Squad" && (
                    <div id="tabs-basic-filled-2" role="tabpanel" aria-labelledby="tabs-basic-filled-item-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
                            {Squad && Squad.length > 0 ? (
                                Squad.map((item, index) => (
                                    <News_card
                                        key={index}
                                        title={item.headline}
                                        describe={item.contents}
                                        url={item.url}
                                    />
                                ))
                            ) : (
                                <p>Loading...</p>
                            )}

                        </div>
                    </div>
                )}
                {activeTab === "Interview" && (
                    <div id="tabs-basic-filled-2" role="tabpanel" aria-labelledby="tabs-basic-filled-item-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
                            {Interview && Interview.length > 0 ? (
                                Interview.map((item, index) => (
                                    <News_card
                                        key={index}
                                        title={item.headline}
                                        describe={item.contents}
                                        url={item.url}
                                    />
                                ))
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
