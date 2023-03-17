import { Formik } from "formik";
import { Button } from "../../components/Button";
import { AuthLayout } from "../../layouts/authLayout";
import { signUpSchema } from "../../utils/validationSchema";
import { Input } from "../../components/Input";
import { useAddNewUser } from "../../hooks/useUserData.js";

export const Signup = () => {
  const { mutate, isLoading } = useAddNewUser();
  // const [addUserData, setAddUserData] = useState({
  //   // username:username
  // })
  console.log(isLoading, "loading");
  return (
    <AuthLayout
      title='Sign up'
      buttonText={"Sign up"}
      loading={isLoading}
      type='submit'
    >
      <Formik
        validationSchema={signUpSchema}
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={(values) => {
          mutate({
            username: values.username,
            email: values.email,
            password: values.password,
          });
          console.log(
            {
              username: values.username,
              email: values.email,
              password: values.password,
            },
            "fgdfghdgj"
          );
        }}
      >
        {(formik) => {
          const { touched, errors, isValid } = formik;
          return (
            <form onSubmit={formik.handleSubmit}>
              <Input
                type='text'
                label='User name'
                name='username'
                placeholder='Enter your name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {touched.username && errors.username && (
                <p className='error'>{errors.username}</p>
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
              <Button
                text={"Sign up"}
                type={"submit"}
                disabled={!isValid }
                buttonTheme={"authbutton"}
                disabledButton={!isValid && "disabled"}
                loading={isLoading}
              />
            </form>
          );
        }}
      </Formik>
    </AuthLayout>
  );
};
