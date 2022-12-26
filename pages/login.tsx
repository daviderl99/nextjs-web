import { TextField, Button } from "@mui/material";
import Link from 'next/link';
import styles from '../styles/Login-Register.module.scss'

export default function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <TextField
          className={styles.field}
          id="email"
          label="Email"
        />
        <TextField
          className={styles.field}
          id="password"
          label="Password"
          type="password"
        />
        <Button type="button" variant="contained" color="primary" className="form__btn">
          Login
        </Button>

        <hr />
        <div className={styles.loginOptions}>
          <Link href="register">Register an account</Link>
          <Link href="forgot-password">Forgot password?</Link>
        </div>
      </form>
    </div>
  );
}