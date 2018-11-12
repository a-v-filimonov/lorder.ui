import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';

import { closeDialog, openDialog } from 'src/store/dialog/index';
import { deleteProjectMember, projectMembers } from 'src/store/projects/index';
import { projectId } from 'src/store/router/index';
import { ProjectMembersJsx } from './ProjectMembers';
import { styles } from './styles';

export const ProjectMembers = connect(
  createStructuredSelector({
    projectId,
    projectMembers,
  }),
  {
    closeDialog,
    deleteProjectMember,
    goToPage: push,
    openDialog,
  },
  (
    { projectId, ...restState }: any,
    { deleteProjectMember, goToPage, ...restDispatch }: any,
    { match, ...restOwn }: any
  ) => ({
    ...restState,
    ...restDispatch,
    deleteProjectMember: (memberId: number) => deleteProjectMember({ memberId, projectId }),
    ...restOwn,
  })
)(withStyles(styles, { withTheme: true })(ProjectMembersJsx));