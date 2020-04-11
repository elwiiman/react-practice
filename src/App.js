import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Space from "./components/Space";

function App() {
  //spaces in local storage
  let spacesInitial = JSON.parse(localStorage.getItem("spaces"));
  if (!spacesInitial) {
    spacesInitial = [];
  }
  // state for spaces
  const [spaces, setSpaces] = useState(spacesInitial);

  //Use Effect whet state changes
  useEffect(() => {
    if (spaces) {
      localStorage.setItem("spaces", JSON.stringify(spaces));
    } else {
      localStorage.setItem("spaces", JSON.stringify([]));
    }
  }, [spaces]);

  // function to take current space and add a new space
  const createSpace = (newSpace) => {
    setSpaces([...spaces, newSpace]);
  };

  // function to delete selected space from spaces state
  const deleteSpace = (id) => {
    console.log(id);
    const newSpaces = spaces.filter((space) => space.id !== id);
    setSpaces(newSpaces);
  };

  //conditional message for no spaces
  const title = spaces.length === 0 ? "No spaces" : "Admin your spaces";

  return (
    <Fragment>
      <h1>Patient Administrator</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createSpace={createSpace} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {spaces.map((space) => (
              <Space key={space.id} space={space} deleteSpace={deleteSpace} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
