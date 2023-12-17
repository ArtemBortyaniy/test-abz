import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
//type
import { FormValues } from "./FormValues";
//schema
import UserFormSchema from "./UserFormSchema";
//redux
import { getUsers } from "../../redux/users/operations";
import { usePosition } from "../../hooks";
import { createUser } from "../../redux/users/operations";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
//style
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
    // const formData = new FormData();
    // formData.append("email", "adsadsads@gmail.com");
    // formData.append("name", "dadsdasd");
    // formData.append("phone", "+380934530615");
    // formData.append("photo", "C:\\fakepath\\Ellipse 2.jpg");
    // formData.append("position_id", "3");

    dispatch(createUser(values));
    dispatch(getUsers({ page: 1, count: 6 }));
    // resetForm();
  }

  const handleFileChange = (event: any) => {
    const fileName = event.target.files[0]?.name;
    const label = document.querySelector(`label[for="fileInput"]`);
    if (label) {
      label.textContent = fileName;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={UserFormSchema}
    >
      {({ errors, touched, isValid }) => (
        <Form className={scss.form}>
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

          <div className={scss.wrapperRadio}>
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
              name="position_id"
              component="div"
              className={scss.error}
            />
          </div>
          <div className={scss.inputPhoto}>
            <div className={scss.box}>Upload</div>
            <Field
              type="file"
              name="photo"
              id="fileInput"
              className={scss.input}
              onInput={handleFileChange}
            />
            <div className={scss.box1}></div>
            <label htmlFor="fileInput" className={scss.labelFile}>
              Upload your photo
            </label>
            <ErrorMessage component="div" name="photo" className={scss.error} />
          </div>

          <div className={scss.wrapperBtn}>
            <button
              type="submit"
              className={scss.btnSubmit}
              disabled={!isValid}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
