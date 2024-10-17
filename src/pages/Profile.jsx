import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { postChangeUsername, postChangePassword } from "../utils/apis/api";
import InputFields from "../components/InputFields";
import Button from "../components/Button";
import Navbar from "./Navbar";

import "../styles/profile.css";

const validationSchema = Yup.object({
  username: Yup.string()
    .matches(
      /^[A-Za-z]+$/,
      "The Username should contain only alphabetic characters"
    )
    .min(2, "The first name must be at least 2 characters long")
    .required("Username is required"),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("New Password Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm Password is required"),
});

const Profile = () => {
  const initialValues = { username: "", newPassword: "", confirmPassword: "" };

  return (
    <div className="profile-bg-container d-flex flex-column align-items-center">
      <Navbar />

      <div className="profile-edit-container username-container">
        <h2 className="profile-heading">Profile</h2>

        <Formik
          initialValues={initialValues}
          validateOnMount
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            console.log("Change clicked on");

            const data = await postChangeUsername(values);
            console.log(data);

            // try {
            //   if (data.status === 200) {
            //     resetForm();
            //   } else {
            //     // setToastMsg({ message: postDataResponse.message, isError: true });
            //     setSubmitting(false);
            //   }
            // } catch (error) {
            //   // setToastMsg({ message: "Failed to post data", isError: true });
            // }
          }}
        >
          <Form className="d-flex flex-column align-items-center">
            <InputFields
              type="text"
              name="username"
              className="input-field"
              id="userName"
              title="Username"
              placeholder=""
            />

            <Button
              type="submit"
              className="profile-changes-btn"
              text="Save Changes"
            />
          </Form>
        </Formik>
      </div>

      <div className="profile-edit-container password-container">
        <h2 className="profile-heading">Password</h2>

        <Formik
          initialValues={initialValues}
          validateOnMount
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const data = await postChangePassword(values);
            console.log(data);
          }}
        >
          <Form className="d-flex flex-column align-items-center">
            <InputFields
              type="password"
              name="currentPassword"
              className="input-field"
              id="currentPassword"
              title="Current Password"
              placeholder=""
            />
            <InputFields
              type="password"
              name="newPassword"
              className="input-field"
              id="newPassword"
              title="New Password"
              placeholder=""
            />
            <InputFields
              type="password"
              name="confirmPassword"
              className="input-field"
              id="confirmPassword"
              title="Confirm Password"
              placeholder=""
            />

            <Button
              type="submit"
              className="profile-changes-btn"
              text="Save Changes"
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Profile;
