import { TextField, Button } from "@mui/material";
import "./add.css";

function Add(props) {
  async function ItemAdd() {
    const userid=  localStorage.getItem("userId");
    if (props.showEdit === "false") {
      await fetch("http://localhost:4000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ desc: props.names , userid:userid}),

        cache: "default",
      }).then(function (response) {
        console.log("add checking");
        console.log(response);
      });
      props.setName("");
      props.setFlag(!props.flag);
    } else {
      await fetch(`http://localhost:4000/notes/${props.index}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ desc: props.names }),

        cache: "default",
      }).then(function (response) {
        console.log(response);
      });

      props.setEdit("false");
      props.setName("");
      props.setFlag(!props.flag);
    }
  }

  return (
    <>
      <div className="adddiv">
        <span>Add Item</span>
        <TextField
          id="item"
          label="Enter item"
          variant="outlined"
          value={props.names}
          autoFocus
          onChange={(event) => props.setName(event.target.value)}
        />
        <Button variant="contained" color="primary" onClick={ItemAdd}>
          {props.showEdit === "false" ? "Add" : "Update"}
        </Button>
      </div>
      <br></br>
      <br></br>
    </>
  );
}

export default Add;
