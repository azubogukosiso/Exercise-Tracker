import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/NavbarComponent";
import ExercisesList from "./components/ExercisesListComponent";
import EditExercise from "./components/EditExerciseComponent";
import CreateExercise from "./components/CreateExerciseComponent";
import CreateUser from "./components/CreateUserComponent";
import Footer from "./components/FooterComponent";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<ExercisesList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
