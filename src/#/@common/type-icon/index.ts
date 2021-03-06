import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { getTaskTypeById } from '#/@store/task-types';

import { TypeIconTsx } from './type-icon';

const mapStateToProps = createStructuredSelector({
  getTaskTypeById,
} as any);

export default connect(mapStateToProps)(TypeIconTsx) as any;
