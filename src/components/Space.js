import React from "react";

const Space = ({ space, deleteSpace }) => (
  <div className="cita">
    <p>
      Pet: <span>{space.pet}</span>
    </p>
    <p>
      Owner: <span>{space.owner}</span>
    </p>
    <p>
      Date: <span>{space.date}</span>
    </p>
    <p>
      Hour: <span>{space.hour}</span>
    </p>
    <p>
      Syntoms: <span>{space.syntoms}</span>
    </p>

    <button
      className="button eliminar u-full-width"
      onClick={() => deleteSpace(space.id)}
    >
      Delete &times;
    </button>
  </div>
);

export default Space;
