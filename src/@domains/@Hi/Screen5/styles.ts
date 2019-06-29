import { makeStyles, Theme } from '@material-ui/core/styles';

const MIN_HEIGHT = "calc(50vh - 80px)";

export const useStyles = makeStyles((theme: Theme) => ({
  achievement: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexFlow: 'column nowrap',
    flexGrow: 1,
    minHeight: MIN_HEIGHT,
    padding: theme.spacing(2),
    zIndex: 1,
  },
  achievementBlock: {
    alignItems: "flex-start",
  },
  team: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexFlow: 'column nowrap',
    flexGrow: 1,
    minHeight: MIN_HEIGHT,
    padding: theme.spacing(2),
    zIndex: 1,
  },
}));
