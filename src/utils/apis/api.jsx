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
    return response.data;
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

export const postExpenseData = async (values) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/add-expense",
      values,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

export const getMyExpenses = async () => {
  try {
    const response = await axios.get("http://localhost:3001/my-expenses", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    console.log("From FE API file :", response);
    return response.data;
  } catch (error) {
    return { status: 500, message: error.message };
  }
};
