import {useState} from "react"
import { AppUser } from "../App"

interface CredentialsFormProps{
    appUser: AppUser | null;
    type: CredentialFormType;
    setAppUser: Function;
}

type CredentialFormType = "Login" | "Register"

export default function CredentialsForm({type, appUser, setAppUser}: CredentialsFormProps){
        // State
        //      the state of a component is a self contained representation of its
        //      its currently held values
        //  these are not state variable
        //      let username: string;
        //      let password: string;

        //  when state variables are properly changed in react, they trigger reconcilliation
        //  state management in function components are managed through Hooks
        //      they almost always follow the format    useNameOfHook -> useState()

        //      const [username, setUsername] = useState("")
        //      useState returns an array of two elements
        //      [stateVariable, functionToUpdateTheState]
        //      useState gets passed an argument of the initial value


        const [username, setUsername] = useState<string>("")
        const [password, setPassword] = useState<string>("")



        function submit(){
            const user: AppUser = {
                username: username,
                password: password
            }
            // TODO: call the API to log them in -> return a token
            //      lift the state of appUser back up to our App component
            setAppUser(user);
        }
        

   return <>
        <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/> 
        <br></br>
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br></br>
        <button onClick={submit}>{type}</button>
   </>
}