import { useState } from "react";
import axios from "axios";

const CreateUserComponent = () => {
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const user = {
      username,
    };

    axios.post(`${process.env.REACT_APP_API_URL}users/add`, user)
      .then((res) => {
        setMsg(res.data);
        setUsername("");
      });
  };

  return (
    <div className="mt-4">
      <h3>Create New User</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group mb-3">
          <label>Username</label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>{msg}</p>
        </div>

        <div className="form-group">
          <input
            type="submit"
            className="btn btn-success"
            value="Create User"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUserComponent;
