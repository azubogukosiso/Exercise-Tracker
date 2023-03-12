import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditExerciseComponent = () => {
  const { id } = useParams();
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}exercises/` + id).then((response) => {
      setUsername(response.data.username);
      setDescription(response.data.description);
      setDuration(response.data.duration);
      setDate(new Date(response.data.date));
    }, []);

    axios.get(`${process.env.REACT_APP_API_URL}users/`).then((response) => {
      if (response.data.length > 0) {
        setUsers(response.data.map((user) => user.username));
      }
    });
  }, [id]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date,
    };
    console.log(exercise);

    axios
      .post(`${process.env.REACT_APP_API_URL}exercises/update/` + id, exercise)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = "/";
  };

  return (
    <div className="mt-4">
      <h3>Edit Exercise</h3>
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
              selected={Date.parse(date)}
              onChange={(date) => setDate(date)}
              minDate={new Date()}
              role="button"
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            className="btn btn-success"
            value="Edit Exercise"
          />
        </div>
      </form>
    </div>
  );
};

export default EditExerciseComponent;
