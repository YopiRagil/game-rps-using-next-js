import Head from "next/head";
import React from "react";
import Animation from "../component/Animation";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 20, 0, 20),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  textTitle: {
    fontSize: `calc(1em + 2vw)`,
    color: "yellow",
    margin: theme.spacing(0, 0, 2, 0),
    textAlign: "center",
  },
  textToBol: {
    color: "blue",
    fontWeight: "bold",
  },
  button: {
    margin: theme.spacing(15, 0, 10, 0),
    padding: theme.spacing(2),
    width: "20%",
  },
}));
export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Batu Kertas Gunting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.main}>
        <Typography className={classes.textTitle}>
          <span className={classes.textToBol}>Ba</span>tu Ker
          <span className={classes.textToBol}>tas</span>
          {"  "}
          <span className={classes.textToBol}>Gu</span>nti
          <span className={classes.textToBol}>e</span>ng
        </Typography>
        <Grid container className={classes.root}>
          <Grid item md={4}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <img
                style={{ width: "30%", borderRadius: "0 0 0  20%" }}
                src={"/media/kertas.png"}
              />
              <img
                style={{ width: "30%", borderRadius: "0 0 0  20%" }}
                src={"/media/gunting.png"}
              />
              <img
                style={{ width: "30%", borderRadius: "0 0 0  20%" }}
                src={"/media/batu.png"}
              />
            </Grid>
          </Grid>
          <Grid item md={8}>
            <Animation />
          </Grid>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<SportsEsportsIcon />}
            href={"/playing"}
          >
            Start
          </Button>
        </Grid>
      </main>
    </div>
  );
}
