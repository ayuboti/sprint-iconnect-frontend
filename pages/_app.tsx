import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'
import NoSsr from '@material-ui/core/NoSsr';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NextLink from 'next/link'
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

function App({Component, pageProps}: AppProps) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <title>Spring I Connect</title>
      </Head>
      <NoSsr>
        <CssBaseline/>
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              Sprint I connect
            </Typography>
            <nav>
              <NextLink href={'/'}>
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                  Home
                </Link>
              </NextLink>
              <NextLink href={'/packages'}>
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                  Packages
                </Link>
              </NextLink>
              <NextLink href={'/support'}>
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                  Support
                </Link>
              </NextLink>
            </nav>
            <NextLink href="/login">
              <Button color="primary" variant="outlined" className={classes.link}>
                Login
              </Button>
            </NextLink>
          </Toolbar>
        </AppBar>

        <Component {...pageProps} />
      </NoSsr>
    </>

  )
}

export default App
