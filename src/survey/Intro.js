import logo from "./img/logo.png";

import intro from "./img/intro.png";
import "./css/Intro.css";
import { Link, Route, Switch } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div className="full">
        <img className="intro" src={intro} alt="intro" />

        <Link to="/surveyStart">
          <button className="start">μμνκΈ°</button>
        </Link>
      </div>
    </>
  );
};

export default Intro;
