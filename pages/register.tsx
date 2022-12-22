import { TextField, Button } from "@mui/material";
import Link from 'next/link';
import styles from '../styles/Login-Register.module.scss'

export default function Register() {
  return (
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
      <TextField
        className={styles.field}
        id="password"
        label="Confirm Password"
        type="password"
      />
      <Button type="button" variant="contained" color="primary" className="form__btn">
        Register new account
      </Button>

      <hr />
      <div className={styles.registerOptions}>
        <Link href="login">
          Already have an account?
        </Link>
      </div>
    </form>
  );
}