import { Theme } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';

export const styles = (theme: Theme) =>
  createStyles({
    buttonTitle: {
      flexBasis: '60%',
      paddingLeft: theme.spacing.unit * 4.5,
      [theme.breakpoints.down('sm')]: {
        display: 'inline-block',
        maxWidth: 146,
      },
    },
    buttonTitleLabel: {
      display: 'block',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textTransform: 'none',
      whiteSpace: 'nowrap',
    },
    duration: {
      flexBasis: '10%',
    },
    listItem: {
      '&:hover': {
        borderColor: theme.palette.primary.main,
      },
      backgroundColor: theme.palette.background.paper,
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[1],
      flexGrow: 1,
      height: 64,
      justifyContent: 'space-between',
      marginBottom: theme.spacing.unit * 2,
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: 2,
        paddingTop: theme.spacing.unit,
      },
    },
    listItemRoot: {
      [theme.breakpoints.down('sm')]: {
        marginRight: 0,
      },
    },
    projectButton: {
      '&:hover p, &:focus p': {
        opacity: 1,
      },
      flexBasis: '16%',
      textTransform: 'none',
      whiteSpace: 'nowrap',
    },
    // projectIcon: {
    //   color: theme.palette.secondary.dark,
    //   marginRight: 4,
    // },
    projectText: {
      opacity: 0.2,
    },
    taskIcon: {
      left: 8,
      position: 'absolute',
    },
    userWorkTable: {
      zIndex: 1202,
    },
  });
