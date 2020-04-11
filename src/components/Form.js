import React, { Fragment, useState } from "react";

const Form = () => {
  // State of spaces
  const [space, setSpace] = useState({
    pet: "",
    owner: "",
    date: "",
    hour: "",
    syntoms: "",
  });

  // Function for update the form
  const handleChange = (e) => {
    setSpace({
      ...space,
      [e.target.name]: e.target.value,
    });
  };

  //Extract Values

  const { pet, owner, date, hour, syntoms } = space;

  return (
    <Fragment>
      <h2>Reserve an space</h2>
      <form>
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
          hour={hour}
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

export default Form;
