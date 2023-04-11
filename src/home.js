import { useState } from "react";
import { Booking } from "./booking";
import "./styles.css";
import { Video } from "./video";

function isAfterDate(dateString) {
  const currentDate = new Date();
  const targetDate = new Date(dateString);

  return currentDate > targetDate;
}

export const Home = () => {
  const [playing, setPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const isAfter = isAfterDate("2023-04-28");

  return (
    <div className="App">
      {(videoEnded || isAfter) && <Booking />}

      {!videoEnded && (
        <div>
          {!playing && (
            <div style={{ padding: "20px" }}>
              <h1>
                Hi Miranda{" "}
                <span role="img" aria-label="heart">
                  💕
                </span>{" "}
              </h1>
              <p>
                Today is your birthday how great is that... to see your birthday
                present you need to wear your earbuds. Once you have them on
                press the button.
              </p>

              <button onClick={() => setPlaying(true)}>Ready</button>
            </div>
          )}
          <Video
            playing={playing}
            onEnded={() => {
              setVideoEnded(true);
            }}
          />
        </div>
      )}
    </div>
  );
};
