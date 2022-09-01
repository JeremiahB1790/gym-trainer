import {Routes as DOMRoutes, Route} from "react-router-dom"
import ExercisePage from "../pages/ExercisePage"
import CredentialsForm from "./CredentialsForm"

export default function Routes(){
    return <DOMRoutes>
    <Route path="/" element={<CredentialsForm type="Login"/>}/>
    <Route path="/exercises" element={<ExercisePage />}/>
  </DOMRoutes>
}