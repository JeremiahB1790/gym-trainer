import {useState, useEffect} from "react"

// <HelloWorld key="value" name="props" location="React"/>
    //     {/*    HelloWorld({key="value", name="props", location="React"}) */}
    // <HelloWorld name="Douglas" location="Brandon" showLocation={true}/>
    // <HelloWorld name="Alejandro" location="!Brandon"/>

    // <Landing loggedIn={userLoggedIn}/>
//    props (properties) are arguments that can be passed to components to affect how 
//    they're rendered

// conditional rendering -> you will render something based on a condition
function HelloWorld(props:any){
    return <h1>Hello {props.name} from {props.showLocation && props.location}</h1>
  }
  
  
  //  ternary -> return condition ? truthy : falsy
  function Landing({loggedIn}:any){
    return (
        loggedIn ? 
          <Dashboard/> : 
          <Login />
      );
  }
  
  function Login(){
    return <h1>Login page</h1>
  }
  
  function Dashboard(){
    return <h1>Dashboard</h1>
  }


  const [x, setX] = useState<number>(0);
        const [y, setY] = useState<number>(0);


        // useEffect(callback, *dependency array)
        //      use effect allows us to declare state variables the when changed, triggers the callback
        //      the effect of having NO dependency array, means you're dependent on EVERYTHING
        //      the effect of having an EMPTY dependency array, means you're dependent on NOTHING except PAGE LOAD
        //     
        
        // const func = () => console.log("username")
        // useEffect(() => console.log("password"), [password]);
        // useEffect(() => console.log("username + password"), [username, password]);