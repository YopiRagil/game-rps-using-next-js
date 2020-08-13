import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

// batu=0, kertas=1, gunting=2
function GamePlay(player1, player2) {
  if (player1 === player2) {
    return 0;
  } else if (player1 - player2 === 1 || player1 - player2 === -2) {
    return 1;
  } else if (player1 - player2 === -1 || player1 - player2 === 2) {
    return -1;
  }
}

const useStyles = makeStyles((theme) => ({
  gambar: {
    width: "30%",
    borderRadius: theme.spacing(0, 1, 0, 5),
  },
  gambar2: {
    WebkitTransform: "scaleX(-1)",
    transform: "scaleX(-1)",
    width: "30%",
    borderRadius: theme.spacing(0, 1, 0, 6),
  },
  result: {
    color: "yellow",
    textAlign: "center",
    fontSize: `calc(1.5em + 1.5vw)`,
    fontWeight: "bolder",
  },
}));

export default function GameBoard({ input }) {
  const classes = useStyles();
  const result = GamePlay(input, 1);
  const [score, setScore] = React.useState(0);

  return (
    <div>
      <Grid container>
        <Grid item md={6} style={{ textAlign: "right", marginTop: "100px" }}>
          {input === 0 ? (
            <img
              className={classes.gambar}
              alt="gambar"
              src={"/media/batu.png"}
            />
          ) : input === 1 ? (
            <img
              className={classes.gambar}
              alt="gambar"
              src={"/media/kertas.png"}
            />
          ) : (
            <img
              className={classes.gambar}
              alt="gambar"
              src={"/media/gunting.png"}
            />
          )}
        </Grid>
        <Grid style={{ marginTop: "100px" }} item md={6}>
          <img
            className={classes.gambar2}
            alt="gambar"
            src={"/media/batu.png"}
          />
        </Grid>
      </Grid>
      {result === 0 ? (
        <Typography className={classes.result}>Draw</Typography>
      ) : result === 1 ? (
        <Typography className={classes.result}>You Win</Typography>
      ) : (
        <Typography className={classes.result}>You Lose</Typography>
      )}
    </div>
  );
}
