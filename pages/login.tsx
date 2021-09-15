import React, {useState} from "react";
import {Button, Card, Container, Grid, makeStyles, TextField, Typography} from "@material-ui/core";
import {useRouter} from "next/router";

const apiUrl = 'http://localhost:3333'

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 5,
    padding: '50px 50px',
    margin: '80px 25px',
  },
  input: {
    width: "100%",
    marginTop: "10px",
    marginBottom: "10px"
  },
  title: {
    textAlign: "center"
  },
  button: {
    padding: theme.spacing(1, 3),
    margin: theme.spacing(3, 0, 0, 0),
    backgroundColor: theme.palette.primary.main,
    color: "white"
  },
  error: {
    textAlign: "center",
    color: "red",
    margin: theme.spacing(1, 3)
  }
}));

function LoginPage() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  // input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();
  const loginUrl = `${apiUrl}/login`
  const submitHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    // set loading
    setLoading(true)
    // fetch data
    fetch(loginUrl, {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({email, password}),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(
      (response) => {
        const data = response.json().then(
          (data: { message: string }) => {
            if (response.status === 200) {
              router.push('/')
            } else {
              setLoading(false)
              // @ts-ignore
              setErrors([data.message])
            }
          }
        ).catch(
          error => console.error(error)
        )
      }
    ).catch(
      (error) => {
        setLoading(false)
        console.error(error)
      }
    )
  }
  if (isLoading) {
    return null
  }
  return (
    <>
      <Container>
        <Grid container justify={'center'}>
          <Grid item xs={9} md={6}>
            <Card className={classes.card}>
              <Typography variant={"h4"} className={classes.title}>
                Login
              </Typography>
              {
                errors.map(
                  (error, key) => {
                    return (
                      <p key={key} className={classes.error}>
                        <i>
                          {error}
                        </i>
                      </p>
                    )
                  }
                )
              }
              <form onSubmit={submitHandler}>
                <div>
                  <TextField
                    error={errors.length !== 0}
                    required
                    onChange={
                      (e) => {
                        setEmail(e.target.value.toString())
                      }
                    }
                    className={classes.input}
                    label={"Email"}/>
                </div>
                <div>
                  <TextField
                    error={errors.length !== 0}
                    required
                    onChange={
                      (e) => {
                        setPassword(e.target.value.toString())
                      }
                    }
                    type={"password"}
                    className={classes.input}
                    label={"Password"}/>
                </div>
                <Grid container justify={"center"}>
                  <Grid item>
                    <Button className={classes.button} type={"submit"}>
                      REGISTER
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default LoginPage