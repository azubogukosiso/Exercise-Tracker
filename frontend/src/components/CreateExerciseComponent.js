import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateExerciseComponent = () => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}users/`).then((response) => {
      if (response.data.length > 0) {
        setUsers(response.data.map((user) => user.username));
        setUsername(response.data[0].username);
      } else {
        console.log("No users");
      }
    });
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      startDate,
    };
    console.log(exercise);

    axios
      .post(`${process.env.REACT_APP_API_URL}exercises/add`, exercise)
      .then((res) => console.log(res.data));

    window.location = "/";
  };

  return (
    <div className="mt-4">
      <h3>Create New Exercise</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group mb-3">
          <label>Username: </label>
          <select
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          >
            {users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group mb-3">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            required
            className="form-control"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={Date.parse(startDate)}
              onChange={(startDate) => setStartDate(startDate)}
              minDate={new Date()}
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            className="btn btn-success"
            value="Create Exercise"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateExerciseComponent;
