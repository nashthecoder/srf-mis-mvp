import React, { useState, Fragment } from 'react'
// import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Login from './pages/auth/Login'
// import Create from './pages/auth/Create'
import Login from './components/Login'
import PageNotFound from './pages/PageNotFound'
import Admin from './pages/Admin'
import Attendance from './pages/attendance/Attendance'
import Counseling from './pages/counseling/Counseling'
// import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import ProfilesView from './pages/profiles/profilesView'
import ProfileUpdate from './pages/profiles/profileUpdate'
import ProfileView from './pages/profiles/profileView'
import Registration from './pages/registration/Registration'

import RegistrationList from './pages/registration/registrationList'
import RegistrationCard from './pages/registration/registrationCard'
import Settings from './pages/Settings'
import SignupCreate from './pages/signup/SignupCreate'
import SignupList from './pages/signup/signupList'
import Visits from './pages/visit/Visits'

import Education from './pages/education/Education'
import Lifeskills from './pages/Lifeskills'
import UploadDocumentsPage from './pages/upload/UploadDocumentsPage'
// import { LOGOUT } from './actions/types';
import './custom.scss';



const App = () => {

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route exact path="/login" element={<Login />} />
            <Route exact path="/create" element={<Create />} /> */}
            <Route exact path="*" element={<PageNotFound />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/visits" element={<Visits />}/>
            <Route exact path="/attendance" element={<Attendance />} />
            <Route exact path="/counseling" element={<Counseling />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/education" element={<Education />} />
            <Route exact path="/lifeskills" element={<Lifeskills />} />
            <Route exact path="/viewprofiles" element={<ProfilesView />} />
            <Route exact path="/updateprofile" element={<ProfileUpdate />} />
            <Route exact path="/viewprofile" element={<ProfileView />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route exact path="/registrationlist" element={<RegistrationList />} />
            <Route exact path="/registrationcard" element={<RegistrationCard />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/signuplist" element={<SignupList />} />
            <Route exact path="/signupcreate" element={<SignupCreate />} />
            <Route exact path="/registration/uploads" element={<UploadDocumentsPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;