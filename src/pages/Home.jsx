import React, { useEffect , useContext} from "react";

import { getLoggedUsername } from "../utils/apis/api";
import { MyContext } from "../MyContext";
import Navbar from "./Navbar";
import AddExpense from "./AddExpense";

import "../styles/home.css";


const Home = () => {
  const { state, setState } = useContext(MyContext);

  const getUsername = async () => {
    const response = await getLoggedUsername();
    const username = response.username[0].userName;
    setState({ username: username });
  };

  useEffect(() => {
    getUsername();
  }, []);

  return (
    <div className="home-bg-container d-flex flex-column align-items-center">
      <Navbar />
      <AddExpense />
    </div>
  );
};

export default Home;
