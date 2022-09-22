import styles from './authform.module.css';
import { useState } from 'react';

const AuthForm = ({ heading, buttonText, register, onAuth, errors, history, removeError }) => {
  const [ email, setEmail ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ profileImageUrl, setProfileImageUrl ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      email: email.toLowerCase(),
      username: username,
      password: password,
      profileImageUrl: profileImageUrl,
    };

    const authType = register ? "register" : "signin";
    onAuth(authType, newUser)
      .then(() => {
        console.log('%c [AuthForm] User has been logged in.', 'background: honeydew; color: green;');
        history.push('/');
      })
      .catch(() => {
        console.log('%c [AuthForm] Could not log in user.', 'background: pink; color: red;');
        return;
      });
  };

  const handleGuest = () => {
    const testUser = {
      email: 'user@test.com',
      username: 'tester',
      password: 'testUser1.',
      profileImageUrl: '',
    };
    onAuth('signin', testUser)
      .then(() => {
        console.log('%c [AuthForm] User has been logged in.', 'background: honeydew; color: green;');
        history.push('/');
      })
      .catch(() => {
        console.log('%c [AuthForm] Could not log in user.', 'background: pink; color: red;');
        return;
      });
  };

  history.listen(() => {
    removeError();
  });

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>{heading}</h2>
        { errors.message && <div className={styles.alert}>{errors.message}</div> }
        <label htmlFor='email'>E-Mail:</label>
        <input
          className={styles.authInput}
          id='email'
          name='email'
          onChange={(event) => setEmail(event.target.value)}
          type='email'
          // value={newUser.email}
        />
        {register && (
            <>
                <label htmlFor='username'>Username:</label>
                <input
                className={styles.authInput}
                id='username'
                name='username'
                onChange={(event) => setUsername(event.target.value)}
                type='text'
                // value={newUser.username}
                />
                <label htmlFor='image-url'>Image Url:</label>
                <input
                className={styles.authInput}
                id='image-url'
                name='profileImageUrl'
                onChange={(event) => setProfileImageUrl(event.target.value)}
                type='text'
                // value={newUser.profileImageUrl}
                />
            </>
        )}
        <label htmlFor='password'>Password:</label>
        <input
          className={styles.authInput}
          id='password'
          name='password'
          onChange={(event) => setPassword(event.target.value)}
          type='password'
        //   value={newUser.password}
        />
        <button>{buttonText}</button>
      </form>
      <div className={styles.testLogin}>
        <p>Testing? <span className={styles.guest} onClick={() => handleGuest()}>Use Guest Account.</span></p>
      </div>
    </div>
  );
};

export default AuthForm;
