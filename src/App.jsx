import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";



const ClockApp = () => {
  return (
    <div className="clock-container">
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </div>
  );
};

export default ClockApp;
