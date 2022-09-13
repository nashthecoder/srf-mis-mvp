import React from 'react'
import NavSideBar from '../../components/NavSideBar'
import SignupCreate from '../../pages/signup/SignupCreate'
import Registration from '../registration/Registration'



function profileCreate() {
    return (
        <div>
            <NavSideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <section>
                <div className="row d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <div className="col">
                        <h3 className="section-header text-success">Player Profile</h3>
                    </div>
                </div>
                    <SignupCreate />
                </section>
                <section className="bg-grey">
                <div className="row d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <div className="col">
                        <h3 className="section-header text-success">Register Player</h3>
                    </div>
                </div>
                    <Registration />
                </section>
                <section>
                    <h4>Attendance</h4>
                </section>
                <section className="bg-grey">
                    <h4>Education</h4>
                </section>
                <section>
                    <h4>Counseling</h4>
                </section>
            </main>

        </div>
            
    )
}

export default profileCreate