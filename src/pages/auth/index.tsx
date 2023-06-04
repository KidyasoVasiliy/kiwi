import { AuthForm } from 'src/features/auth';
import { dom } from 'src/shared/lib/browser/dom';

const AuthPage = () => {
  dom.useTitle('Sign in to Github Client');

  return (
    <>
      <AuthForm />
    </>
  );
};

export default AuthPage;
