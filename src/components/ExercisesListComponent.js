import { useState, useEffect } from "react";
import axios from "axios";
import ExerciseComponent from "./ExerciseComponent";

const ExercisesListComponent = () => {

    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}exercises/`)
            .then(response => {
                if (response.data.length > 0) {
                    setExercises(response.data.map(exercise => exercise));
                } else {
                    console.log("No exercises");
                }
            })
    }, [])

    const deleteExercise = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}exercises/` + id)
            .then(res => console.log(res.data));

        setExercises(exercises.filter(el => el._id !== id));
    }



    return (
        <div className="mt-4">
            <h3>Exercise List</h3>
            {
                exercises.map(exercise => {
                    return (
                        <ExerciseComponent
                            key={exercise._id}
                            id={exercise._id}
                            username={exercise.username}
                            description={exercise.description}
                            duration={exercise.duration}
                            date={exercise.date}
                            deleteExercise={deleteExercise} />
                    );
                })
            }
        </div>
    );
};

export default ExercisesListComponent;
