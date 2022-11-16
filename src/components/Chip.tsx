import { faClock, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faCircleNotch,
  faCloudShowersHeavy,
} from "@fortawesome/free-solid-svg-icons";
import { faDash } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

enum STATE {
  "LOADING",
  "SUCCESS",
}

const WaitingForInput = () => (
  <div className="text-xs flex gap-2 items-center text-gray-700 bg-gray-100 px-3 py-1 rounded-full self-center">
    <FontAwesomeIcon icon={faClock} />
    <p>Waiting for input</p>
  </div>
);

const Loading = () => (
  <div className="text-xs flex gap-2 items-center text-green-700 bg-green-100 px-3 py-1 rounded-full self-center">
    <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
    <p>Analyzing...</p>
  </div>
);

const Positive = ({ score }: { score: number }) => (
  <div className="text-xs flex gap-2 items-center text-rose-700 bg-rose-100 px-3 py-1 rounded-full self-center">
    <FontAwesomeIcon icon={faHeart} />
    <p className="flex gap-2 items-center">
      Positive <FontAwesomeIcon icon={faArrowRight} className="text-xs" />{" "}
      {score.toFixed(2)}
    </p>
  </div>
);

const Negative = ({ score }: { score: number }) => (
  <div className="text-xs flex gap-2 items-center text-gray-700 bg-gray-100 px-3 py-1 rounded-full self-center">
    <FontAwesomeIcon icon={faCloudShowersHeavy} />
    <p className="flex gap-2 items-center">
      Negative <FontAwesomeIcon icon={faArrowRight} className="text-xs" />{" "}
      {score.toFixed(2)}
    </p>
  </div>
);

const Neutral = () => (
  <div className="text-xs flex gap-2 items-center text-gray-700 bg-gray-100 px-3 py-1 rounded-full self-center">
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
