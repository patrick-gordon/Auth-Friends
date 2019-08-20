import React from "react";

import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventdefault();
    Axios.post("http://localhost:5000/api/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <>
        <h1>Login ya silly animal!</h1>
        <Form>
          <Field type="text" name="username" placeholder="username" />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}

          <Field type="password" name="password" placeholder="password" />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}

          <button>Login</button>
        </Form>
      </>
    );
  }
}

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().min(3).required("You did not choose a username!"),
    password: Yup.string().min(6).required("You did not choose a password!")
  }),

  handleSubmit(values) {
      Axios
      .post()
      .then(res => console.log(res))
      .catch(err => err.response)
  }
})(Login);

export default FormikLogin;
