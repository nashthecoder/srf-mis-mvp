import React from 'react'
import BoxContainer from '../components/BoxContainer'
import NavSideBar from '../components/NavSideBar'

function Dashboard() {
    return (
        <div>
            <NavSideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h3 className="h3">Sections</h3>
                    {/* <div className="btn-toolbar mb-2 mb-md-0"> */}
                    {/* <div className="btn-group me-2">
                        <button type="button" className="btn btn-sm btn-outline-success px-4">Edit</button>
                    </div>
                        <button type="button" className="btn btn-sm btn-outline-success px-4">
                                <span data-feather="calendar"></span>
                                Save
                        </button>
                    </div> */}
                </div>
            </main>
            <BoxContainer>
                <div className="card-container">
                    <div className="card-home">
                        <div className="card-body">
                        <a href="/profiles" className="btn-card">Profiles</a>
                        </div>
                    </div>
                    <div className="card-home">
                        <div className="card-body">
                        <a href="/attendance" className="btn-card">Attendance</a>
                        </div>
                    </div>
                    <div className="card-home">
                        <div className="card-body">
                        <a href="/visits" className="btn-card">Visits</a>
                        </div>
                    </div>
                    <div className="card-home">
                        <div className="card-body">
                        <a href="/lifeskills" className="btn-card">Life Skills</a>
                        </div>
                    </div>
                    <div className="card-home">
                        <div className="card-body">
                        <a href="/counseling" className="btn-card">Counseling</a>
                        </div>
                    </div>
                    <div className="card-home">
                        <div className="card-body">
                        <a href="/education" className="btn-card">Education</a>
                        </div>
                    </div>
                </div>
            </BoxContainer>
        </div>
    )
}

export default Dashboard