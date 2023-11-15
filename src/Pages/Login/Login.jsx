import login from "../../assets/others/authentication2.png"
import loginbg from "../../assets/others/authentication.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";
const Login = () => {
    const captchaRef = useRef(null);

    const [disabled, setDisabled] = useState(true);

    const backgroundImageStyle = {
        backgroundImage: `url(${loginbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const { signIn } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            swal("Good job!", "You clicked the button!", "success");
        })
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = e => {
        // e.preventDefault()
        const userCaptchaValue = captchaRef.current.value;
        if (validateCaptcha(userCaptchaValue) === true) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }

    }
    return (
        <div className="hero min-h-screen " style={backgroundImageStyle}>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captchaRef} placeholder="Type captcha above" name="captcha" className="input input-bordered" required />
                            <button onClick={handleValidateCaptcha} className="btn btn-xs">Validate</button>
                        </div>


                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn bg-[#d8b682] text-white" type="submit" value="Login" />
                        </div>
                        <Link to="/register"><p className="font-bold text-sm text-[#d8b682] text-center">New here? Create a New Account</p></Link>
                        <p className="font-medium text-sm text-center">or sign in with</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;