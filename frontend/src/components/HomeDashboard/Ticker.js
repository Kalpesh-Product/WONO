import React, { useEffect } from "react";
import "../../layout/DashboardStyle/Ticker.css";

const Ticker = () => {
  //   useEffect(() => {
  //     const second = 1000,
  //       minute = second * 60,
  //       hour = minute * 60,
  //       day = hour * 24;

  //     // I'm adding this section so I don't have to keep updating this pen every year :-)
  //     // remove this if you don't need it
  //     let today = new Date(),
  //       dd = String(today.getDate()).padStart(2, "0"),
  //       mm = String(today.getMonth() + 1).padStart(2, "0"),
  //       yyyy = today.getFullYear(),
  //       nextYear = yyyy + 1,
  //       dayMonth = "09/30/",
  //       birthday = dayMonth + yyyy;

  //     today = mm + "/" + dd + "/" + yyyy;
  //     if (today > birthday) {
  //       birthday = dayMonth + nextYear;
  //     }
  //     // end

  //     const countDown = new Date(birthday).getTime();
  //     const x = setInterval(function () {
  //       const now = new Date().getTime();
  //       const distance = countDown - now;

  //       document.getElementById("days").innerText = Math.floor(distance / day);
  //       document.getElementById("hours").innerText = Math.floor(
  //         (distance % day) / hour
  //       );
  //       document.getElementById("minutes").innerText = Math.floor(
  //         (distance % hour) / minute
  //       );
  //       document.getElementById("seconds").innerText = Math.floor(
  //         (distance % minute) / second
  //       );

  //       // do something later when date is reached
  //       if (distance < 0) {
  //         document.getElementById("headline").innerText =
  //           "You're account is created!";
  //         document.getElementById("countdown").style.display = "none";
  //         document.getElementById("content").style.display = "block";
  //         clearInterval(x);
  //       }
  //       // seconds
  //     }, 1000);

  //     return () => clearInterval(x); // Cleanup interval on component unmount
  //   }, []);

  useEffect(() => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    // Set the countdown to 2 days from now
    const now = new Date().getTime();
    const countDown = now + 2 * day;

    const x = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / day);
      document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      );
      document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      );
      document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      );

      // do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText =
          "Your account is created!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      // seconds
    }, 1000);

    return () => clearInterval(x); // Cleanup interval on component unmount
  }, []);

  return (
    // <div className="container">
    //   <h1 id="headline">Countdown to my birthday</h1>
    //   <div id="countdown">
    //     <ul>
    //       <li>
    //         <span id="days"></span>days
    //       </li>
    //       <li>
    //         <span id="hours"></span>Hours
    //       </li>
    //       <li>
    //         <span id="minutes"></span>Minutes
    //       </li>
    //       <li>
    //         <span id="seconds"></span>Seconds
    //       </li>
    //     </ul>
    //   </div>
    //   <div id="content" className="emoji">
    //     <span role="img" aria-label="party">
    //       🥳
    //     </span>
    //     <span role="img" aria-label="celebrate">
    //       🎉
    //     </span>
    //     <span role="img" aria-label="cake">
    //       🎂
    //     </span>
    //   </div>
    // </div>

    <div class="tickerContainer tickerPadding sidePadding  h-100 d-flex justify-content-center align-items-center">
      <div className="my-auto ">
        <h1 className="headlineFont" id="headline">
          Countdown To Setting Up Your Account
        </h1>
        <div id="countdown">
          <div class="time-unit">
            <span id="days"></span> days
          </div>
          <div class="time-unit">
            <span id="hours"></span> Hours
          </div>
          <div class="time-unit">
            <span id="minutes"></span> Minutes
          </div>
          <div class="time-unit">
            <span id="seconds"></span> Seconds
          </div>
        </div>
        <div id="content" class="emoji">
          <span>🥳</span>
          <span>🎉</span>
          <span>🎂</span>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
