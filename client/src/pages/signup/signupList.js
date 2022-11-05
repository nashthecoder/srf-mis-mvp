import React, { Fragment, useEffect, useState } from "react"
import NavSideBar from '../../components/NavSideBar'
import BoxContainer from '../../components/BoxContainer';
import axios from 'axios';


const Signup = (props) => (

    <tr>
        <td>{props.signup.playernames}</td>
        <td>{props.signup.team}</td>
        <td>{props.signup.clinic}</td>
        <td>{props.signup.caregivernames}</td>
    </tr>
    );

    export default function SignupList() {

    const [signups, setSignups] = useState([]);

    // This method fetches the signups from the database.
    useEffect(() => {
        async function getSignups() {
        const response = await fetch(`signup/`);

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
    }, []);

    // This method will delete a record
    async function deleteSignup(id) {
        await fetch(`http://localhost:5000/${id}`, {
        method: "DELETE"
        });

        const newSignups = signups.filter((el) => el._id !== id);
        setSignups(newSignups);
    }

    // This method will map out the signups on the table
    function signupList() {
        signups.map((signup) => {
        return (
            <Signup
            signup={signup}
            key={signup._id}
            />
        );
        });
    }

    // This following section will display the table with the signed up players.

    return (
        <Fragment>
        <NavSideBar />
        <BoxContainer>

        <div className="table">
        <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
            <tr>
                {/* <th>Id</th> */}
                <th>Player</th>
                <th>Team</th>
                <th>Clinic</th>
                <th>Caregivers Name</th>
                {/* <th><Link to={`/signups/${signup._id}`} className="btn btn-success">View</Link></th> */}
            </tr>
            </thead>
            <tbody>{signupList()}</tbody>
        </table>
        </div>
        </BoxContainer>
        </Fragment>
    );
}
