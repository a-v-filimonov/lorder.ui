import React, { useCallback, useState } from 'react';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { LinkButton } from '@domains/@common/LinkButton';
import Block from '@domains/@Hi/@common/Block';
import ActiveClock from './ActiveClock';
import { useStyles } from './styles';

interface Screen1I {
  btnText2?: string;
  text2?: string;
}

const Screen1: React.FC<Screen1I> = ({ btnText2, text2 }) => {
  const classes = useStyles();

  const [counter, setCounter] = useState(0);
  const [slowTimeSpeed, setSlowTimeSpeed] = useState(counter);
  const handleHoverButton = useCallback(() => {
    setCounter(state => state + 1);
    setSlowTimeSpeed(counter);
  }, [counter, setSlowTimeSpeed]);
  const handleLeaveButton = useCallback(() => {
    setSlowTimeSpeed(0);
  }, [setSlowTimeSpeed]);

  return (
    <Block className={classes.content} direction="row-reverse">
      <Grid item md={1} xs={false} />
      <Grid item className={classes.block} md={5} xs={12}>
        <ActiveClock slowTimeSpeed={slowTimeSpeed} />
      </Grid>
      <Grid item className={classes.block} md={5} xs={12}>
        <Typography className={classes.question} variant="h4">
          А ты управляешь своим временем?
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.motto} variant="h5">
          <span className={classes.title}>ALTIORE</span> - From people to generations
        </Typography>
        <LinkButton
          onMouseOver={handleHoverButton}
          onMouseLeave={handleLeaveButton}
          variant="outlined"
          color="secondary"
          className={classes.button}
          to={'/login'}
          id="main-big-btn"
        >
          Управлять временем
        </LinkButton>
      </Grid>
      <Grid item md={1} xs={false} />
    </Block>
  );
};

export default Screen1;
