import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import { onSubmitFail, onSubmitForm } from 'src/store/@common/helpers';
import { closeDialog } from 'src/store/dialog';
import {
  getEditTaskInitialValues,
  patchProjectTask,
  PROJECT_EDIT_TASK_FORM_NAME,
  projectTasksIsLoading,
} from 'src/store/projects';
import { TaskForm } from './StyledTaskForm';
import { ITaskFormData, ITaskFormProps } from './TaskForm';

const mapStateToProps = createStructuredSelector({
  getEditTaskInitialValues,
  projectTasksIsLoading,
});

const mapDispatchToProps = {
  closeDialog,
};

const mergeProps = (
  { getEditTaskInitialValues, ...restState }: any,
  restDispatch: any,
  { taskId, projectId, ...restOwn }: any
) => ({
  ...restState,
  initialValues: getEditTaskInitialValues(taskId, projectId),
  projectId,
  ...restDispatch,
  ...restOwn,
});

export const PatchTaskForm = connect<
  any,
  any,
  { buttonText?: string; taskId: number | string; projectId: number | string }
>(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(reduxForm<ITaskFormData, ITaskFormProps>({
  enableReinitialize: true,
  form: PROJECT_EDIT_TASK_FORM_NAME,
  onSubmit: onSubmitForm(patchProjectTask, props => ({ projectId: props.projectId })),
  onSubmitFail,
  onSubmitSuccess: (res, dispatch, { closeDialog }) => {
    closeDialog();
  },
})(TaskForm) as any);
