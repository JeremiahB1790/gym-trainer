import { useState, useEffect } from "react"
import Exercise from "../components/Exercise";

export interface ExerciseData{
    id: number;
    name: string;
    exercise_base: number;
    description: string;
    category: number;

    muscles: Array<number>;
    muscles_secondary: Array<number>;
    equipment: Array<number>;
    variations: Array<number>;
}

const tempExercises: Array<ExerciseData> = [
    {
        "id": 345,
        "name": "2 Handed Kettlebell Swing",
        "exercise_base": 9,
        "description": "<p>Two Handed Russian Style Kettlebell swing</p>",
        "category": 10,
        "muscles": [],
        "muscles_secondary": [],
        "equipment": [
            10
        ],
        "variations": []
    },
    {
        "id": 227,
        "name": "Arnold Shoulder Press",
        "exercise_base": 20,
        "description": "<p>Very common shoulder exercise.</p>\n<p> </p>\n<p>As shown here: https://www.youtube.com/watch?v=vj2w851ZHRM</p>",
        "category": 13,
        "muscles": [],
        "muscles_secondary": [],
        "equipment": [
            3
        ],
        "variations": [
            227,
            329,
            229,
            190,
            119,
            123,
            152,
            155
        ]
    },
    {
        "id": 289,

        "name": "Axe Hold",
        "exercise_base": 31,
        "description": "<p>Grab dumbbells and extend arms to side and hold as long as you can</p>",
        "category": 8,
        "muscles": [],
        "muscles_secondary": [],
        "equipment": [
            3
        ],
        "variations": []
    }
]

export default function ExercisePage(){

    const [exercises, setExercises] = useState<Array<ExerciseData> | null>(null)


    useEffect(pageLoad, [])

    function pageLoad(){
        // fetch and bind data
    }

    // TODO: Fetch the data from the api: https://wger.de/api/v2/exercise?language=2



    return !exercises ? 
    
         <LoadingBar /> :
         <>
            {exercises.map((exercise: ExerciseData) => <Exercise exercise={exercise}/>)}
         </>
        
}


function LoadingBar(){
    // TODO: replace with an actual loading bar
    return <h1>Loading...</h1>
}