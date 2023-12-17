import React, { FC, useEffect, useState } from "react";
//components
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import UserList from "../../components/UserList/UserList";
import BtnShowMore from "../../components/BtnShowMore/BtnShowMore";
import UserForm from "../../components/UserForm/UserForm";
import RegistrationSuccessMessage from "../../components/RegistrationSuccessMessage/RegistrationSuccessMessage";
//redux
import { Action } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";
import { getUsers } from "../../redux/users/operations";
import { getPositions } from "../../redux/positions/operations";
import { useDispatch } from "react-redux";
import { getToken } from "../../redux/token/operations";

const Home: FC = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(6);
  const dispatch = useDispatch<ThunkDispatch<{}, {}, Action>>();

  useEffect(() => {
    dispatch(getUsers({ page: page, count: count }));
  }, [count, dispatch, page]);

  useEffect(() => {
    dispatch(getPositions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getToken());
  }, [dispatch]);

  const handlePagination = () => {
    setPage(page + 1);
    setCount(count + 6);
  };

  return (
    <div>
      <Hero />
      <Section title="Working with GET request" id={"users"}>
        <UserList />
      </Section>
      <BtnShowMore handlePagination={handlePagination} />
      <Section title="Working with POST request" id={"signup"}>
        <UserForm />
      </Section>
      <Section title="User successfully registered">
        <RegistrationSuccessMessage />
      </Section>
    </div>
  );
};

export default Home;
