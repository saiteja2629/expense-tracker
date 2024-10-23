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
    return response.data;
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

export const getLoggedUsername = async () => {
  try {
    const response = await axios.get("http://localhost:3001/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

export const postChangeUsername = async (values) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/change-username",
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

export const postChangePassword = async (values) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/change-password",
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

export const postVerifyEmail = async (values) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/verify-email",
      values
    );
    return response.data;
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

export const postResetPassword = async (values) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/reset-password",
      values
    );
    return response.data;
  } catch (error) {
    return { status: 500, message: error.message };
  }
};
