import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import EventIcon from '@material-ui/icons/Event';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import NotesIcon from '@material-ui/icons/Notes';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import * as React from 'react';
import { Field, InjectedFormProps } from 'redux-form';
import { required } from 'redux-form-validators';

import { Input } from 'liw-components/Input';
import { TitleInput } from 'liw-components/TitleInput';

import { StartStopBtn } from 'src/components/StartStopBtn';
import { parseNumber } from 'src/store/@common/helpers';
// import { PerformerField } from './PerformerField';
import { TextAreaMarkdown } from './TextAreaMarkdown';

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
  isCurrent?: boolean;
  projectTasksIsLoading: boolean;
  startUserWork?: any;
  stopUserWork: any;
}

export interface ITaskFormState {
  invisible: boolean[];
}

export class TaskFormJsx extends React.PureComponent<ITaskFormProps, ITaskFormState> {
  state = {
    invisible: [true, true, true],
  };

  componentDidMount(): void {
    const arr = this.state.invisible.slice(0);
    arr.forEach((inv: boolean, i: number) => {
      setTimeout(() => {
        this.setState(({ invisible }: ITaskFormState) => ({
          invisible: [...invisible.slice(0, i), false, ...invisible.slice(i + 1)],
        }));
      }, 500 + i * 500);
    });
  }

  render() {
    const { buttonText, classes, closeDialog, isCurrent, submitting, startUserWork, stopUserWork } = this.props;
    const { invisible } = this.state;

    return (
      <>
        <DialogTitle disableTypography>
          <FileCopyIcon fontSize="small" />
          <IconButton onClick={closeDialog}>
            <CloseIcon fontSize={'small'} />
          </IconButton>
        </DialogTitle>
        <DialogContent className={classes.card}>
          <form onSubmit={this.handleSave()} className={classes.cardForm}>
            <div className={classes.cardFirst}>
              <Field
                bold
                icon={<EventIcon />}
                name="title"
                component={TitleInput}
                validate={[required({ msg: 'Обязательное поле' })]}
                onSubmit={this.handleSave(false)}
              />
              <Field
                icon={<NotesIcon fontSize="small" color="inherit" />}
                title={'Описание'}
                placeholder={'Введи ваше описание'}
                name="description"
                component={TextAreaMarkdown}
                onSave={this.handleSave(false)}
              />
            </div>
            <div className={classes.cardSecond}>
              {/*<Field*/}
              {/*name="users"*/}
              {/*component={PerformerField}*/}
              {/*taskId={1}*/}
              {/*/>*/}
              <div>
                <IconButton aria-label="2 members" className={classes.margin}>
                  <Badge badgeContent={2} color="secondary" invisible={invisible[0]}>
                    <GroupAddIcon fontSize="small" />
                  </Badge>
                </IconButton>
                <IconButton aria-label="4 events" className={classes.margin}>
                  <Badge badgeContent={4} color="secondary" invisible={invisible[1]}>
                    <EventAvailableIcon fontSize="small" />
                  </Badge>
                </IconButton>
                <IconButton aria-label="123 labels" className={classes.margin}>
                  <Badge badgeContent={12} color="secondary" invisible={invisible[2]}>
                    <TurnedInIcon fontSize="small" />
                  </Badge>
                </IconButton>
              </div>
              <Field name="value" component={Input} parse={parseNumber} label="Оценка задачи" type="number" />
            </div>
            <button style={{ display: 'none' }} type="submit">
              Эта кнопка нужна, чтоб работало сохранение с клавиатуры
            </button>
          </form>
        </DialogContent>
        <DialogActions key={'actions'} className={classes.actions}>
          {isCurrent !== undefined && (
            <StartStopBtn isStarted={isCurrent} onStart={startUserWork} onStop={stopUserWork} />
          )}
          <div className={classes.grow} />
          <Button color="primary" variant="contained" onClick={this.handleSave()} disabled={submitting}>
            {buttonText}
            {submitting && '...'}
          </Button>
        </DialogActions>
      </>
    );
  }

  private handleSave = (isClose: boolean = true) => (e: React.SyntheticEvent) => {
    const { dirty } = this.props;
    if (dirty) {
      this.props.handleSubmit(e);
    }
    if (isClose) {
      this.props.closeDialog();
    }
  };
}