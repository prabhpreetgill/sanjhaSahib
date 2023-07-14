import React, { useState } from "react";
import '../Components/count.css'

export default function Clock() {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;


    
    const [dayy, setDayy] = useState(0);
    const [hourr, setHourr] = useState(0);
    const [minn, setMinn] = useState(0);
    const [secc, setSecc] = useState(0);



    (function () {
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "11/29/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
            setDayy(Math.floor(distance / (day)));
            setHourr(Math.floor((distance % (day)) / (hour)));
            setMinn(Math.floor((distance % (hour)) / (minute)));
            setSecc(Math.floor((distance % (minute)) / second));
  
          //seconds
        }, 0)
        }());

        return(
            <div class="container">
            <div id="countdown">
            <ul>
            <li><span id="days">{dayy}</span>days</li>
            <li><span id="hours">{hourr}</span>Hours</li>
            <li><span id="minutes">{minn}</span>Minutes</li>
            <li><span id="seconds">{secc}</span>Seconds</li>
            </ul>
            </div>
        </div>
        )
    };

