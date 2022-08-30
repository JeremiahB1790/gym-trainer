import {useState} from "react"

interface CredentialsFormProps{
    type: CredentialFormType
}

type CredentialFormType = "Login" | "Register"

export default function CredentialsForm({type}: CredentialsFormProps){
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


        

   return <>
        <input type="text" placeholder="username" value={username} /> 
        <br></br>
        <input type="password" placeholder="password" value={password}/>
        <br></br>
        <button>{type}</button>
   </>
}