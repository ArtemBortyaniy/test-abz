import React, { FC, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { useDispatch } from "react-redux";
import { Action } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";
import { getUsers } from "../../redux/users/operations";
import { useUsers } from "../../hooks";

const Home: FC = () => {
  const dispatch = useDispatch<ThunkDispatch<{}, {}, Action>>();
  const { users } = useUsers();

  useEffect(() => {
    dispatch(getUsers({ page: 1, count: 5 }));
  }, [dispatch]);

  console.log(users);
  return (
    <div>
      <Hero />
      {/* <Section title="Working with GET request">

      </Section> */}
    </div>
  );
};

export default Home;
