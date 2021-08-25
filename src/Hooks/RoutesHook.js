import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext";

const UseRoutes = () => {
  const baseURL = "https://bonjo-profile-backend.herokuapp.com";
  const { setCurrentUser } = useAuth();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [education, setEducation] = useState([]);
  const [error, setError] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null);
  const [show, setShow] = useState(false);

  const getEducationData = async () => {
    setLoading(true);
    try {
      await axios.get(`${baseURL}/education`).then((res) => {
        setEducation(res.data);
        setLoading(false);
      });
    } catch (err) {
      setLoading(false);
      setErrorStatus(err.response.data.status);
      setError(err.response.data.message);
    }
  };

  const postEducationData = async (completeFormData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        TOKEN_KEY: localStorage.getItem("TOKEN_KEY"),
        token: localStorage.getItem("token"),
      },
    };

    setLoading(true);
    try {
      await axios
        .post(`${baseURL}/education`, completeFormData, config)
        .then((res) => {
          setLoading(false);
        });
    } catch (err) {
      setErrorStatus(err.response.data.status);
      setError(err.response.data.message);
      setLoading(false);
    }
  };

  const loginUser = async (credentials) => {
    setLoading(true);
    try {
      await axios.post(`${baseURL}/user/login`, credentials).then((res) => {
        setLoading(false);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", res.data.username);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("TOKEN_KEY", res.data.TOKEN_KEY);
        setCurrentUser(res.data);
        history.push("/uploadEducation");
      });
    } catch (err) {
      setLoading(false);
      setShow(true);
      setErrorStatus(err.response.data.status);
      setError(err.response.data.message);
    }
  };

  return {
    loading,
    setLoading,
    education,
    getEducationData,
    postEducationData,
    loginUser,
    error,
    errorStatus,
    show,
    setShow,
  };
};

export default UseRoutes;
