import { Container, Box, Typography, Avatar } from "@mui/material";
import AuthLogo from "../components/AuthLogo";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import LoginForm from "../components/LoginForm";
import useAuthCall from "../hook/useAuthCall";

const Login = () => {
  const { login } = useAuthCall();
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Password should be more than 8 characters")
      .matches(/[a-z]/, "Password should include lowercase")
      .matches(/[A-Z]/, "Password should include uppercase")
      .matches(/\d+/, "Password should include numeric"),
  });
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <AuthLogo />
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            mt: 4,
          }}
        >
          <Avatar
            sx={{
              backgroundColor: "secondary.main",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography variant="h4" align="center" mb={4} color="secondary.main">
            SIGN IN
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              login(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <LoginForm {...props} />}
          />

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/register">Not a member yet? Sign up today!</Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
