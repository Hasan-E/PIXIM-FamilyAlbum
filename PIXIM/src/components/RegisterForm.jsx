import { TextField, Button, Avatar } from "@mui/material";
import useImageUpload from "../hook/useImageUpload";

const RegisterForm = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  setFieldValue,
}) => {
  const { fileInputRef, preview, uploading, handleImageSelect } =
    useImageUpload((imageUrl) => setFieldValue("image", imageUrl));
  return (
    <form onSubmit={handleSubmit}>
      <Avatar
        src={preview || "/addprofile.png"}
        sx={{
          m: "auto",
          width: 100,
          height: 100,
          cursor: "pointer",
          mb: 2,
        }}
        onClick={() => fileInputRef.current.click()}
      />

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageSelect}
        style={{ display: "none" }}
      />
      <TextField
        fullWidth
        name="email"
        label="Email"
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        type="email"
        value={values.email}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
        margin="normal"
      />
      <TextField
        fullWidth
        name="username"
        label="User Name"
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        type="text"
        value={values.username}
        error={touched.username && Boolean(errors.username)}
        helperText={touched.username && errors.username}
        margin="normal"
      />
      <TextField
        fullWidth
        name="firstName"
        label="First Name"
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        type="text"
        value={values.firstName}
        error={touched.firstName && Boolean(errors.firstName)}
        helperText={touched.firstName && errors.firstName}
        margin="normal"
      />
      <TextField
        fullWidth
        name="lastName"
        label="Last Name"
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        type="text"
        value={values.lastName}
        error={touched.lastName && Boolean(errors.lastName)}
        helperText={touched.lastName && errors.lastName}
        margin="normal"
      />
      <TextField
        fullWidth
        name="password"
        label="Password"
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        type="password"
        value={values.password}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
        margin="normal"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3 }}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "JOIN"}
      </Button>
    </form>
  );
};

export default RegisterForm;
