import React, { useEffect, useState } from "react"
import BoxContainer from "../../components/BoxContainer"
import { Link } from "react-router-dom"
import { Col  } from 'react-bootstrap'
import Search from "../../components/Search";




const Signup = (props) => (
  <>
        <div className="card w-200 mb-4">
          <h5 className="card-header">{props.signup.firstname} {props.signup.middlename} {props.signup.lastname}</h5>
            <div className="card-body">
              <div className="row">
                <Col><p className="card-subtitle px-4">Gender:</p></Col>
                <Col><p className="card-title mx-0">{props.signup.gender}</p></Col>
              </div>
              <div className="row">
                <Col><p className="card-subtitle px-4 px-4">Caregiver's Name:</p></Col>
                <Col><p className="card-title mx-0">{props.signup.caregivernames}</p></Col>
              </div>
              <div className="row">
                <Col><p className="card-subtitle px-4">Relationship:</p></Col>
                <Col><p className="card-title mx-0">{props.signup.relationship}</p></Col>
              </div>
              <div className="row">
                <Col><p className="card-subtitle px-4">Clinic:</p></Col>
                <Col><p className="card-title mx-0">{props.signup.clinic}</p></Col>
              </div>
              <div className="col mt-4">
                    <Link to="/signupcard" className="btn btn-success">
                        More Details
                    </Link>
                </div>
              <br />
          </div>
        </div>
      {/* </div>
    </div> */}
  </>
);

export default function SignupCards() {
  const [signups, setSignups] = useState([]);

  //This method fetches the signups from the database.
  useEffect(() => {
    async function getSignups() {
      const response = await fetch(`http://localhost:5000/signup/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const signups = await response.json();
      setSignups(signups);
    }

    getSignups();

    return; 
  }, [signups.length]);



  // This following section will display the table with the signups of individuals.
  return (
    <div>
        <BoxContainer>
          <div className="mb-4">
            <Search />
          </div>
          <div className="col d-flex justify-content-center">
            <body className="signup-card">{SignupCards()}</body>
          </div>
        </BoxContainer>
    </div>
  );
}
