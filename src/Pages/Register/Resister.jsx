// import { useContext } from "react";
import { useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/Context";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { emailSignup } = useContext(AuthContext);
   const navigate = useNavigate();

  const handleSubmit = (event) => {
    // default reload disable
    event.preventDefault();

    // get value from the input field
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // validate the password
    if (password.length < 6) {
      toast.error("Password must be 6 charecter");
      return;
    }

    // create user with email and password
    emailSignup(email, password)
      .then((result) => {
        updateProfile(result.user, { displayName: name });
        toast.success("Succesfully account created");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero-content mx-auto">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div>
          <h2 className="mt-6 text-3xl mx-auto w-40 font-extrabold text-neutral-600">
            Register .
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="card-body w-full">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-neutral-600">
                Have An Account?
              </span>
            </div>
          </div>
          <div>
            <Link to={"/login"}>
              <button
                type="submit"
                className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-600 rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Log In
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
