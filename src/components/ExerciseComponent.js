import React from "react";
import { NavLink } from "react-router-dom";

const ExerciseComponent = (props) => {
  const timeConv = (timeInMinutes) => {
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;

    if (hours > 1) {
      if (minutes > 1) {
        return `${hours} hours and ${minutes} minutes`;
      } else if (minutes === 1) {
        return `${hours} hours and ${minutes} minute`;
      } else if (minutes < 1) {
        return `${hours} hours`;
      }
    } else if (hours === 1) {
      if (minutes > 1) {
        return `${hours} hour and ${minutes} minutes`;
      } else if (minutes === 1) {
        return `${hours} hour and ${minutes} minute`;
      } else if (minutes < 1) {
        return `${hours} hour`;
      }
    } else if (hours < 1) {
      if (minutes > 1) {
        return `${minutes} minutes`;
      } else if (minutes === 1) {
        return `${minutes} minute`;
      }
    }
  };

  return (
    <div className="mb-5 px-3 py-3 rounded bg-light shadow-sm">
      <div className="d-flex justify-content-between">
        <div>
          <h2 className="mb-0">{props.description}</h2>
          <h6 className="mb-0">
            for {timeConv(props.duration)}, on{" "}
            {new Date(props.date).toDateString()}
          </h6>
          <i>- {props.username}</i>
        </div>
        <div className="d-flex align-items-center">
          <NavLink to={"/edit/" + props.id} className="btn btn-success">
            edit
          </NavLink>
          <span className="mx-2"></span>
          <NavLink
            onClick={() => props.deleteExercise(props.id)}
            className="btn btn-danger"
          >
            delete
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ExerciseComponent;
