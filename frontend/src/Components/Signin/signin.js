import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signin(props) {
  const navigate = useNavigate();
  const [names, setName] = useState();
  const [password, setPassword] = useState();
 async  function redirectToTodo() {
    await fetch("http://localhost:4000/users/findUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: names , password:password}),

        cache: "default",
      }).then(async function (response) {
        console.log("login checking");
        console.log(response);
        const da = await response.json();
        if(da.length===0){
          alert("wrong username or password");
        }
        else{
          localStorage.setItem("auth", true);
          localStorage.setItem("userId", da[0].id);
          console.log("hi i am above userid");
          console.log(da[0].id);
          navigate("/layout");
        }
      });

  }

  return (
    <div style={{ padding: "10em", border: "solid black 3px", margin: "10em" }}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />
      <br></br>
      <br></br>
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        onChange={(event) => setPassword(event.target.value)}
      />
      <br></br>
      <br></br>
      <Button variant="contained" onClick={redirectToTodo}>
        Sign in
      </Button>
    </div>
  );
}

export default Signin;
