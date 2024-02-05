import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/auth/register";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try { 
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      // console.log("response data : ", response);

      const res_data = await response.json();
      //    console.log('res from server', res_data);
      console.log('response from server', res_data.extraDetails);

      if (response.ok) {
        
        // stored the token in localhost
        // storeTokenInLS(res_data.token);

        // alert("registration successful");
        setUser({ username: "", email: "", phone: "", password: "" });
        // toast.success("Registration Successful");
        navigate("/");
      } else {
        // toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.error("register", error);
    }
  };

  return (
    <>
      <section className="bg-gray-100 min-h-screen flex items-center justify-center">
        <main className="max-w-4xl w-full px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center items-center">
              <img
                src="/images/register.png"
                alt="a nurse with a cute look"
                className="w-64 h-64"
              />
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-center mb-6">Registration form</h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="username" className="block">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleInput}
                    className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-400"
                    placeholder="Username"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-400"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    value={user.phone}
                    onChange={handleInput}
                    className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-400"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-400"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
                >
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
