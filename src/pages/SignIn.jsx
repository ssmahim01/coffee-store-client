import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const SignIn = () => {
    const {signInUser, signInWithGoogle, setUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
        .then(result => {
          const user = result.user;
          // console.log(user);
          
          const lastSignInTime = user?.metadata?.lastSignInTime;
          const signInInfo = {email, lastSignInTime};
          setUser(user);

            fetch("https://espresso-emporium-server-lyart.vercel.app/users", {
              method: "PATCH",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(signInInfo)
            })
            .then(res => res.json())
            .then(data => {
              if(data.matchedCount > 0){
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Sign In Successful",
                  showConfirmButton: false,
                  timer: 1500
                })
              }
              // console.log(data);
            })

            e.target.reset();

            navigate(location?.state ? location.state : "/");
        })
        .catch(error => {
            const errorMessage = error.message;
            // alert(errorMessage);
            Swal.fire({
              title: "Error!",
              position: "center",
              icon: "error",
              title: "Failed to Sign In",
              confirmButtonText: "Okay",
            })
        })
    };

    const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then(result => {
        const user = result?.user;
        const name = user?.displayName;
        const email = user?.email;
        const photo = user?.photoURL;
        const lastSignInTime = user?.metadata?.lastSignInTime;
        const newUser = {name, photo, email, lastSignInTime};
        setUser(user);
        navigate(location?.state ? location.state : "/");
  
        fetch("https://espresso-emporium-server-lyart.vercel.app/users", {
          method: "PATCH",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          if(data.matchedCount > 0){
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Google Sign In Successful",
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
  
        .catch(error => {
          const errorMessage = error.message;
          // alert(errorMessage);
           Swal.fire({
            title: "Error!",
            position: "center",
            icon: "error",
            title: "Failed to Google Sign In",
            confirmButtonText: "Okay",
          })
        })
      })
    };

  return (
    <div className="bg-base-200">
      <Link to="/" className="lg:ml-48 ml-5 flex gap-3 items-center pt-12">
        <FaArrowLeft className="text-xl" />{" "}
        <span className="font-rancho text-3xl font-bold">Back to Home</span>
      </Link>

      <div className="hero py-16">
        <div className="hero-content lg:w-4/12 md:w-3/4 mx-auto w-full flex-col">
          <div className="text-center lg:text-left">
            <h1 className="md:text-5xl text-4xl font-bold">Sign In Now!</h1>
          </div>
          <div className="card bg-base-100 w-full shrink-0 shadow-md mt-6">
            <form className="card-body" onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered w-full"
                  required
                />

                <label className="label justify-end">
                  <Link to="/forgotPassword" className="label-text-alt link link-hover text-gray-800 font-bold">
                    Forgot password?
                  </Link>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-success text-white text-xl font-rancho font-bold">
                  Sign In
                </button>
              </div>
            </form>

            <div className="text-center font-bold mb-2 px-6">If you are a new user? Please <Link to="/signUp" className="text-amber-500">Sign Up</Link></div>

            <div className="divider w-3/4 mx-auto">Or</div>

            <button onClick={handleGoogleSignIn} className="w-4/5 mx-auto btn btn-outline border-2 border-gray-200 rounded-full hover:btn-primary shadow-md mb-7 font-bold">Sign In with Google <FcGoogle className="text-xl" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
