import Countdown from "react-countdown";
import booking from "./booking.jpeg";
import flightTo from "./flightTo.jpeg";
import flightBack from "./flightBack.jpeg";
import checkIn from "./check-in-out.jpeg";
import { useNavigate } from "react-router-dom";

export const Booking = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        width="100%"
        alt="vacation"
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/71185955.jpg?k=90a5403e66858c9aeaa3d6c65e6a057206f740cdbe4bf7fd2f1bbc6636613de8&o=&hp=1"
      />
      <div className="page-container">
        <h2>Upcoming Trip in</h2>
        <h4>
          <Countdown
            date={"2023-05-22"}
            renderer={({ _, days, hours, minutes, seconds }) => (
              <div
                style={{
                  display: "flex",

                  justifyContent: "space-evenly",
                }}
              >
                <div className="border-box">
                  <div>{days}</div> Days
                </div>
                <div className="border-box">
                  <div>{hours}</div> Hours
                </div>
                <div className="border-box">
                  <div>{minutes}</div> Minutes
                </div>
                <div className="border-box">
                  <div>{seconds}</div> seconds
                </div>
              </div>
            )}
          />
        </h4>
        <img width="100%" src={booking} alt="booking" />

        <img width="100%" src={checkIn} alt="checkIn" />
        <img width="100%" src={flightTo} alt="flightTo" />
        <img width="100%" src={flightBack} alt="flightBack" />
        <a onClick={() => navigate("/checklist")}>Checklist</a>
      </div>
    </div>
  );
};
