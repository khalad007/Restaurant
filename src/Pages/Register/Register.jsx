import login from "../../assets/others/authentication2.png"
import loginbg from "../../assets/others/authentication.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

const { createuser } = useContext(AuthContext);

    const backgroundImageStyle = {
        backgroundImage: `url(${loginbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const handleRegister = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(email, password, name)

        createuser(email,password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className="hero min-h-screen " style={backgroundImageStyle}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
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


                        {/* <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captchaRef} placeholder="Type captcha above" name="captcha" className="input input-bordered" required />
                            <button onClick={handleValidateCaptcha} className="btn btn-xs">Validate</button>
                        </div> */}


                        <div className="form-control mt-6">
                            <input  className="btn bg-[#d8b682] text-white" type="submit" value="Register" />
                        </div>
                       <Link to="/login"> <p className="font-bold text-sm text-[#d8b682] text-center">Already registered? Go to log in</p></Link>
                        <p className="font-medium text-sm text-center">or sign up with</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;