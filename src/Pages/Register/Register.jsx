import login from "../../assets/others/authentication2.png"
import loginbg from "../../assets/others/authentication.png"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const { createuser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        console.log(data)
        createuser(data.email, data.password)
            .then(result => {
                const regUser = result.user;
                console.log(regUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user info')
                        //create user in db (new user)
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('add on db the new user')
                                    reset();
                                    swal("Good job!", "Registration Successful!", "success");
                                    navigate('/')
                                }
                            })


                    })
                    .catch(error => console.log(error))
            })
    }

    const backgroundImageStyle = {
        backgroundImage: `url(${loginbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <div className="hero min-h-screen " style={backgroundImageStyle}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" {...register("name", { required: true })} name="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-700">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-700">Email Required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="url" placeholder="photoURL" {...register("photoURL", { required: true })} name="photoURL" className="input input-bordered" />
                            {errors.email && <span className="text-red-700">PhotoURL Required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" {...register("password", { required: true })} name="password" className="input input-bordered" />
                            {errors.password && <span className="text-red-700">This field is required</span>}

                        </div>


                        {/* <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captchaRef} placeholder="Type captcha above" name="captcha" className="input input-bordered" required />
                            <button onClick={handleValidateCaptcha} className="btn btn-xs">Validate</button>
                        </div> */}


                        <div className="form-control mt-6">
                            <input className="btn bg-[#d8b682] text-white" type="submit" value="Register" />
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