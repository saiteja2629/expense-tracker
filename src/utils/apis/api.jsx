import axios from "axios";

async function postUserSignUp(values) {
  try {
    const response = await axios.post("http://localhost:3001/signup", values, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { status: 200, response };
  } catch (error) {
    if (error) {
      return { status: error.status, message: "error.response!.data.message" };
      //   return { status: error.status, message: error.response!.data.message };
    } else if (error) {
      return { status: 500, message: error.message };
    } else {
      return { status: 500, message: "unknown error" };
    }
  }
}

export { postUserSignUp };
