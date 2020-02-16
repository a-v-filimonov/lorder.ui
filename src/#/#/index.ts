import { goBack, push } from 'connected-react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { IState } from '@types';

import { closeDialog, openDialog } from '#/@store/dialog';
import { userRole } from '#/@store/identity';
import { prevLocation } from '#/@store/router';
import { MainJsx } from './Main';

const mapState = createStructuredSelector<IState, any>({
  prevLocation,
  userRole,
});

const mapDispatchToProps = {
  closeDialog,
  goBack,
  openDialog,
  push,
};

export default connect(
  mapState,
  mapDispatchToProps
)(MainJsx);
