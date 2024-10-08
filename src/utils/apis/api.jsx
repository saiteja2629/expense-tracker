import axios from "axios";

export const postUserSignUp = async (values) => {
  try {
    const response = await axios.post("http://localhost:3001/signup", values, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

export const postUserLogin = async (values) => {
  try {
    const response = await axios.post("http://localhost:3001/login", values);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const postExpenseData = async (values) => {
  try {
    const response = await axios.post("http://localhost:3001/add-expense", values);    
    return response;
  } catch (error) {
    return error.message;
  }
}
