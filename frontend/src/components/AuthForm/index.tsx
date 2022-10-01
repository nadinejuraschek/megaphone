import { ChangeEvent, FormEvent, useState } from 'react';

import { IAuthForm } from './types';
import styles from './authform.module.css';

const AuthForm = ({
  buttonText,
  errors,
  heading,
  history,
  onAuth,
  register,
  removeError,
}: IAuthForm): JSX.Element => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    profileImageUrl: '',
    username: '',
  });

  const authType = register ? 'register' : 'signin';

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const newUser = {
      ...formData,
      email: formData.email.toLowerCase(),
    };

    onAuth(authType, newUser)
      .then(() => {
        console.log(
          '%c [AuthForm] User has been logged in.',
          'background: honeydew; color: green;'
        );
        history.push('/');
      })
      .catch(() => {
        console.log(
          '%c [AuthForm] Could not log in user.',
          'background: pink; color: red;'
        );
        return;
      });
  };

  const handleGuest = (): void => {
    const testUser = {
      email: 'user@test.com',
      username: 'tester',
      password: 'testUser1.',
      profileImageUrl: '',
    };
    onAuth('signin', testUser)
      .then(() => {
        console.log(
          '%c [AuthForm] User has been logged in.',
          'background: honeydew; color: green;'
        );
        history.push('/');
      })
      .catch(() => {
        console.log(
          '%c [AuthForm] Could not log in user.',
          'background: pink; color: red;'
        );
        return;
      });
  };

  const handleInput = (event: ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    setFormData(prevData => {
      return {
        ...prevData,
        [target.name]: target.value,
      };
    });
  };

  history.listen(() => removeError());

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>{heading}</h2>
        {errors.message && <div className={styles.alert}>{errors.message}</div>}
        <label htmlFor='email'>E-Mail:</label>
        <input
          className={styles.authInput}
          id='email'
          name='email'
          onChange={handleInput}
          type='email'
        />
        {register && (
          <>
            <label htmlFor='username'>Username:</label>
            <input
              className={styles.authInput}
              id='username'
              name='username'
              onChange={handleInput}
              type='text'
            />
            <label htmlFor='image-url'>Image Url:</label>
            <input
              className={styles.authInput}
              id='image-url'
              name='profileImageUrl'
              onChange={handleInput}
              type='text'
            />
          </>
        )}
        <label htmlFor='password'>Password:</label>
        <input
          className={styles.authInput}
          id='password'
          name='password'
          onChange={handleInput}
          type='password'
        />
        <button>{buttonText}</button>
      </form>
      <div className={styles.testLogin}>
        <p>
          Testing?{' '}
          <span className={styles.guest} onClick={() => handleGuest()}>
            Use Guest Account.
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
