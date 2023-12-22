import React, { useState, useEffect } from "react";

const Timer = ({ limitTime, setIsGetCertiNum }) => {
  const [time, setTime] = useState(limitTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    // 컴포넌트가 언마운트되면 타이머 해제
    return () => clearInterval(timerInterval);
  }, []);

  // 남은 시간을 'mm:ss' 형식으로 변환하는 함수
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <>
      유효시간
      {time <= 0 ? (
        <>
          <span>
            이 지났습니다. <br />
            인증번호를 다시 발급해주세요
          </span>
          {setIsGetCertiNum(false)}
        </>
      ) : (
        <span> {formatTime(time)}</span>
      )}
    </>
  );
};

export default Timer;
