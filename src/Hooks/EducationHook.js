import { useState } from "react";
import axios from "axios";

const UseEducation = () => {
  const baseURL = "http://localhost:8080";
  const [loading, setLoading] = useState(false);
  const [education, setEducation] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      await axios.get(`${baseURL}/api`).then((res) => {
        setEducation(res.data);
        setLoading(false);
      });
    } catch (error) {
      console.log("Error getting data - ", error);
    }
  };

  const postEducationData = async (completeFormData) => {
    setLoading(true)
    await axios
      .post(`${baseURL}/api`, completeFormData)
      .then((res) => {
        console.log("res - ", res)
        setLoading(false)
      })
      .catch((err) => console.log("error - ", err));
  };

  return { loading, setLoading, education, getData, postEducationData };
};

export default UseEducation;
