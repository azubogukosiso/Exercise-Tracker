import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { ToastContainer } from "react-toastify";

import Navbar from "./components/NavbarComponent";
import ExercisesList from "./components/ExercisesListComponent";
import EditExercise from "./components/EditExerciseComponent";
import CreateExercise from "./components/CreateExerciseComponent";
import CreateUser from "./components/CreateUserComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        {/* <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
        <Navbar />
        <Routes>
          <Route path="/" exact element={<ExercisesList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
