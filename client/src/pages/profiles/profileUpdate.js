import React from 'react'
import NavSideBar from '../../components/NavSideBar'
import { Link } from "react-router-dom"
import TabNav  from '../../components/TabNav'


function profileUpdate() {
    return (
        <div>
            <NavSideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="row d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <div className="col">
                        <h3 className="h3">Player Profile</h3>
                    </div>
                </div>
                <section>
                    <h4>Signup Details</h4>
                </section>
                <section>
                    <h4>Registration Details</h4>
                </section>
                <section>
                    <h4>Attendance</h4>
                </section>
                <section>
                    <h4>Education</h4>
                </section>
                <section>
                    <h4>Counseling</h4>
                </section>
                {/* <TabNav /> */}
            </main>

        </div>
            
    )
}

export default profileUpdate