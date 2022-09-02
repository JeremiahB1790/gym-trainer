import { AppUser } from "../App";
import CredentialsForm from "../components/CredentialsForm";
import "./AuthPage.css"

interface AuthPageProps{
    appUser: AppUser | null;
    setAppUser: Function;
}

export default function AuthPage({appUser, setAppUser}: AuthPageProps){
    return <div className="centered">
            <CredentialsForm type="Login" appUser={appUser}  setAppUser={setAppUser}/>
        </div>
}