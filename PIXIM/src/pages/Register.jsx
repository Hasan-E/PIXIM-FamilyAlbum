import {
  Container,
  Box,
  Typography,
  Avatar,
  Paper,
  useTheme,
} from "@mui/material";
import AuthLogo from "../components/AuthLogo";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import image from "/Logo.png";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  const theme = useTheme();
  const RegisterSchema = Yup.object().shape({
    // image: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    username: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too Long!")
      .required("Required"),
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
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
          <Typography variant="h4" align="center" mb={4} color="secondary.main">
            JOIN YOUR FAMILY
          </Typography>
          <Avatar
            sx={{
              backgroundColor: "secondary.main",
              m: "auto",
              width: 110,
              height: 110,
            }}
          >
            <Paper
              elevation={4}
              sx={{
                p: 2,
                borderRadius: "50%",
                bgcolor: theme.palette.background.default,
                boxShadow: `0px 4px 12px ${theme.palette.secondary.main}`,
              }}
            >
              <img
                src={image}
                alt="main logo"
                style={{
                  height: "80px",
                  width: "80px",
                  objectFit: "contain",
                  borderRadius: "50%",
                }}
              />
            </Paper>
          </Avatar>

          <Formik
            initialValues={{
              // image: "",
              email: "",
              username: "",
              firstName: "",
              lastName: "",
              password: "",
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(formikProps) => <RegisterForm {...formikProps} />}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Have an account? Sign in!</Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
