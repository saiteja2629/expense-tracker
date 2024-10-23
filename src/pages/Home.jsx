import React, { useEffect , useContext, useCallback} from "react";

import { getLoggedUsername } from "../utils/apis/api";
import { MyContext } from "../MyContext";
import Navbar from "./Navbar";
import AddExpense from "./AddExpense";

import "../styles/home.css";


const Home = () => {
  const { state, setState } = useContext(MyContext);

  const getUsername = useCallback(async () => {
    const response = await getLoggedUsername();
    const user = response.userName;
    if (user !== state.userName) {
      setState((prevState) => ({ ...prevState, userName: user }));
    }
  }, [setState, state.userName]);

  useEffect(() => {
    getUsername();
  }, [getUsername]);

  return (
    <div className="home-bg-container d-flex flex-column align-items-center">
      <Navbar state={state} />
      <AddExpense />
    </div>
  );
};

export default Home;
