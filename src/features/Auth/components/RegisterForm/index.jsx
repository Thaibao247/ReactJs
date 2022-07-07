import React from "react";
import InputField from "../../../../components/form-controls/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Avatar, Button, Typography } from "@mui/material";
import LockIcon from "@material-ui/icons/Lock";
import { makeStyles } from "@material-ui/core/styles";
import PasswordField from "../../../../components/form-controls/PasswordField";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "16px",
  },
  Avatar: {
    margin: "0 auto",
    backgroundColor: "red !important",
  },
  title: {
    textAlign: "center",
    marginTop: "10px !important",
  },
  submit: {
    marginTop: "20px !important",
  },
}));

function RegisterForm(props) {
  const classes = useStyles();

  const { onSubmit } = props;
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Please enter your full name!")
      .test(
        "should has at least two words",
        "Please enter at least two words.",
        (value) => {
          return value.split(" ").length >= 2;
        }
      ),
    email: yup
      .string()
      .required("Please enter your email!")
      .email("Please enter a valid email address."),
    password: yup
      .string()
      .required("Please enter your password!")
      .min(6, "Please enter at least 6 characters."),
    retypePassword: yup
      .string()
      .required("Please retype your password.")
      .oneOf([yup.ref("password")], "Password dose not match"),
  });
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleRegisterSubmit = (values) => {
    if (!onSubmit) return;
    onSubmit(values);
    form.reset();
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.Avatar}>
        <LockIcon></LockIcon>
      </Avatar>
      <Typography className={classes.title} component="h3" variant="h5">
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleRegisterSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
        />

        <Button
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
        >
          Register
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
