import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/auth/login";


const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  // handling the input values
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log("login form", response);
 
      const res_data = await response.json();

      if(response.ok){
        // alert("Login Successful");
        // stored the token in localhost
        storeTokenInLS(res_data.token);
        
        setUser({ email: "", password: "" });
        toast.success("Login Successful");
        navigate("/");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        console.log("invalid credential");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <main className="min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full px-6">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-8">
                <img
                  src="/images/login.png"
                  alt="Let's fill the login form"
                  className="w-48 h-48"
                />
              </div>
              <h1 className="text-3xl font-semibold text-center mb-6">Login form</h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block">Email</label>
                  <input
                    type="text"
                    name="email"
                    className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-400"
                    value={user.email}  
                    onChange={handleInput}
                    placeholder="email"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-400"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
                >
                  LogIn
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
