import { AuthLayout } from "../../layouts/authLayout";
import { Input } from "../../components/Input";

export const Signup = () => {
  return (
    <AuthLayout title='Sign up' buttonText={"Sign up"}>
      <form>
        <Input type='text' label='Name' placeholder='Enter your name' />
        <Input type='email' label='Email' placeholder='Enter your email' />
        <Input
          type='password'
          label='Password'
          placeholder='Create a Password'
        />
      </form>
    </AuthLayout>
  );
};
