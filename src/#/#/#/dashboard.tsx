import React, { useCallback } from 'react';
import MediaQuery from 'react-responsive';
import { RouteComponentProps } from 'react-router-dom';

import { Grid } from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';

import { TIME_LINE_HEIGHT } from '@components/time-line';

import ActivityTimeline from '#/#/#/@common/activity-time-line';
import { UI_PROP } from '#/@store/ui';

import DailyRoutineDialog from './daily-routine';
import { LastEvents } from './last-events';
import { StartForm } from './start-form';
import TasksList from './tasks-list';

export interface IProps extends RouteComponentProps<{}> {
  isTimeEdit: boolean;
  toggleUiSetting: any;
}

export const DashboardJsx: React.FC<IProps> = ({ isTimeEdit, toggleUiSetting }) => {
  const classes = useStyles();
  const theme = useTheme();

  const toggleDailyRoutine = useCallback(() => {
    toggleUiSetting(UI_PROP.TIME_EDIT);
  }, [toggleUiSetting]);

  return (
    <div className={classes.content2}>
      <div className={classes.timeLine}>
        <ActivityTimeline onTimelineClick={toggleDailyRoutine} fullSize={false} />
        <DailyRoutineDialog open={isTimeEdit} onClose={toggleDailyRoutine} />
      </div>

      <Grid container spacing={4} className={classes.contentWrap}>
        <Grid item lg={8} md={7} sm={12} className={classes.content}>
          <TasksList />
          <StartForm />
        </Grid>
        <MediaQuery minDeviceWidth={theme.breakpoints.values.sm}>
          <Grid item lg={4} md={5} sm={12} xs={12} className={classes.lastEvents}>
            <LastEvents />
          </Grid>
        </MediaQuery>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  collapse: {
    paddingLeft: 88,
  },
  content: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  content2: {
    flexGrow: 1,
    margin: '40px auto 24px',
    maxWidth: theme.mainContent.width,
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      overflowX: 'hidden',
      padding: theme.spacing(1, 0),
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      width: theme.mainContent.width,
    },
    [theme.breakpoints.up('xl')]: {
      width: theme.mainContent.bigWidth,
    },
  },
  contentWrap: {},
  duration: {
    width: 100,
  },
  lastEvents: {
    [theme.breakpoints.down('sm')]: {
      margin: '0 10px',
      maxWidth: '100%',
    },
  },
  listRoot: {
    '& > li:last-child': {
      marginBottom: 0,
    },
    paddingBottom: 0,
  },
  project: {
    width: 100,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    cursor: 'pointer',
  },
  timeLine: {
    alignItems: 'flex-start',
    display: 'flex',
    height: TIME_LINE_HEIGHT,
    left: 0,
    marginTop: theme.spacing(2),
    padding: theme.spacing(0, 4),
    position: 'absolute',
    top: (theme.mixins.toolbar.height as number) + 8,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  title: {
    width: 320,
  },
}));
