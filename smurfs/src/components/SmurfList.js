import React, {useState} from "react";
import { connect } from "react-redux";
import { fetchSmurf, addNewSmurf } from "../actions";
import Loader from "react-loader-spinner";
import Smurf from "./Smurf";

function SmurfList(props) {
  //console.log("SmurfList props", props);
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: 0,
    height: 0
  })

  const changeHandler = e => {
      //console.log(e.target.value);
      setNewSmurf({...newSmurf, [e.target.name]: e.target.value});
  }

  const submitEntry = (e) => {
      e.preventDefault();
      props.addNewSmurf(newSmurf);
      // console.log('newSmurf', newSmurf)
  }

  return (
    <>
    <div className="smurf-entry">
        <form>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            onChange={changeHandler}
            value={newSmurf.name}
          />

          <label htmlFor="age">Age</label>
          <input
            name="age"
            id="age"
            type="text"
            onChange={changeHandler}
            value={newSmurf.age}
          /> 
          <label htmlFor="height">Height</label>
          <input
            name="height"
            id="height"
            type="text"
            onChange={changeHandler}
            value={newSmurf.height}
          /> 

          <button type="submit" onClick={(e) => submitEntry(e)}>Submit</button>

         
        </form>      
    </div>
      <button onClick={() => props.fetchSmurf()}>Get Smurfing</button>
      {props.isLoading && (
        <Loader type="MutatingDots" color="blue" height={80} width={80} />
      )}
      {props.error && <p>{props.error.message}</p>}
      <div className="smurfCard">
      {props.smurf.map((smurf, index) => (
        <Smurf key={index} smurf={smurf} />
      ))}
      </div>
    </>
  );
}

const mapDispatchToProps = {
  fetchSmurf,
  addNewSmurf
};

export default connect(
  state => state,
  mapDispatchToProps
)(SmurfList);
