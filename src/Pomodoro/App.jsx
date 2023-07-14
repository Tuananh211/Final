import React, { useState, useEffect } from "react";
import "./App.css";
import { AiOutlineUndo, AiOutlinePause } from "react-icons/ai";
import { FaPause, FaUndo } from "react-icons/fa";
import Timer from "./Time/Timer";
function Pomodoro() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mode, setMode] = useState("Working");
  const [time, setTime] = useState(10);
  const [breakTime, setBreakTime] = useState(5);
  const [countTime, setCountTime] = useState(0);
  const [active, setActive] = useState(false);
  // Đếm lùi thời gian
  useEffect(() => {
    let timer = null;
    if (active) {
      timer = setInterval(() => {
        if (mode === "Working" && countTime === 0) {
          setMode("Break");
          setCountTime(breakTime);
        } else if (mode === "Break" && countTime === 0) {
          setMode("Working");
          setCountTime(time);
        } else {
          setCountTime((prevCountTime) => prevCountTime - 1);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [countTime, active, mode, time, breakTime]);
  // Cập nhật thời gian hiện tại
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // //Hàm chuyển đổi thời gian
  // function formatTime(totalSeconds) {
  //   const hours = Math.floor(totalSeconds / 3600); // Tính số giờ (3600 giây trong một giờ)
  //   const minutes = Math.floor((totalSeconds % 3600) / 60); // Tính số phút (60 giây trong một phút)
  //   const seconds = totalSeconds % 60; // Tính số giây

  //   const formattedHours = hours.toString().padStart(2, "0"); // Định dạng giờ với 2 chữ số
  //   const formattedMinutes = minutes.toString().padStart(2, "0"); // Định dạng phút với 2 chữ số
  //   const formattedSeconds = seconds.toString().padStart(2, "0"); // Định dạng giây với 2 chữ số

  //   return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`; // Trả về chuỗi giờ:phút:giây
  // }

  const handleStart = () => {
    if (time === 0) {
      setTime(10);
    }
    setCountTime(time)
    setActive(true);
    setMode("Working");
  };


  

  const handlePause = () => {
    setActive(false);
  };

  const handleReload = () => {
    setTime(10);
    setBreakTime(5);
    setCountTime(time);
    setMode("Working");
    
  };
  const handleSetWorkTime = (e) => {
    const workTime = parseInt(e.target.value);
    if(workTime !== null && workTime >0){
    setTime(workTime);
    setCountTime(workTime)
    setMode("Working");
    console.log(workTime);
    }
    else{
      setTime(10);
      setBreakTime(5);
      setCountTime(time);
      setMode("Working");
    }
  };
  const handleSetBreakTime = (e) => {
    const breakTime = parseInt(e.target.value);
    if(breakTime !== null && breakTime >0){
    setBreakTime(breakTime);
    }
    else setBreakTime(5)
  };

  return (
    <>
      <div className="contain">
        <h1 className="poroTilte">Poromodo Clock</h1>
        <div className={`clock ${active && mode == "Working" ? "action" : ""}`}>
          <div className="title">{mode}</div>
          <div className="curenttime">{currentTime.toLocaleTimeString()}</div>
          <Timer
            settimer={countTime}
            // settimer={mode == "Working" ? time : breakTime}
          ></Timer>
          {/* <div className="timer">{formatTime(time)}</div> */}
          <div className="row1">
            <button className="actionbtn" onClick={handleStart}>
              Start
            </button>
            <button className="actionbtn" onClick={handlePause}>
              <FaPause />
            </button>
            <button className="actionbtn" onClick={handleReload}>
              <FaUndo className="actionIcon" />
            </button>
          </div>

          <div className="setTimer">
            <div className="row1 set">
              <label className="setTimeLabel">Set Work Time</label>
              <input
                type="number"
                // placeholder="Set Time for Work"
                className="setWorktime"
                onChange={(e) => handleSetWorkTime(e)}
              ></input>
            </div>
            <div className="row1 set">
              <label className="setTimeLabel">Set Break Time</label>
              <input
                type="number"
                className="setBreakTime"
                // placeholder="Set Time for Break"
                onChange={(e) => handleSetBreakTime(e)}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pomodoro;
