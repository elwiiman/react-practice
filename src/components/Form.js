import React, { Fragment, useState } from "react";
import uuid from "uuid/v4";
import PropTypes from "prop-types";

const Form = ({ createSpace }) => {
  // State of space for the form
  const [space, setSpace] = useState({
    pet: "",
    owner: "",
    date: "",
    hour: "",
    syntoms: "",
  });

  const [error, setError] = useState(false);

  // Function for update the form
  const handleChange = (e) => {
    setSpace({
      ...space,
      [e.target.name]: e.target.value,
    });
  };

  //Extract Values

  const { pet, owner, date, hour, syntoms } = space;

  //When user click button in the form
  const submitSpace = (e) => {
    e.preventDefault();

    //Validation
    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      hour.trim() === "" ||
      syntoms.trim() === ""
    ) {
      setError(true);
      return;
    }
    //if no error set error to false
    setError(false);

    //Add ID
    space.id = uuid();

    //Add space
    createSpace(space);

    //Reinitialize form
    setSpace({
      pet: "",
      owner: "",
      date: "",
      hour: "",
      syntoms: "",
    });
  };

  return (
    <Fragment>
      <h2>Reserve an space</h2>

      {error ? <p className="alerta-error">All fields must be filled</p> : null}
      <form onSubmit={submitSpace}>
        <label>Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet Name"
          onChange={handleChange}
          value={pet}
        />

        <label>Owner Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner Name"
          onChange={handleChange}
          value={owner}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />

        <label>Hour</label>
        <input
          type="time"
          name="hour"
          className="u-full-width"
          onChange={handleChange}
          value={hour}
        />

        <label>Syntoms</label>
        <textarea
          className="u-full-width"
          name="syntoms"
          onChange={handleChange}
          value={syntoms}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Add a space
        </button>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  createSpace: PropTypes.func.isRequired,
};

export default Form;
