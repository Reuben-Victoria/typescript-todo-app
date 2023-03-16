import { Formik } from "formik";
import { AuthLayout } from "../../layouts/authLayout";
import { signUpSchema } from "../../utils/validationSchema";
import { Input } from "../../components/Input";

export const Signup = () => {
  return (
    <AuthLayout title='Sign up' buttonText={"Sign up"}>
      <Formik
        validationSchema={signUpSchema}
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={() => {}}
      >
        {(formik) => {
          const { touched, errors } = formik;
          return (
            <form onSubmit={formik.handleSubmit}>
              <Input
                type='text'
                label='Name'
                name='name'
                placeholder='Enter your name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {touched.name && errors.name && (
                <p className='error'>{errors.name}</p>
              )}
              <Input
                type='email'
                label='Email'
                name='email'
                placeholder='Enter your email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {touched.email && errors.email && (
                <p className='error'>{errors.email}</p>
              )}
              <Input
                type='password'
                label='Password'
                name='password'
                placeholder='Create a Password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {touched.password && errors.password && (
                <p className='error'>{errors.password}</p>
              )}
            </form>
          );
        }}
      </Formik>
    </AuthLayout>
  );
};
