import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import PhoneInput from "react-phone-input-2";

export const formValidationSchema = yup.object({
  name: yup
    .string()
    .required("Please fill name")
    .min(3)
    .max(15)
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Name can only contain Latin letters."
    ),
  email: yup.string().required("Please fill movie url"),
  //   phone: yup.number().required("Please fill phone"),
  // .min(0, "0 - 10 required")
  // .max(5, "Should not exceed 10"),
  password: yup
    .string()
    .required("Please fill password")
    .min(6, "Minimum 6 character needed"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("confirm password is required"),
});
function Form() {
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        gender: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: async (values) => {
        console.log(values);
      },
    });

  return (
    <div className="add-movie-container">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          variant="outlined"
          className="text-feild"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          name="name"
        />
        <br />
        <br />
        <span className="error">
          {touched.name && errors.name ? errors.name : ""}
        </span>
        <br />
        <input
          placeholder="Email"
          variant="outlined"
          className="text-feild"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
          name="email"
        />
        <br />
        <br />
        <span className="error">
          {touched.email && errors.email ? errors.email : ""}
        </span>
        <br />
        <input
          placeholder="Phone "
          variant="outlined"
          className="text-feild"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          type="number"
          name="phone"
        />
        <br />
        <br />
        <span className="error">
          {touched.phone && errors.phone ? errors.phone : ""}
        </span>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="Other"
          onChange={handleChange}
        />
        Other
        <br />
        <br />
        <input
          placeholder="Password"
          variant="outlined"
          className="text-feild"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          name="password"
        />
        <br />
        <br />
        <span className="error">
          {touched.password && errors.password ? errors.password : null}
          <br />
        </span>
        <br />
        <input
          placeholder="Confirm Password"
          variant="outlined"
          className="text-feild"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          name="confirmPassword"
        />
        <br />
        <br />
        <span className="error">
          {touched.confirmPassword && errors.confirmPassword
            ? errors.confirmPassword
            : null}
          <br />
        </span>
        <br />
        <Button
          variant="contained"
          type="submit"
          color="success"
          className="button"
        >
          Save
        </Button>
        <br />
      </form>
    </div>
  );
}
export default Form;
