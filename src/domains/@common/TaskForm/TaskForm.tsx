import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CloseIcon from '@material-ui/icons/Close';
import EventIcon from '@material-ui/icons/Event';
import * as React from 'react';
import { Field, InjectedFormProps } from 'redux-form';
import { required, url } from 'redux-form-validators';

import { Input } from 'liw-components/Input';
import { TextArea } from 'liw-components/TextArea';
import { TitleInput } from 'liw-components/TitleInput';

import { nullIfEmpty, parseNumber } from 'src/store/@common/helpers';

export interface ITaskFormData {
  description?: string;
  title?: string;
  projectId: number;
  value: number;
}

export interface ITaskFormProps extends InjectedFormProps<ITaskFormData, ITaskFormProps> {
  buttonText?: string;
  classes?: any;
  closeDialog: any;
  projectId: number;
  projectTasksIsLoading: boolean;
}

export class TaskFormJsx extends React.PureComponent<ITaskFormProps, {}> {
  render() {
    const { buttonText, classes, closeDialog, handleSubmit, submitting } = this.props;
    return (
      <>
        <DialogTitle>
          <IconButton onClick={closeDialog} className={classes.close}>
            <CloseIcon fontSize={'small'} />
          </IconButton>
        </DialogTitle>
        <DialogContent className={classes.card}>
          <form>
            <div className={classes.header}>
              <Field
                bold
                icon={<EventIcon />}
                name="title"
                component={TitleInput}
                validate={[required({ msg: 'Обязательное поле' })]}
              />
            </div>
            <Field
              name="description"
              icon={<AssignmentIcon />}
              component={TextArea}
              title={'Описание'}
              placeholder={'Введи ваше описание'}
            />
            <div className={classes.field}>
              <Field
                name="source"
                component={Input}
                label="Ссылка на сторонний ресурс"
                parse={nullIfEmpty}
                validate={[url({ msg: 'Должно быть ссылкой!', if: (vv, v) => !!v })]}
              />
            </div>
            <div className={classes.field}>
              <Field name="value" component={Input} parse={parseNumber} label="Оценка задачи" />
            </div>
          </form>
        </DialogContent>
        <DialogActions key={'actions'}>
          <Button color="primary" onClick={handleSubmit} disabled={submitting}>
            {buttonText}
            {submitting && '...'}
          </Button>
        </DialogActions>
      </>
    );
  }
}
