import {Routes as DOMRoutes, Route} from "react-router-dom"
import ExercisePage from "../pages/ExercisePage"
import AuthPage from "../pages/AuthPage"
import HomePage from "../pages/HomePage"
import {AppUser} from "../App"

interface RoutesProps{
  appUser: AppUser | null;
  setAppUser: Function;
}

export default function Routes({appUser, setAppUser}: RoutesProps){


    return <DOMRoutes>
    <Route path="/" element={
        <>
        { appUser && <HomePage />}
        {!appUser && <AuthPage appUser={appUser} setAppUser={setAppUser}/>}
      </>
    }/>
    <Route path="/exercises" element={<ExercisePage />}/>
  </DOMRoutes>
}