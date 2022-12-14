import React, { useState } from 'react'
import NavSideBar from '../../components/NavSideBar'
import BoxContainer from '../../components/BoxContainer'
import { Fragment } from 'react'
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

const Signup = () => {

    // function setDate(){
    //     document.getElementById("date").innerHTML=Date();
    // }
    const [form, setForm] = useState({
        playernames: "",
        dateofbirth: "",
        gender: "",
        caregivernames: "",
        phonenumber: "",
        relationship:"",
        clinic:"",
        team:"",
    }
    );

    const navigate = useNavigate();

 // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
        return { ...prev, ...value };
        });
    }

      // This function will handle the submission.
    async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPlayer = { ...form };

    await fetch("signup/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlayer),
        })
        .catch(error => {
        window.alert(error);
        return;
    });

    setForm({ 
        playernames: "",
        dateofbirth: "",
        gender: "",
        caregivernames: "",
        phonenumber: "",
        relationship:"",
        clinic:"",
        team:"",
    }
    );
    navigate("/signup");
}


    return (
        <Fragment>
            <NavSideBar />
            <BoxContainer>
                <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h2 className="h2 text-success">Player Signup</h2>
                </div>
                <form onSubmit={onSubmit}>

                {/* <div onload{...setDate()}>
                    <p className="form-check px-1 text-success" id="date">Current Date:</p>
                </div> */}

                <div className="form-group">
                <label className="form-check px-1 text-success"  htmlFor="playerbio">Player Bio</label>
                <input
                    type="text"
                    className="form-control"
                    id="playernames"
                    placeholder="Player Names"
                    value={form.playernames}
                    onChange={(e) => updateForm({ playernames: e.target.value })}
                />
                </div>

                <div className="form-group">
                <label className="form-check px-1 text-success"  htmlFor="carergiverdetails">Date Of Birth</label>
                    <input
                        type="date"
                        className="form-control"
                        id="dateofbirth"
                        value={form.dateofbirth}
                        onChange={(e) => updateForm({ dateofbirth: e.target.value })}
                    />
                </div>

                <div className="form-group">
                <select 
                    className="form-control"
                    id="gender"
                    onChange={(e) => updateForm({ gender: e.target.value })}
                >
                    <option>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>            
                </div>

                <div className="form-group">
                <label  className="form-check px-1 text-success" htmlFor="carergiverdetails">Caregiver Details</label>
                <input
                    type="text"
                    className="form-control"
                    id="caregivernames"
                    placeholder="Caregiver Names"
                    value={form.caregivernames}
                    onChange={(e) => updateForm({ caregivernames: e.target.value })}
                />
                </div>
                <div className="form-group">
                <input
                    type="phonenumber"
                    className="form-control"
                    id="phonenumber"
                    placeholder="Phone Number"
                    value={form.phonenumber}
                    onChange={(e) => updateForm({ phonenumber: e.target.value })}
                />
                </div>
                <div className="form-group">
                <select 
                    className="form-control"
                    id="relationship"
                    value={form.relationship}
                    onChange={(e) => updateForm({ relationship: e.target.value })}
                >
                    <option>Select Relationship</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Guardian">Guardian</option>
                </select>            
                </div>

                <div className="form-group">
                <label className="form-check px-1 text-success" htmlFor="carergiverdetails">SRF Details</label>
                <select 
                    className="form-control"
                    id="clinic"
                    value={form.clinic}
                    onChange={(e) => updateForm({ clinic: e.target.value })}
                >
                    <option>Select Clinic</option>
                    <option value="Eastlands">Eastlands</option>
                    <option value="Kangemi">Kangemi</option>
                    <option value="Kibera">Kibera</option>
                    <option value="Korogocho">Korogocho</option>
                    <option value="Mathare">Mathare</option>
                    <option value="Ngewe">Ngewe</option>
                    <option value="Tatu City">Tatu City</option>
                </select>            
                </div>

                <div className="form-group">
                <select 
                    className="form-control"
                    id="team"
                    value={form.team}
                    onChange={(e) => updateForm({ team: e.target.value })}
                >
                    <option>Select a Team</option>
                    <option value="Under 10s">Under 10s</option>
                    <option value="Under 12s">Under 12s</option>
                    <option value="Under 16s">Under 16s</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                </select>            
                </div>
                <div className="px-3 pt-3">
                <div className="row">
                    <div className="col-sm-4">
                        <input type="submit" className="btn btn-success"
                            Submit
                        />
                    </div>
                    <div className="col-sm-4">
                        <Link to="/signuplist" className="btn btn-success">
                            View Signup
                        </Link>
                    </div>
                </div>
                </div>
                </form>
                <br />
            </BoxContainer>
        </Fragment>
    )
}

export default Signup