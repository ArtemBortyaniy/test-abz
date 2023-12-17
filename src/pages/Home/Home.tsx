import React, { FC, useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { useDispatch } from "react-redux";
import { Action } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";
import { getUsers } from "../../redux/users/operations";
import { getPositions } from "../../redux/positions/operations";
import UserList from "../../components/UserList/UserList";
import BtnShowMore from "../../components/BtnShowMore/BtnShowMore";
import UserForm from "../../components/UserForm/UserForm";
import { getToken } from "../../redux/token/operations";

const Home: FC = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(3);
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
    setCount(count + 3);
  };

  return (
    <div>
      <Hero />
      <Section title="Working with GET request">
        <UserList />
      </Section>
      <BtnShowMore handlePagination={handlePagination} />
      <Section title="Working with POST request">
        <UserForm />
      </Section>
    </div>
  );
};

export default Home;
