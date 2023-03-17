import { AuthLayout } from "../../layouts/authLayout";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Formik } from "formik";
import { loginSchema } from "../../utils/validationSchema";

export const Login = () => {
  return (
    <AuthLayout
      title='Welcome back!'
      description='Welcome back! please enter your details'
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={() => {}}
      >
        {(formik) => {
          const { touched, errors, isValid, dirty } = formik;

          return (
            <form onSubmit={formik.handleSubmit}>
              <Input
                type='email'
                name='email'
                label='Email'
                placeholder='Enter your email'
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {touched.email && errors.email && (
                <p className='error'>{errors.email}</p>
              )}
              <Input
                name='password'
                label='Password'
                placeholder='********'
                showPassword
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {touched.password && errors.password && (
                <p className='error'>{errors.password}</p>
              )}
              <Button
                text={"Log in"}
                type={"submit"}
                disabled={!isValid}
                buttonTheme={"authbutton"}
                disabledButton={!isValid && !dirty ? "disabled" : ""}
              />
            </form>
          );
        }}
      </Formik>
    </AuthLayout>
  );
};
