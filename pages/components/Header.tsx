import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from 'next/link';
import styles from '../../styles/Header.module.scss';

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link href="/">HOME</Link>
        <Box sx={{ flexGrow: 1 }} />

        {/* <div className={styles.links}>
          <Link href="">About</Link>
          <Link href="">FAQ</Link>
          <Link href="">Legal</Link>
        </div> */}
        <Button color="inherit">
          <Link href="/login">
            Login
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}