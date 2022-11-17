import { faClock, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faCircleNotch,
  faCloudShowersHeavy,
} from "@fortawesome/free-solid-svg-icons";
import { faDash } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const classes =
  "px-3 py-1 rounded-full self-center text-xs flex gap-2 items-center";

const WaitingForInput = () => (
  <div className={`${classes} bg-gray-100 text-gray-700`}>
    <FontAwesomeIcon icon={faClock} />
    <p>Waiting for input</p>
  </div>
);

const Loading = () => (
  <div className={`${classes} bg-green-100 text-green-700`}>
    <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
    <p>Analyzing...</p>
  </div>
);

const Positive = ({ score }: { score: number }) => (
  <div className={`${classes} bg-green-100 text-green-700`}>
    <FontAwesomeIcon icon={faHeart} />
    <p className="flex items-center gap-2">
      Positive <FontAwesomeIcon icon={faArrowRight} className="text-xs" />{" "}
      {score.toFixed(2)}
    </p>
  </div>
);

const Negative = ({ score }: { score: number }) => (
  <div className={`${classes} bg-rose-100 text-rose-700`}>
    <FontAwesomeIcon icon={faCloudShowersHeavy} />
    <p className="flex items-center gap-2">
      Negative <FontAwesomeIcon icon={faArrowRight} className="text-xs" />{" "}
      {score.toFixed(2)}
    </p>
  </div>
);

const Neutral = () => (
  <div className={`${classes} bg-gray-100 text-gray-700`}>
    <FontAwesomeIcon icon={faDash} />
    <p>Neutral</p>
  </div>
);

const Chip = ({ state, sentiment }) => {
  switch (state) {
    case "loading":
      return <Loading />;
    case "success":
      if (sentiment.document.label === "neutral") {
        return <Neutral />;
      } else if (sentiment.document.label === "positive") {
        return <Positive score={sentiment.document.score} />;
      } else {
        return <Negative score={sentiment.document.score} />;
      }

    default:
      return <WaitingForInput />;
  }
};

export default Chip;
