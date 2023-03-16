import { AuthLayout } from "../../layouts/authLayout";
import { Input } from "../../components/Input";
import { Formik } from "formik";
import { loginSchema } from "../../utils/validationSchema";

export const Login = () => {
  return (
    <AuthLayout
      title='Welcome back!'
      description='Welcome back! please enter your details'
      buttonText='Login'
    >
      <Formik initialValues={{ email: "", password: "" }} validationSchema={loginSchema} onSubmit={() => {}}>
        {(formik) => {
          const { touched, errors } = formik;

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
                <p className="error">{errors.email}</p>
              )}
              <Input
                type='password'
                name='password'
                label='Password'
                placeholder='********'
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
              )}
            </form>
          );
        }}
      </Formik>
    </AuthLayout>
  );
};
