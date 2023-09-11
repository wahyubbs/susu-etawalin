"use client";

import { useState } from "react";
import Countdown from "react-countdown";

function CountdownAlert() {
  const [date, setDate] = useState(Date.now() + 36000000);
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      setDate(Date.now() + 36000000);
      return <></>;
    } else {
      return (
        <div className="countdown-bbs">
          <div>
            <span>{days}</span>
            <p>Hari</p>
          </div>

          <div>
            <span>{hours}</span>
            <p>Jam</p>
          </div>

          <div>
            <span>{minutes}</span>
            <p>Menit</p>
          </div>

          <div>
            <span>{seconds}</span>
            <p>Detik</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="countdown-container-bbs">
      <h1>SISA WAKTU PROMO !!!!</h1>
      <Countdown overtime={true} date={date} renderer={renderer} />
    </div>
  );
}

export default CountdownAlert;
