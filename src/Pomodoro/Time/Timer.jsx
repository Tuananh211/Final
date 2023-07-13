import React from "react";

 // Hàm chuyển đổi thời gian
 function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600); // Tính số giờ (3600 giây trong một giờ)
    const minutes = Math.floor((totalSeconds % 3600) / 60); // Tính số phút (60 giây trong một phút)
    const seconds = totalSeconds % 60; // Tính số giây

    const formattedHours = hours.toString().padStart(2, "0"); // Định dạng giờ với 2 chữ số
    const formattedMinutes = minutes.toString().padStart(2, "0"); // Định dạng phút với 2 chữ số
    const formattedSeconds = seconds.toString().padStart(2, "0"); // Định dạng giây với 2 chữ số

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`; // Trả về chuỗi giờ:phút:giây
  }
function Timer ({settimer}){
    return (
        <div className="timer">{formatTime(settimer)}</div>
    );
}
export default Timer;