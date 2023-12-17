import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import UserFormSchema from "./UserFormSchema";
import { FormValues } from "./FormValues";
import { usePosition } from "../../hooks";
import { createUser } from "../../redux/users/operations";
import scss from "./UserForm.module.scss";

const UserForm = () => {
  const [isVisibleName, setIsVisibleName] = useState(false);
  const [isVisibleEmail, setIsVisibleEmail] = useState(false);
  const [isVisiblePhone, setIsVisiblePhone] = useState(false);
  const dispatch = useDispatch<ThunkDispatch<{}, {}, Action>>();

  const { position } = usePosition();

  const initialValues: FormValues = {
    name: "",
    email: "",
    phone: "",
    position_id: 1,
    photo: "",
  };

  function handleSubmit(
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) {
    console.log(values);
    const formData = new FormData();
    formData.append("email", "adsadsads@gmail.com");
    formData.append("name", "dadsdasd");
    formData.append("phone", "+380934530615");
    formData.append("photo", "C:\\fakepath\\Ellipse 2.jpg");
    formData.append("position_id", "3");

    dispatch(createUser(formData));
    // resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={UserFormSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <div className={scss.iputWrapper}>
            <div className={scss.conrainerInput}>
              {isVisibleName && <label className={scss.label}>Name</label>}

              <Field
                type="text"
                name="name"
                placeholder="Your name"
                onFocus={() => setIsVisibleName(true)}
                className={
                  scss.input +
                  (touched.name
                    ? errors.name
                      ? " " + scss.inputError
                      : " " + scss.inputSuccess
                    : "")
                }
              />
              <ErrorMessage
                name="name"
                component="div"
                className={scss.error}
              />
            </div>

            <div className={scss.conrainerInput}>
              {isVisibleEmail && <label className={scss.label}>Email</label>}
              <Field
                type="email"
                name="email"
                placeholder="Email"
                onFocus={() => setIsVisibleEmail(true)}
                className={
                  scss.input +
                  (touched.email
                    ? errors.email
                      ? " " + scss.inputError
                      : " " + scss.inputSuccess
                    : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className={scss.error}
              />
            </div>

            <div className={scss.conrainerInput}>
              {isVisiblePhone && <label className={scss.label}>Phone</label>}
              <Field
                type="text"
                name="phone"
                placeholder="Phone"
                onFocus={() => setIsVisiblePhone(true)}
                className={
                  scss.input +
                  (touched.phone
                    ? errors.phone
                      ? " " + scss.inputError
                      : " " + scss.inputSuccess
                    : "")
                }
              />
              <div className={scss.example}>+38 (XXX) XXX - XX - XX</div>
              <ErrorMessage
                name="phone"
                component="div"
                className={scss.error}
              />
            </div>
          </div>

          <div>
            <label className={scss.title}>Select your position</label>
            {position.positions?.map((position: any) => (
              <div key={position.id}>
                <label
                  htmlFor={`position-${position.id}`}
                  className={scss.containerRadio}
                >
                  <Field
                    type="radio"
                    name="position_id"
                    value={position.id.toString()}
                    id={`position-${position.id}`}
                    className={scss.radio}
                  />

                  <div className={scss.customRadio}></div>

                  {position.name}
                </label>
              </div>
            ))}
            <ErrorMessage
              name="position"
              component="div"
              className={scss.error}
            />
          </div>
          <div className={scss.inputPhoto}>
            <Field
              type="file"
              name="photo"
              id="fileInput" // привязываем id для связи с label
              className={scss.input}
            />
            <label htmlFor="fileInput"></label>
            <ErrorMessage component="div" name="file" className={scss.error} />
          </div>
          {/* <div>
            <Field
              type="file"
              name="photo"
              id="fileInput"
              className={scss.inputPhoto}
            />
            <label htmlFor="fileInput"></label>

            <ErrorMessage component="div" name="file" className={scss.error} />
          </div> */}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
