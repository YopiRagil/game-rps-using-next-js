import Head from "next/head";
import React from "react";
import GameBoard from "../component/GameBoard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 5, 0, 5),
  },
  textTitle: {
    fontSize: `calc(1em + 2vw)`,
    color: "yellow",
    margin: theme.spacing(0, 0, 2, 0),
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(15, 0, 10, 0),
    padding: theme.spacing(2),
    width: "20%",
  },
  textToBold: {
    color: "blue",
    fontWeight: "bold",
  },
  player: {
    color: "white",
    margin: theme.spacing(0, 0, 3, 8),
    fontWeight: "bold",
    fontSize: `calc(1em + 0.5vw)`,
  },
  marginInGrid: {
    marginLeft: theme.spacing(-6),
  },
  playerChoice: {
    color: "yellow",
    margin: theme.spacing(0, 0, 3, 8),
    fontWeight: "bold",
  },
}));
export default function Home() {
  const classes = useStyles();
  const [input, setInput] = React.useState(0);
  const [load, setLoad] = React.useState(false);
  const handleInput = (value) => {
    setInput(value);
  };

  return (
    <div>
      <Head>
        <title>Batu Kertas Gunting</title>
        <Button rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography className={classes.textTitle}>
          <span className={classes.textToBold}>Ba</span>tu Ker
          <span className={classes.textToBold}>tas</span>{" "}
          <span className={classes.textToBold}>Gu</span>nti
          <span className={classes.textToBold}>e</span>ngg
        </Typography>
        <Grid container className={classes.root}>
          <Grid item md={2}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Typography className={classes.player}>Player 1</Typography>
              <Typography className={classes.playerChoice}>
                Choice One:
              </Typography>
              <Button onClick={() => handleInput(1)}>
                <img
                  style={{ width: "30%", borderRadius: "0 0 0  20%" }}
                  src={"/media/kertas.png"}
                />
              </Button>
              <Button onClick={() => handleInput(2)}>
                <img
                  style={{ width: "30%", borderRadius: "0 0 0  20%" }}
                  src={"/media/gunting.png"}
                />
              </Button>
              <Button onClick={() => handleInput(0)}>
                <img
                  style={{ width: "30%", borderRadius: "0 0 0  20%" }}
                  src={"/media/batu.png"}
                />
              </Button>
            </Grid>
          </Grid>
          <Grid item md={8}>
            <GameBoard input={input} />
          </Grid>
          <Grid item md={2}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-end"
              className={classes.marginInGrid}
            >
              <Typography className={classes.player}>Player 2</Typography>
              <Typography className={classes.playerChoice}>
                Enemy Choice:
              </Typography>
              <img
                style={{
                  width: "30%",
                  borderRadius: "0 0 0  20%",
                  WebkitTransform: "scaleX(-1)",
                  transform: "scaleX(-1)",
                }}
                src={"/media/kertas.png"}
              />
              <img
                style={{
                  width: "30%",
                  borderRadius: "0 0 0  20%",
                  WebkitTransform: "scaleX(-1)",
                  transform: "scaleX(-1)",
                }}
                src={"/media/gunting.png"}
              />
              <img
                style={{
                  width: "30%",
                  borderRadius: "0 0 0  20%",
                  WebkitTransform: "scaleX(-1)",
                  transform: "scaleX(-1)",
                }}
                src={"/media/batu.png"}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            Surrender
          </Button>
        </Grid>
      </main>
    </div>
  );
}
