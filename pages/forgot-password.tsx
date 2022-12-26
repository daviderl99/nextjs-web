import { TextField, Button } from "@mui/material";
import Link from 'next/link';
import styles from '../styles/Login-Register.module.scss'

export default function Register() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <TextField
          className={styles.field}
          id="email"
          label="Email"
        />

        <Button type="button" variant="contained" color="primary" className="form__btn">
          Send new password
        </Button>

        <hr />
        <div className={styles.registerOptions}>
          <Link href="login">
            &lt; Back
          </Link>
        </div>
      </form>
    </div>
  );
}