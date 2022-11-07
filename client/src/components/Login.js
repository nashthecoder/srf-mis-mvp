import React from 'react'
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import Logo from "../assets/img/logo.png"



const Login = () => {

    const navigate = useNavigate();
    const responseGoogle = (response) => {
        localStorage.setItem('user', JSON.stringify(response.profileObj));
        const { name, googleId, imageUrl } = response.profileObj;
        const doc = {
        _id: googleId,
        _type: 'user',
        userName: name,
        image: imageUrl,
        };
        // client.createIfNotExists(doc).then(() => {
        // navigate('/', { replace: true });
        // });
    };

return (
    <section className="landing">
        <div className="dark-overlay">
            <div className="landing-inner">
                <img className="img mb-3" src={Logo} alt=""/>
                <h1 className="x-large">Shamas Rugby Foundation</h1>
                <p className="lead">
                Management Information System
                </p>
                <div className="shadow-2xl">
                    <GoogleLogin
                    clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                    render={(renderProps) => (
                        <button
                        type="button"
                        className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        >
                        <FcGoogle className="mr-4" /> Sign in with google
                        </button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy="single_host_origin"
                    />
                </div>
            </div>
        </div>
    </section>
    );
};

export default Login;