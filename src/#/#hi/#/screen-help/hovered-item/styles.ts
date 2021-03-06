import { makeStyles, Theme } from '@material-ui/core/styles';

// import { ReactComponent as Clock1Svg } from './clock_1.svg';
import Clock1Png from './clock_1.png';

/* tslint:disable */
export const useStyles = makeStyles((theme: Theme) => ({
  desc: {
    fontWeight: 300,
  },
  icon: {
    backgroundColor: 'transparent',
    '& svg': {
      color: theme.palette.secondary.dark,
    },
  },
  item: {
    backgroundColor: theme.palette.default.contrastText,
    boxShadow: 'none',
    color: theme.palette.default.light,
    cursor: 'pointer',
    height: '100%',
    padding: theme.spacing(),
    position: 'relative',
    minHeight: '30vh',
    transition: theme.transitions.create('all', {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut,
    }),
    '&:hover': {
      backgroundColor: '#29292b',
      backgroundImage: theme.gradient[0],
      boxShadow: theme.shadows[4],
      color: theme.palette.default.contrastText,
      transition: theme.transitions.create('background-color'),
      '& $svgWrap': {
        display: 'block',
      },
    },
  },
  svgWrap: {
    backgroundImage: `url("${Clock1Png}")`,
    backgroundSize: 'contain',
    display: 'none',
    opacity: 0.5,
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: '95px',
    height: '140px',
  },
  title: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: 400,
  },
}));
