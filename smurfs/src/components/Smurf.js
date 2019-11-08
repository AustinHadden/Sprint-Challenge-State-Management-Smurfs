import React from "react";

const Smurf = (props) => {
    console.log('Smurf props', props.smurf);
  return (
    <div className="card">
      <h1>{props.smurf.name}</h1>
      <ul>
        <li>{props.smurf.age}</li>
        <li>{props.smurf.height}</li>
      </ul>
    </div>
  );
}

export default Smurf;
