import axios from "axios";

const apiUrl = "http://localhost:8000";

export const signup = async (user) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${apiUrl}/user/signup`,
      data: user
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const signin = async (user) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${apiUrl}/user/signin`,
      data: user
    });
    return response;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};
