import axios from "axios";

export const postUserSignUp = async (values) => {
  try {
    const response = await axios.post("http://localhost:3001/signup", values, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    return { status: 500, message: error.message };

  }
};

export const postUserLogin = async (values) => {
  try {
    const response = await axios.post("http://localhost:3001/login", values);
    console.log(response);
    
    return response.data;
  } catch (error) {
    return { status: 500, message: error.message };
  }
};
