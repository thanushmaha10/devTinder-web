import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import BASE_URL from "../utils/constant";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setEmailId] = useState("thanushmaha10@gmail.com");
  const [password, setPassword] = useState("Thanush@1004");
  const [loginError, setLoginError] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email: emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setLoginError(err.response?.data || "Something Went Wrong");
      // console.error(err.response?.data || "Something Went Wrong");
    }
  };

  return (
    <div className="flex justify-center my-30">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title flex justify-center text-2xl">Login</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email ID</legend>
            <input
              type="text"
              className="input"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-sm bg-transparent hover:bg-base-200 border-none"
                onClick={() => setShow(!show)}
              >
                {show ? "Hide" : "Show"}
              </button>
            </div>
          </fieldset>
          {loginError && <p className="text-red-500">{loginError}</p>}
          <div className="card-actions justify-center my-4">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
