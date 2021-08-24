import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext";

const UseRoutes = () => {
  const baseURL = "http://localhost:8080";
  const { setCurrentUser } = useAuth();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [education, setEducation] = useState([]);

  const getEducationData = async () => {
    setLoading(true);
    try {
      await axios.get(`${baseURL}/education`).then((res) => {
        setEducation(res.data);
        setLoading(false);
      });
    } catch (error) {
      console.log("Error getting data - ", error);
    }
  };

  const postEducationData = async (completeFormData) => {
    const config = {
      headers: { "Content-Type": "application/json",
      "TOKEN_KEY": localStorage.getItem("TOKEN_KEY"),
      "token": localStorage.getItem("token"),},
    };
  
    setLoading(true);
    await axios
      .post(`${baseURL}/education`, completeFormData, config)
      .then((res) => {
        console.log("res - ", res);
        setLoading(false);
      })
      .catch((err) => console.log("error - ", err));
  };

  const loginUser = async (credentials) => {
    
    await axios
      .post(`${baseURL}/user/login`, credentials)
      .then((res) => {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", res.data.username);
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("TOKEN_KEY", res.data.TOKEN_KEY)
        setCurrentUser(res.data);
        history.push("/uploadEducation");
      })
      .catch((err) => console.log("error - ", err));
  };

  return {
    loading,
    setLoading,
    education,
    getEducationData,
    postEducationData,
    loginUser,
  };
};

export default UseRoutes;
